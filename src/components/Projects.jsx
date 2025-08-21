// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const myProjects = [
  { 
    name: "Expense Tracker", 
    description: "A full-featured MERN app for tracking income and expenses, with JWT authentication, protected routing, and interactive charts.", 
    tech: "MongoDB, Express.js, React.js, Node.js, JWT, Recharts", 
    link: "https://www.github.com/Priyang1310/expense-tracker",
    image: "💰",
    color: "from-green-400 to-emerald-500"
  },
  { 
    name: "Chat with Database", 
    description: "A chat-based app to query MySQL & MongoDB databases using natural language, secured with Auth0 and powered by Gemini.", 
    tech: "React.js, Flask, MySQL, MongoDB, Auth0, Gemini-pro, REST API", 
    link: "https://github.com/Priyang1310/Chat-With-Database",
    image: "🤖",
    color: "from-blue-400 to-cyan-500"
  },
  { 
    name: "Portfolio Website", 
    description: "A stunning space-themed portfolio built with React, featuring dark/light mode, animations, and modern UI/UX design.", 
    tech: "React.js, Tailwind CSS, Framer Motion, Space Theme", 
    link: "https://github.com/Priyang1310/portfolio",
    image: "🚀",
    color: "from-purple-400 to-pink-500"
  }
];

const Projects = () => {
  return (
    <div id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12 gradient-text"
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {myProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 40px 80px rgba(6, 182, 212, 0.3)",
                y: -12
              }}
              className="modern-card p-8 rounded-3xl shadow-2xl backdrop-blur-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Project icon */}
              <motion.div
                className="text-7xl mb-6 text-center"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.image}
              </motion.div>

              <motion.h3 
                className="text-2xl font-bold text-cyan-400 mb-4 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.name}
              </motion.h3>
              
              <motion.p 
                className="mt-2 flex-grow text-gray-300 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 pt-6 border-t border-cyan-400/30"
              >
                <p className="text-sm font-semibold text-cyan-400 mb-3">Tech Stack:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(', ').map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white text-xs font-medium px-3 py-1 rounded-full border border-cyan-400/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-auto inline-block text-center bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-cyan-500/50 transition-all duration-300 group-hover:shadow-lg relative overflow-hidden text-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View on GitHub →</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.div
            className="modern-card p-8 rounded-3xl shadow-2xl backdrop-blur-lg border border-cyan-400/30 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">Interested in Collaborating?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              I'm always open to discussing new opportunities and exciting projects. Let's create something amazing together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(6, 182, 212, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Projects;