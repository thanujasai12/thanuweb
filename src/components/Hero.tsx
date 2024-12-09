import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 p-4"
      >
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-gray-800"
        >
          HI, I AM THANUJA SAI
        </motion.h1>
        <div className="text-xl md:text-2xl text-indigo-600 font-medium h-20">
          <Typewriter
            options={{
              strings: ['I am a Leader', 'I am a Student', 'I am a Motivator'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
            }}
          />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          STUDENT | GDG LEAD | GDSC CORE TEAM | Based in Visakhapatnam
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:lekkalathanuja12@gmail.com"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Contact Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/lekkala-thanuja-sai-140266289/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;