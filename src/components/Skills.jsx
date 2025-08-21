import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Physics simulation for bubble interactions
class BubblePhysics {
  // MODIFIED: Accept container dimensions
  constructor(width, height) {
    this.bubbles = [];
    this.draggedBubble = null;
    this.mousePos = { x: 0, y: 0 };
    // ADDED: Store container bounds
    this.bounds = { width, height };
  }

  // ADDED: Method to update bounds if the container resizes
  updateBounds(width, height) {
    this.bounds.width = width;
    this.bounds.height = height;
  }

  addBubble(id, x, y, radius, isDraggable = true) {
    this.bubbles.push({
      id,
      x,
      y,
      vx: 0,
      vy: 0,
      radius,
      isDraggable,
      isDragging: false,
      originalX: x,
      originalY: y
    });
  }

  updateMousePosition(x, y) {
    this.mousePos = { x, y };
  }

  startDrag(id, mouseX, mouseY) {
    const bubble = this.bubbles.find(b => b.id === id);
    if (bubble && bubble.isDraggable) {
      bubble.isDragging = true;
      this.draggedBubble = bubble;
    }
  }

  stopDrag() {
    if (this.draggedBubble) {
      // When dropped, update its "original" position to the new spot
      this.draggedBubble.originalX = this.draggedBubble.x;
      this.draggedBubble.originalY = this.draggedBubble.y;
      this.draggedBubble.isDragging = false;
      this.draggedBubble = null;
    }
  }

  update() {
    if (this.draggedBubble && this.draggedBubble.isDragging) {
      this.draggedBubble.x = this.mousePos.x;
      this.draggedBubble.y = this.mousePos.y;
    }

    for (let i = 0; i < this.bubbles.length; i++) {
      const bubble = this.bubbles[i];

      if (bubble.isDragging) continue;

      let fx = 0;
      let fy = 0;

      for (let j = 0; j < this.bubbles.length; j++) {
        if (i === j) continue;

        const other = this.bubbles[j];
        const dx = bubble.x - other.x;
        const dy = bubble.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = bubble.radius + other.radius + 10;

        if (distance < minDistance && distance > 0) {
          const force = (minDistance - distance) * 0.1;
          const angle = Math.atan2(dy, dx);
          fx += Math.cos(angle) * force;
          fy += Math.sin(angle) * force;
        }
      }

      const springForce = 0.02;
      fx += (bubble.originalX - bubble.x) * springForce;
      fy += (bubble.originalY - bubble.y) * springForce;

      bubble.vx += fx;
      bubble.vy += fy;
      bubble.vx *= 0.85;
      bubble.vy *= 0.85;
      bubble.x += bubble.vx;
      bubble.y += bubble.vy;

      // ADDED: Boundary collision logic to keep bubbles inside the container 📦
      if (this.bounds.width && this.bounds.height) {
        if (bubble.x - bubble.radius < 0) {
          bubble.x = bubble.radius;
          bubble.vx *= -1; // Reverse horizontal velocity
        }
        if (bubble.x + bubble.radius > this.bounds.width) {
          bubble.x = this.bounds.width - bubble.radius;
          bubble.vx *= -1;
        }
        if (bubble.y - bubble.radius < 0) {
          bubble.y = bubble.radius;
          bubble.vy *= -1; // Reverse vertical velocity
        }
        if (bubble.y + bubble.radius > this.bounds.height) {
          bubble.y = this.bounds.height - bubble.radius;
          bubble.vy *= -1;
        }
      }
    }
  }

