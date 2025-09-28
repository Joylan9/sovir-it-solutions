import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <IconComponent
            className={`w-12 h-12 ${service.color || 'text-sovir-accent'} mb-4`}
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-sovir-primary group-hover:text-sovir-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        </div>
        <div className="text-sovir-accent">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-200">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.services.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-sovir-accent rounded-full mr-3"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <button className="bg-sovir-primary hover:bg-sovir-primary-dark text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
                  Get Quote
                </button>
                <button className="border border-sovir-accent text-sovir-accent hover:bg-sovir-accent hover:text-white px-4 py-2 rounded-lg transition-colors text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;
