import React from 'react';
import { motion } from 'framer-motion';

/**
 * Game-style section wrapper: 3D perspective, level label, staggered reveal.
 * level: e.g. "01", "02"
 * title: section title (optional)
 * children
 */
export default function GameSection({ id, level, title, children, className = '', compact = false }) {
  return (
    <motion.section
      id={id}
      className={`game-section relative overflow-x-hidden ${compact ? 'pt-20 pb-12 md:pt-24 md:pb-16' : 'pt-28 pb-20 md:pt-32 md:pb-24'} px-4 min-h-screen ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'transparent',
        transformStyle: 'preserve-3d',
        perspective: '1200px',
        zIndex: 1,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
      {level && (
        <motion.span
          className="game-level font-mono text-cyan-500/80 text-xs tracking-[0.3em] uppercase block text-center mb-4 relative z-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
        >
          — Level {level} —
        </motion.span>
      )}
      {title && (
        <motion.h2
          className="heading text-center text-3xl md:text-4xl font-bold mb-10 md:mb-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.4)' }}
        >
          {title}
        </motion.h2>
      )}
      <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.section>
  );
}
