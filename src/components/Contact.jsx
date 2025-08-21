// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Priyang1310',
      icon: FaGithub,
      color: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/priyang-desai1310',
      icon: FaLinkedin,
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-600'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/PriyangDesai',
      icon: SiLeetcode,
      color: 'hover:text-yellow-400',
      bgColor: 'hover:bg-yellow-600'
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'priyang.desai1@gmail.com',
      link: 'mailto:priyang.desai1@gmail.com',
      color: 'text-cyan-400'
    },
    {
      icon: FaPhone,
      text: '+91 1234567890',
      link: 'tel:+911234567890',
      color: 'text-green-400'
    }
  ];

  return (
    <div id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 gradient-text"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-300 text-xl mb-12 max-w-3xl mx-auto"
        >
          I'm currently open to new opportunities and exciting collaborations. Let's connect and explore the possibilities together!
        </motion.p>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 30px 60px rgba(6, 182, 212, 0.3)"
              }}
              className="modern-card p-8 rounded-3xl shadow-2xl backdrop-blur-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 text-center group"
            >
              <motion.div
                className={`text-6xl ${info.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <info.icon />
              </motion.div>
              <p className="text-white font-semibold text-xl">{info.text}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">Connect With Me</h3>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setIsHovered(social.name)}
                onHoverEnd={() => setIsHovered(null)}
                className="modern-card p-6 rounded-2xl shadow-2xl backdrop-blur-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 text-4xl text-white hover:text-cyan-400 relative overflow-hidden group"
                aria-label={social.name}
              >
                <span className="relative z-10">
                  <social.icon />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <motion.div
            className="modern-card p-8 rounded-3xl shadow-2xl backdrop-blur-lg border border-cyan-400/30 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-300 mb-8 text-xl">
              Let's discuss how we can work together to bring your ideas to life. I'm excited to hear about your next project!
            </p>
            <motion.a
              href="mailto:priyang.desai1@gmail.com"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-cyan-500/50 transition-all duration-300 relative overflow-hidden group text-lg"
            >
              <span className="relative z-10">Start a Conversation</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
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

export default Contact;