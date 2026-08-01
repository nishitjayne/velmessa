import { useEffect, useState, useMemo } from 'react';
import { motion, useTransform, useSpring, motionValue } from 'framer-motion';
import { BLOB_CONFIGS, RESPONSIVE_MAP } from '../constants/blobConfigs';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * VELMESA – SINGLETON SCROLL ARCHITECTURE
 * 
 * FIX: This version uses a global motion value that exists independently of the
 * React component tree. This prevents any "resets" or "snap-backs" during 
 * mobile browser events (like address bar hiding) that might trigger 
 * component re-renders or unmounts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Global motion value for scroll tracking
const globalScrollY = motionValue(typeof window !== 'undefined' ? window.scrollY : 0);

if (typeof window !== 'undefined') {
  const sync = () => globalScrollY.set(window.scrollY);
  window.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync, { passive: true });
}

function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === 'undefined') return 'desktop';
    const w = window.innerWidth;
    return w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop';
  });

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      const next = w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop';
      setBp(next);
    };
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return bp;
}

const BlobElement = ({ config, scrollY, resp }) => {
  const { sizeScale, motionScale, blurScale } = resp;

  // Stable functional transform - no clamping, no resets
  const sx = useTransform(scrollY, (v) => v * config.scroll.speedX * config.scroll.direction * 0.45 * motionScale);
  const sy = useTransform(scrollY, (v) => v * config.scroll.speedY * config.scroll.direction * 0.55 * motionScale);

  const w = config.size.w * sizeScale;
  const h = config.size.h * sizeScale;
  const blurVal = config.blur * blurScale;

  const floatXKeys = config.floatX.keyframes.map(v => v * motionScale);
  const floatYKeys = config.floatY.keyframes.map(v => v * motionScale);

  const gradient = `linear-gradient(${config.gradientAngle}deg, ${config.gradientColors[0]} 0%, ${config.gradientColors[1]} 50%, ${config.gradientColors[2]} 100%)`;
  const transitionBase = { ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' };

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${config.position.x}%`,
        top: `${config.position.y}%`,
        width: w,
        height: h,
        x: sx,
        y: sy,
        zIndex: config.layer,
        willChange: 'transform',
      }}
    >
      <motion.div
        style={{ width: '100%', height: '100%' }}
        animate={{
          x: floatXKeys,
          y: floatYKeys,
          rotate: config.rotateScale.rotate,
          scale: config.rotateScale.scale,
        }}
        transition={{
          x: { ...transitionBase, duration: config.floatX.duration },
          y: { ...transitionBase, duration: config.floatY.duration },
          rotate: { ...transitionBase, duration: config.rotateScale.duration },
          scale: { ...transitionBase, duration: config.rotateScale.duration },
        }}
      >
        <div style={{ width: '100%', height: '100%', filter: `blur(${blurVal}px)` }}>
          <motion.div
            className="blob-shape"
            style={{ width: '100%', height: '100%', opacity: config.opacity, background: gradient }}
            animate={{ borderRadius: config.morph.keyframes }}
            transition={{ borderRadius: { ...transitionBase, duration: config.morph.duration } }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const BackgroundBlobs = () => {
  const bp = useBreakpoint();
  const resp = useMemo(() => RESPONSIVE_MAP[bp], [bp]);
  
  // smoothedScrollY is stable within the component
  const smoothedScrollY = useSpring(globalScrollY, { stiffness: 50, damping: 30, mass: 1 });

  const visibleBlobs = useMemo(
    () => BLOB_CONFIGS.slice(0, resp.blobCount),
    [resp.blobCount]
  );

  return (
    <div className="blob-canvas" aria-hidden="true">
      <div className="blob-ambient-glow" />
      {visibleBlobs.map((cfg) => (
        <BlobElement
          key={cfg.id}
          config={cfg}
          scrollY={smoothedScrollY}
          resp={resp}
        />
      ))}
    </div>
  );
};
