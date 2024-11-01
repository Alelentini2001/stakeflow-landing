'use client';
import { cn } from '../../utils/cn';
import { useEffect, useRef, useState } from 'react';

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    }
  }, []);

  return (
    <div
      className={cn('relative group/container', containerClassName, className)}
      ref={containerRef}
    >
      <div
        className={cn(
          'absolute inset-0 rounded-[inherit] z-[1] opacity-70 group-hover/container:opacity-100 blur-xl transition duration-500',
          'bg-gradient-radial from-white/10 to-transparent'
        )}
      />
      <div
        className={cn(
          'absolute inset-0 rounded-[inherit] z-[1]',
          'bg-gradient-radial from-white/10 to-transparent'
        )}
      />
      {children}
    </div>
  );
};
