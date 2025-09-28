import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-sovir-gradient min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-sovir-primary mb-6"
          >
            Our IT & AI Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            At <span className="font-semibold text-sovir-primary">SoVir Technologies</span>, 
            we deliver end-to-end IT and Artificial Intelligence solutions that empower 
            businesses to innovate, automate, and scale. From cloud computing to AI-powered 
            automation, we bring the latest digital advancements to your enterprise.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Explore Our Services
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
