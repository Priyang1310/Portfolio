import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};



const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const achievements = [
    {
      title: "JEE Mains Excellence",
      description: "Ranked in the top 0.59% (99.41 percentile) in JEE Mains 2022 out of 1 million+ students.",
      icon: "🎯",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10"
    },
    {
      title: "Merit Scholarship",
      description: "Awarded a ₹1,00,000/year Merit Scholarship for academic excellence.",
      icon: "💰",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Flipkart Grid 7.0",
      description: "Advanced to the Semi-Finals of Flipkart Grid 7.0 (2025) from over 1.6 lakh participants.",
      icon: "🏅",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Odoo Combat 2024",
      description: "Led team to the national finale of Odoo Combat 2024.",
      icon: "👑",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    }
  ];

  const skills = [
    { name: "Problem Solving", icon: "🧩", level: 95, color: "from-red-400 to-pink-500" },
    { name: "Team Leadership", icon: "👥", level: 90, color: "from-blue-400 to-cyan-500" },
    { name: "Technical Skills", icon: "⚡", level: 92, color: "from-yellow-400 to-orange-500" },
    { name: "Communication", icon: "💬", level: 88, color: "from-green-400 to-emerald-500" }
  ];

  return (
    <div id="about" className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <FloatingParticles />

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ABOUT ME
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            />
          </motion.div>

          {/* Education Section - 3D Card */}
          <motion.div
            initial={{ opacity: 0, rotateX: 45, y: 100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-20"
          >
            <div className="max-w-5xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 hover:border-cyan-400/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl" />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-4xl shadow-2xl"
                  >
                    🎓
                  </motion.div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Nirma University</h3>
                  <p className="text-xl md:text-2xl text-gray-300 mb-6">Bachelor of Technology</p>
                  <p className="text-lg text-gray-400 mb-8">Computer Science & Engineering (2022-2026)</p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl text-white font-bold text-xl shadow-2xl"
                  >
                    <span>CGPA: 8.32 / 10.0</span>
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      ⭐
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Key Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -10, 
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`relative group h-full bg-gradient-to-br ${achievement.bgColor} backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        animate={hoveredCard === index ? { 
                          scale: [1, 1.2, 1], 
                          rotate: [0, 360] 
                        } : {}}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}
                      >
                        {achievement.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent"
                    animate={hoveredCard === index ? {
                      borderColor: ["transparent", "#06b6d4", "#8b5cf6", "#06b6d4", "transparent"],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Core Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl mb-4 group-hover:drop-shadow-lg"
                  >
                    {skill.icon}
                  </motion.div>
                  
                  <h4 className="text-white font-bold text-lg mb-4">{skill.name}</h4>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission & Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-8 md:p-12 hover:border-cyan-400/60 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-50" />
              
              <div className="relative z-10 text-center">
                <motion.h3 
                  className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Mission & Vision
                </motion.h3>
                
                <motion.p 
                  className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  I'm passionate about creating innovative solutions that bridge the gap between technology and human experience. 
                  My goal is to build applications that not only solve real-world problems but also inspire and delight users 
                  with their elegance and functionality. I believe in continuous learning and pushing the boundaries of what's 
                  possible in the digital realm.
                </motion.p>
                
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mt-8 text-6xl opacity-20"
                >
                  🌟
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;