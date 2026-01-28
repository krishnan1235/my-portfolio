import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Terminal/code-style typing animation.
 * lines: array of strings (code lines)
 * speed: ms per character
 * pauseAfter: ms after completing all lines before restart
 */
export default function CodeTyping({
  lines = ['const role = "AIML Engineer";', 'await build().ship();'],
  speed = 50,
  pauseAfter = 2000,
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pause' | 'deleting'

  useEffect(() => {
    if (!lines?.length) return;
    const current = lines[lineIndex];
    let t;

    if (phase === 'typing') {
      if (charIndex < current.length) {
        t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      } else {
        t = setTimeout(() => setPhase('pause'), 400);
      }
    } else if (phase === 'pause') {
      t = setTimeout(() => setPhase('deleting'), pauseAfter);
    } else {
      if (charIndex > 0) {
        t = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
      } else {
        setPhase('typing');
        setLineIndex((i) => (i + 1) % lines.length);
      }
    }
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, phase, lines, speed, pauseAfter]);

  if (!lines?.length) return null;
  const current = lines[lineIndex];
  const display = current.substring(0, charIndex);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="code-typing font-mono text-xs sm:text-sm text-cyan-300/95 bg-black/50 border border-cyan-500/40 rounded-lg px-4 py-3 overflow-hidden shadow-lg shadow-cyan-500/10"
      style={{ fontFamily: 'ui-monospace, monospace' }}
    >
      <span className="text-cyan-500/80 select-none">$ </span>
      <span className="text-cyan-200/95">{display}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="inline-block w-2 h-4 ml-0.5 bg-cyan-400 align-middle"
        aria-hidden
      />
    </motion.div>
  );
}
