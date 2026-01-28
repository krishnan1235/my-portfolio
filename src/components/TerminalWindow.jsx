import React from 'react';
import { motion } from 'framer-motion';

/**
 * Terminal window component for coding theme
 * Shows a terminal-style window with code output
 */
export default function TerminalWindow({ 
  children, 
  title = "TERMINAL", 
  className = '',
  badge = null 
}) {
  return (
    <motion.div
      className={`terminal-window relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal frame */}
      <div className="relative border border-cyan-500/40 rounded-lg overflow-hidden bg-black/60 backdrop-blur-sm">
        {/* Terminal header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border-b border-cyan-500/30 relative z-20">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="font-mono text-xs text-cyan-400/90 ml-2 font-semibold">{title}</span>
          </div>
          {badge && (
            <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-cyan-500/25 text-cyan-300 border border-cyan-500/50 rounded font-semibold">
              {badge}
            </span>
          )}
        </div>
        
        {/* Terminal content - with proper padding to avoid overlap */}
        <div className="p-4 pt-5 font-mono text-sm text-cyan-300/95 relative z-10">
          {children}
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-cyan-500/5 rounded-lg blur-xl pointer-events-none -z-10" />
    </motion.div>
  );
}
