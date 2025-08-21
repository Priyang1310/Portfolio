// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Clezid Technologies Pvt. Ltd.",
    title: "Full Stack Developer Intern",
    date: "May 2025 - Jun 2025",
    description: [
      "Led a 3-member full stack team to build a scalable connection portal connecting job seekers with recruiters.",
      "Designed and implemented RESTful APIs with Node.js and MongoDB for user, job, and application modules.",
      "Integrated Redis caching to reduce API latency, improving backend responsiveness and scalability.",
      "Initially deployed on AWS ECS, later migrated to a VPS setup for cost-effective hosting."
    ],
    tech: "React.js, Node.js, MongoDB, Redis, Docker, AWS S3, VPS",
    icon: "🚀"
  },
  {
    company: "Mool Finance",
    title: "Backend Developer Intern",
    date: "Nov 2024 - Jan 2025",
    description: [
      "Integrated Gemini Flash API to deliver personalized financial recommendations on user dashboards.",
      "Developed a robust PDF-to-JSON converter and Form 16 extractor to automate income data processing.",
      "Contributed to compensation benchmarking logic and a Flask-based analytics service for salary insights."
    ],
    tech: "Node.js, Flask, Gemini API, Molecular.js",
    icon: "💰"
  },
  {
    company: "MINED 2025 (National Hackathon)",
    title: "Frontend Developer (Contributor)",
    date: "Dec 2024 - Jan 2025",
    description: [
      "Improved MINED 2025 website for a national hackathon by adding features and boosting responsiveness using React.js.",
      "Led frontend development, coordinated task division, and ensured on-time delivery under tight deadlines."
    ],
    tech: "React.js, ChakraUI",
    icon: "🏆"
  }
];

const Experience = () => {
  return (
    <div id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12 gradient-text"
        >
          Work Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-400"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-16 ${
                'md:pl-8 md:text-left'
              } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-800 shadow-2xl z-10 flex items-center justify-center"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </motion.div>
              
              {/* Content card */}
              <motion.div
                className={`modern-card p-8 rounded-3xl shadow-2xl backdrop-blur-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 w-full md:w-5/12`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(6, 182, 212, 0.3)"
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {exp.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-cyan-400"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.title}
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-lg font-semibold text-white mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {exp.company} | <span className="text-sm text-gray-400">{exp.date}</span>
                </motion.p>
                
                <motion.ul 
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {exp.description.map((point, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="text-gray-300 flex items-start"
                    >
                      <span className="text-cyan-400 mr-3 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-6 pt-6 border-t border-cyan-400/30"
                >
                  <span className="font-bold text-cyan-400">Tech Stack: </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tech.split(', ').map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white text-sm font-medium px-3 py-1 rounded-full border border-cyan-400/50"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="modern-card p-8 rounded-3xl shadow-2xl backdrop-blur-lg border border-cyan-400/30 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">Ready for the Next Challenge?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              I'm always excited to take on new opportunities and contribute to innovative projects.
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

export default Experience;