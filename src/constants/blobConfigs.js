/**
 * VELMESA – EARLY BLOB SYSTEM
 * 
 * Faster, more "bubble-like" blobs as seen in the 6:40 PM version.
 */

export const BLOB_CONFIGS = [
  {
    id: 'blob-1',
    layer: 0,
    size: { w: 600, h: 600 },
    position: { x: 10, y: 10 },
    blur: 60,
    opacity: 0.3,
    gradientColors: ['#90E8F8', '#3430FF'],
    gradientAngle: 45,
    floatX:   { keyframes: [0, 100, -100, 0],   duration: 30 },
    floatY:   { keyframes: [0, 80, -80, 0],    duration: 35 },
    morph: {
      keyframes: ['50% 50% 50% 50%', '30% 70% 70% 30% / 30% 30% 70% 70%', '50% 50% 50% 50%'],
      duration: 8,
    },
    rotateScale: { rotate: [0, 360], scale: [1, 1.2, 1], duration: 40 },
    scroll: { speedX: 0.1, speedY: 0.2, direction: 1 },
  },
  {
    id: 'blob-2',
    layer: 0,
    size: { w: 500, h: 500 },
    position: { x: 70, y: 20 },
    blur: 70,
    opacity: 0.35,
    gradientColors: ['#FEFB41', '#FDBE34'],
    gradientAngle: 225,
    floatX:   { keyframes: [0, -120, 120, 0],   duration: 40 },
    floatY:   { keyframes: [0, 100, -100, 0],   duration: 30 },
    morph: {
      keyframes: ['50% 50% 50% 50%', '40% 60% 60% 40% / 40% 40% 60% 60%', '50% 50% 50% 50%'],
      duration: 10,
    },
    rotateScale: { rotate: [0, -360], scale: [1, 1.1, 1], duration: 50 },
    scroll: { speedX: -0.15, speedY: 0.25, direction: -1 },
  },
  {
    id: 'blob-3',
    layer: 0,
    size: { w: 700, h: 700 },
    position: { x: 40, y: 70 },
    blur: 80,
    opacity: 0.25,
    gradientColors: ['#E42EEA', '#6A41FA'],
    gradientAngle: 135,
    floatX:   { keyframes: [0, 150, -150, 0],   duration: 50 },
    floatY:   { keyframes: [0, -100, 100, 0],   duration: 45 },
    morph: {
      keyframes: ['50% 50% 50% 50%', '60% 40% 40% 60% / 60% 60% 40% 40%', '50% 50% 50% 50%'],
      duration: 12,
    },
    rotateScale: { rotate: [0, 360], scale: [1, 1.3, 1], duration: 60 },
    scroll: { speedX: 0.2, speedY: -0.15, direction: 1 },
  }
];

export const RESPONSIVE_MAP = {
  mobile: {
    blobCount: 2,
    sizeScale: 0.8,
    motionScale: 1.0,
    blurScale: 0.9,
  },
  tablet: {
    blobCount: 3,
    sizeScale: 0.9,
    motionScale: 1.0,
    blurScale: 1.0,
  },
  desktop: {
    blobCount: 3,
    sizeScale: 1.0,
    motionScale: 1.0,
    blurScale: 1.0,
  },
};