  getBubblePosition(id) {
    const bubble = this.bubbles.find(b => b.id === id);
    return bubble ? { x: bubble.x, y: bubble.y } : { x: 0, y: 0 };
  }
}
// Individual Bubble Component
const InteractiveBubble = ({
  skill,
  initialX,
  initialY,
  physics,
  onDragStart,
  onDragEnd,
  size = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const bubbleRef = useRef(null);
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  const sizeClasses = {
    small: 'text-xs px-2 py-2',
    medium: 'text-sm px-3 py-2',
    large: 'text-base px-4 py-3'
  };
  const radiusMap = {
    small: 40,
    medium: 50,
    large: 60
  };

  useEffect(() => {
    physics.addBubble(skill, initialX, initialY, radiusMap[size]);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      const newPos = physics.getBubblePosition(skill);
      setPosition(newPos);
      requestAnimationFrame(updatePosition);
    };
    updatePosition();
  }, []);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    physics.startDrag(skill, e.clientX, e.clientY);
    onDragStart?.(skill);
  }, [skill, physics, onDragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    physics.stopDrag();
    onDragEnd?.(skill);
  }, [skill, physics, onDragEnd]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      return () => document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging, handleMouseUp]);

  return (
    <motion.div
      ref={bubbleRef}
      style={{
        position: 'absolute',
        left: position.x - radiusMap[size],
        top: position.y - radiusMap[size],
        width: radiusMap[size] * 2,
        height: radiusMap[size] * 2,
      }}
      whileHover={{ scale: isHovered ? 1.15 : 1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        // MODIFIED: Added w-full, h-full, and flex display properties directly
        className={`
          w-full h-full flex items-center justify-center
          ${sizeClasses[size]} rounded-full text-white font-medium text-center
          border-2 transition-all duration-300 relative overflow-hidden
          ${isHovered || isDragging
            ? 'bg-gray-600 border-white shadow-2xl shadow-cyan-400/50'
            : 'bg-gradient-to-r from-gray-700/80 to-gray-600/80 border-gray-500/50'
          }
          backdrop-blur-sm select-none
        `}
        animate={isDragging ? {
          boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
          scale: 1.1
        } : {}}
      >
        {skill}

        {/* Animated border */}


        {/* Glow effect */}
        {(isHovered || isDragging) && (
          <motion.div
            className="absolute inset-0 rounded-full bg-grey-600 blur-md -z-10"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}

        {/* Particle effects when dragging */}
        <AnimatePresence>
          {isDragging && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 0
                  }}
                  animate={{
                    x: Math.cos(i * 45 * Math.PI / 180) * 40,
                    y: Math.sin(i * 45 * Math.PI / 180) * 40,
                    opacity: 0,
                    scale: [0, 1, 0]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                  style={{
                    left: '50%',
                    top: '50%'
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// Main Component
const MagneticBubbleSkills = () => {
  const containerRef = useRef(null);
  // MODIFIED: Initialize physicsRef with the container's initial size

  // ADDED: Create a ref for the entire section
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const physicsRef = useRef(new BubblePhysics(800, 600));
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 });
  const [draggedSkill, setDraggedSkill] = useState(null);

  const skills = [
    // Center skill (larger)
    { name: "Full Stack Development", size: "large" },

    // Programming Languages
    { name: "JavaScript", size: "medium" },
    { name: "Python", size: "medium" },
    { name: "C++", size: "medium" },
    { name: "TypeScript", size: "medium" },
    { name: "Java", size: "small" },

    // Frontend Technologies
    { name: "React.js", size: "medium" },
    { name: "HTML", size: "small" },
    { name: "CSS", size: "small" },
    { name: "Tailwind CSS", size: "small" },
    { name: "Framer Motion", size: "small" },

    // Backend & APIs
    { name: "Node.js", size: "medium" },
    { name: "Express.js", size: "small" },
    { name: "MongoDB", size: "small" },
    { name: "MySQL", size: "small" },
    { name: "REST APIs", size: "small" },
    { name: "JWT", size: "small" },
    { name: "Redis", size: "small" },
    { name: "Flask", size: "small" },

    // DevOps & Tools
    { name: "Git & GitHub", size: "medium" },
    { name: "Docker", size: "small" },
    { name: "AWS", size: "small" },
    { name: "Postman", size: "small" },
    { name: "VPS Hosting", size: "small" },

    // Soft Skills
    { name: "Problem Solving", size: "medium" },
    { name: "Adaptability", size: "small" },
    { name: "Leadership", size: "small" },
    { name: "Teamwork", size: "small" },
    { name: "Time Management", size: "small" },
  ];

  // Generate bubble positions in a circular/organic layout
  const generateBubblePositions = useCallback(() => {
    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const positions = [];

    // Center bubble
    positions.push({ x: centerX, y: centerY });

    // Concentric circles for other bubbles
    const circles = [
      { radius: 140, count: 6 },
      { radius: 220, count: 12 },
      { radius: 300, count: 16 }
    ];

    let skillIndex = 1;

    circles.forEach(circle => {
      const angleStep = (2 * Math.PI) / circle.count;
      for (let i = 0; i < circle.count && skillIndex < skills.length; i++) {
        const angle = i * angleStep + (Math.random() - 0.5) * 0.5;
        const radiusVariation = circle.radius + (Math.random() - 0.5) * 40;
        const x = centerX + Math.cos(angle) * radiusVariation;
        const y = centerY + Math.sin(angle) * radiusVariation;
        positions.push({ x, y });
        skillIndex++;
      }
    });

    return positions;
  }, [containerSize, skills.length]);

  const [bubblePositions, setBubblePositions] = useState([]);

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
        // ADDED: Update the physics engine's bounds on resize
        physicsRef.current.updateBounds(rect.width, rect.height);
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    return () => window.removeEventListener('resize', updateContainerSize);
  }, []);

  useEffect(() => {
    setBubblePositions(generateBubblePositions());
  }, [generateBubblePositions]);

  useEffect(() => {
    const physics = physicsRef.current;

    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        physics.updateMousePosition(
          e.clientX - rect.left,
          e.clientY - rect.top
        );
      }
    };

    const animate = () => {
      physics.update();
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleDragStart = useCallback((skill) => {
    setDraggedSkill(skill);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggedSkill(null);
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Dynamic background with floating elements */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-64 h-64 ${i % 3 === 0 ? 'bg-cyan-500/10' : i % 3 === 1 ? 'bg-purple-500/10' : 'bg-pink-500/10'
              } rounded-full blur-3xl`}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          MY SKILLS
        </h1>
        <p className="text-gray-300 text-xl">
          Drag the bubbles around and watch them interact!
        </p>
      </motion.div>

      <motion.div
        ref={containerRef}
        className="relative w-full max-w-5xl h-[700px] bg-gradient-to-br from-white/5 via-gray-800/20 to-black/30 rounded-3xl border border-cyan-500/30 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Floating background particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            animate={{
              x: [0, containerSize.width],
              y: [
                Math.random() * containerSize.height,
                Math.random() * containerSize.height
              ],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            whileInView={{
              x: [0, containerSize.width],
              y: [
                Math.random() * containerSize.height,
                Math.random() * containerSize.height
              ],
            }}
            transition={{
              duration: 12 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Render bubbles */}
        {isInView && (
          <AnimatePresence>
            {skills.map((skill, index) => {
              const position = bubblePositions[index];
              if (!position) return null;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <InteractiveBubble
                    skill={skill.name}
                    initialX={position.x}
                    initialY={position.y}
                    physics={physicsRef.current}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    size={skill.size}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
};

export default MagneticBubbleSkills;