import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react';

/**
 * Game-style HUD frame: angular corners, optional crosshair, status badge.
 * Use for holographic panels, weapon-scope style UI.
 */
export default function TacticalFrame({
  children,
  className = '',
  badge = null,
  showCrosshair = false,
  intensity = 'normal',
  noAnimate = false,
}) {
  const glow = intensity === 'strong' ? 'rgba(34,211,238,0.5)' : intensity === 'normal' ? 'rgba(34,211,238,0.25)' : 'rgba(34,211,238,0.12)';

  const Wrapper = noAnimate ? 'div' : motion.div;
  const wrapperProps = noAnimate ? {} : {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const BadgeWrapper = noAnimate ? 'span' : motion.span;
  const badgeProps = noAnimate ? {} : {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { delay: 0.2 }
  };

  return (
    <Wrapper
      className={`tactical-frame relative ${className}`}
      {...wrapperProps}
    >
      {/* Angular corner brackets - positioned outside to prevent overlap */}
      <div className="tactical-corners absolute -inset-2 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500/70" style={{ boxShadow: `0 0 12px ${glow}` }} />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-500/70" style={{ boxShadow: `0 0 12px ${glow}` }} />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-500/70" style={{ boxShadow: `0 0 12px ${glow}` }} />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-500/70" style={{ boxShadow: `0 0 12px ${glow}` }} />
      </div>

      {showCrosshair && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
          <Crosshair className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
        </div>
      )}

      {badge && (
        <BadgeWrapper
          className="absolute -top-2 right-4 px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 rounded"
          {...badgeProps}
        >
          {badge}
        </BadgeWrapper>
      )}

      <div className="relative z-10">{children}</div>
    </Wrapper>
  );
}
