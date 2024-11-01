'use client';
import { useEffect, useRef, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const SparklesCore = ({
  id,
  background = '#0d47a1',
  minSize = 1,
  maxSize = 5,
  particleDensity = 800,
  className,
  particleColor = '#ffffff',
}) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    return container;
  };

  const options = {
    background: {
      color: { value: background },
    },
    fullScreen: { enable: false },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: particleColor },
      links: {
        color: particleColor,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: { enable: true, area: particleDensity },
        value: 80,
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: minSize, max: maxSize } },
    },
    detectRetina: true,
  };

  return (
    <div className={className}>
      {init && (
        <Particles
          id={id}
          className={className}
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </div>
  );
};
