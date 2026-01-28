import React from 'react';
import { motion } from 'framer-motion';

/**
 * Gun/Weapon icon component for game theme
 * Shows animated gun icon with tactical styling
 */
export default function GunIcon({ className = '', size = 24, animated = true }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: 'drop-shadow(0 0 8px currentColor)' }}
      animate={animated ? {
        rotate: [0, 8, -8, 0],
        scale: [1, 1.1, 1],
        y: [0, -3, 0],
      } : {}}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Gun barrel */}
      <rect x="2" y="10" width="12" height="4" rx="1" fill="currentColor" opacity="0.8" />
      {/* Gun handle */}
      <path d="M14 10 L18 8 L18 16 L14 14 Z" fill="currentColor" opacity="0.8" />
      {/* Trigger guard */}
      <path d="M14 12 L16 12 L16 14 L14 14 Z" fill="currentColor" opacity="0.6" />
      {/* Sight */}
      <circle cx="4" cy="12" r="1.5" fill="currentColor" opacity="0.9" />
      {/* Muzzle flash effect */}
      <motion.circle
        cx="14"
        cy="12"
        r="2"
        fill="currentColor"
        opacity="0.3"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );
}
