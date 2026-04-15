import React, { useMemo } from 'react';
import useInView from '../hooks/useInView';

/**
 * Scroll-triggered fade + slide-up entrance.
 * Immediately shows content with no motion when the user prefers reduced motion.
 *
 * Props:
 *   delay     — ms to delay the transition (for staggering sibling elements)
 *   className — forwarded to the wrapper div
 */
export default function FadeInView({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView();

  const reducedMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const style = reducedMotion
    ? {}
    : {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 400ms ease-out ${delay}ms, transform 400ms ease-out ${delay}ms`,
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
