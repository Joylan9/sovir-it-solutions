import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { whyChooseUs } from '../../data/servicesData';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-sovir-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-sovir-primary mb-8">
              Why Choose SoVir Technologies?
            </h2>
            <div className="space-y-4">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-6 h-6 text-sovir-accent mt-1 mr-4 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-sovir-primary mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our IT solutions can drive your business forward. 
              Get a free consultation with our experts.
            </p>
            <div className="space-y-4">
              <button className="w-full btn-primary">
                Schedule Free Consultation
              </button>
              <button className="w-full border border-sovir-accent text-sovir-accent hover:bg-sovir-accent hover:text-white py-3 px-6 rounded-lg transition-colors">
                Download Service Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
