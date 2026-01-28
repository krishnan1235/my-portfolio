import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Game-style 3D card that tilts on mouse move (like in-game UI panels).
 * href: optional; wraps in <a> when set.
 * static: if true, disables 3D tilt to prevent text movement
 */
export default function GameCard3D({
  children,
  className = '',
  href,
  intensity = 12,
  static: isStatic = false,
  ...rest
}) {
  const cardRef = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(x, [0, 1], [-intensity, intensity]);
  const springConfig = { stiffness: 300, damping: 30 };
  const rx = useSpring(rotateX, springConfig);
  const ry = useSpring(rotateY, springConfig);

  const handleMove = (e) => {
    if (isStatic || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    x.set(mx / w);
    y.set(my / h);
  };

  const handleLeave = () => {
    if (isStatic) return;
    x.set(0.5);
    y.set(0.5);
  };

  // When static, use regular div instead of motion.div to prevent any transforms
  if (isStatic) {
    const staticContent = (
      <div
        className={className}
        {...rest}
        style={{ transform: 'none', willChange: 'auto' }}
      >
        {children}
      </div>
    );

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ transform: 'none' }}>
          {staticContent}
        </a>
      );
    }
    return staticContent;
  }

  const wrapperStyle = { perspective: '1000px', transformStyle: 'preserve-3d' };
  const content = (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: 'preserve-3d',
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={wrapperStyle}>
        {content}
      </a>
    );
  }
  return <div style={wrapperStyle}>{content}</div>;
}
