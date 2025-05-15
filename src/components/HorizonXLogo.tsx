
import React from 'react';
import { motion } from 'framer-motion';

export const HorizonXLogo = ({ className }: { className?: string }) => {
  return (
    <motion.div 
      className={`flex items-center font-bold text-2xl ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.span 
        className="bg-gradient-to-r from-horizonx-700 to-horizonx-500 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        HORIZON
      </motion.span>
      <span className="relative ml-1 text-horizonx-700">
        X
        <span 
          className="absolute top-0 -right-3 w-3 h-3 rounded-full bg-horizonx-500 animate-pulse"
        />
      </span>
    </motion.div>
  );
};
