'use client';
import { useEffect, useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animateText = async () => {
      await animate(
        'span',
        { opacity: 0, y: 20 },
        { duration: 0.5, delay: stagger(0.05) }
      );

      setCurrentIndex((prev) => (prev + 1) % words.length);

      await animate(
        'span',
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.05) }
      );
    };

    const interval = setInterval(animateText, 4000);
    return () => clearInterval(interval);
  }, [animate, words.length]);

  return (
    <div ref={scope} className={className}>
      {words[currentIndex].split('').map((char, idx) => (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={`${char}-${idx}`}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
