import React from 'react';
import { motion } from 'framer-motion';

export default function GunIcon({ className = '', size = 24, animated = true }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`gun-icon ${className}`}
      style={{ filter: 'drop-shadow(0 0 5px currentColor)' }}
      animate={animated ? { y: [0, -2, 0] } : undefined}
      transition={{
        duration: 3,
        repeat: animated ? Infinity : 0,
        ease: "easeInOut"
      }}
    >
      {/* Stylized sci‑fi blaster silhouette */}
      {/* Body */}
      <path
        d="M4 9.5H15.5C17 9.5 18 10.5 18 12V13.5H13L11.5 15H7.5L6.5 13.5H4V9.5Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Barrel */}
      <rect x="15.5" y="10.3" width="4" height="1.4" fill="currentColor" opacity="0.9" />
      {/* Grip */}
      <path
        d="M9.5 13.5L10.3 17C10.5 17.9 11.2 18.5 12.1 18.5H13.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.9"
        vectorEffect="non-scaling-stroke"
      />

      {/* Inner core / energy cell */}
      <motion.rect
        x="10" y="10" width="4" height="4"
        fill="currentColor"
        opacity="0.8"
        animate={animated ? { rotate: 360 } : undefined}
        transition={{ duration: 8, repeat: animated ? Infinity : 0, ease: "linear" }}
        style={{ originX: "12px", originY: "12px" }}
      />

      {/* Orbiting energy particles */}
      <motion.circle
        cx="12"
        cy="2"
        r="1.5"
        fill="currentColor"
        opacity="0.6"
        animate={animated ? { rotate: 360 } : undefined}
        transition={{ duration: 4, repeat: animated ? Infinity : 0, ease: 'linear' }}
        style={{ transformOrigin: '12px 11px' }}
      />

      <circle cx="12" cy="22" r="1" fill="currentColor" opacity="0.4" />
    </motion.svg>
  );
}
