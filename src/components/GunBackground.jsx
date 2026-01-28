import React from 'react';
import { motion } from 'framer-motion';

/**
 * Static gun background element for homepage
 * Creates a large, subtle gun icon that stays in the background
 */
export default function GunBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large gun icon in background */}
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-10 right-10 opacity-[0.1] text-cyan-500/30"
        style={{ filter: 'blur(2px)' }}
        initial={{ opacity: 0.05 }}
        animate={{ 
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Gun barrel */}
        <rect x="2" y="10" width="12" height="4" rx="1" fill="currentColor" />
        {/* Gun handle */}
        <path d="M14 10 L18 8 L18 16 L14 14 Z" fill="currentColor" />
        {/* Trigger guard */}
        <path d="M14 12 L16 12 L16 14 L14 14 Z" fill="currentColor" opacity="0.6" />
        {/* Sight */}
        <circle cx="4" cy="12" r="1.5" fill="currentColor" />
      </motion.svg>

      {/* Second gun icon - top left */}
      <motion.svg
        width="300"
        height="300"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-20 left-10 opacity-[0.08] text-purple-500/20"
        style={{ filter: 'blur(3px)' }}
        initial={{ opacity: 0.03 }}
        animate={{ 
          opacity: [0.03, 0.1, 0.03],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        {/* Gun barrel */}
        <rect x="2" y="10" width="12" height="4" rx="1" fill="currentColor" />
        {/* Gun handle */}
        <path d="M14 10 L18 8 L18 16 L14 14 Z" fill="currentColor" />
        {/* Trigger guard */}
        <path d="M14 12 L16 12 L16 14 L14 14 Z" fill="currentColor" opacity="0.6" />
        {/* Sight */}
        <circle cx="4" cy="12" r="1.5" fill="currentColor" />
      </motion.svg>

      {/* Third gun icon - center background */}
      <motion.svg
        width="500"
        height="500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 text-cyan-400/15"
        style={{ filter: 'blur(4px)' }}
        initial={{ opacity: 0.02 }}
        animate={{ 
          opacity: [0.02, 0.08, 0.02],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        {/* Gun barrel */}
        <rect x="2" y="10" width="12" height="4" rx="1" fill="currentColor" />
        {/* Gun handle */}
        <path d="M14 10 L18 8 L18 16 L14 14 Z" fill="currentColor" />
        {/* Trigger guard */}
        <path d="M14 12 L16 12 L16 14 L14 14 Z" fill="currentColor" opacity="0.6" />
        {/* Sight */}
        <circle cx="4" cy="12" r="1.5" fill="currentColor" />
      </motion.svg>
    </div>
  );
}
