import React from 'react';
import { motion } from 'framer-motion';

/**
 * CodeIcon — A sleek </> code bracket icon
 * Perfect match for a developer / AIML engineer portfolio
 */
export default function GunIcon({ className = '', size = 24, animated = true }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cyber-icon ${className}`}
      style={{ filter: 'drop-shadow(0 0 4px currentColor)' }}
      animate={animated ? { y: [0, -2, 0] } : undefined}
      transition={{
        duration: 3,
        repeat: animated ? Infinity : 0,
        ease: "easeInOut"
      }}
    >
      {/* Left bracket < */}
      <path
        d="M9 4L3 12L9 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Right bracket > */}
      <path
        d="M15 4L21 12L15 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Center slash / */}
      <motion.path
        d="M13.5 5L10.5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.75"
        animate={animated ? { opacity: [0.75, 1, 0.75] } : undefined}
        transition={{
          duration: 2,
          repeat: animated ? Infinity : 0,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
}
