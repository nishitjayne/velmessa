import { motion } from 'framer-motion';

export const BackgroundBlobs = () => {
  return (
    <div className="blob-canvas" aria-hidden="true">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="hero-liquid-grain" x="-150%" y="-150%" width="400%" height="400%">
            <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="2" result="turbulence">
              <animate attributeName="baseFrequency" dur="20s" values="0.005;0.008;0.005" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="15" result="blurred" />
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" result="grainNoise" />
            <feComposite operator="in" in="grainNoise" in2="blurred" result="maskedGrain" />
            <feBlend mode="overlay" in="blurred" in2="maskedGrain" />
          </filter>
        </defs>
      </svg>

      {/* 
        COORDINATED HERO BLOB (OPTION 1 LOOP)
        Starts at A (Small Sphere, Top-Right)
        Floats to B (Large Sphere, Bottom-Centre)
        Bounces to C (Irregular Blob, Top-Left)
        Loops in Reverse
      */}
      <motion.div
        className="absolute"
        animate={{
          top: [40, 260, -40, 260, 40],
          right: [120, 160, 1200, 160, 120], // Approximating 'left: -50' by using a large 'right' or manual offset
          width: [100, 200, 250, 200, 100],
          height: [100, 200, 200, 200, 100],
          borderRadius: [
            '50%', 
            '50%', 
            '60% 54% 75% 40% / 52% 76% 38% 72%', 
            '50%', 
            '50%'
          ],
          background: [
            'linear-gradient(45deg, #FFE16B, #AAE6FF, #303188)',
            'linear-gradient(135deg, #00F5E4, #34A6FF, #A200FF)',
            'linear-gradient(225deg, #FEFB41, #3430FF)',
            'linear-gradient(135deg, #00F5E4, #34A6FF, #A200FF)',
            'linear-gradient(45deg, #FFE16B, #AAE6FF, #303188)'
          ]
        }}
        transition={{
          duration: 15, // Total loop time
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1] // Even steps for the loop
        }}
        style={{
          filter: 'url(#hero-liquid-grain)',
          mixBlendMode: 'screen',
          willChange: 'transform, border-radius, background',
        }}
      />

      {/* STATIC SUPPORT BLOBS (As seen in Image 1) */}
      <motion.div
        className="absolute opacity-40"
        style={{
          top: '55%',
          left: '15%',
          width: 400,
          height: 400,
          borderRadius: '50% 70% 40% 60% / 50% 60% 70% 40%',
          background: 'linear-gradient(45deg, #3430FF, #A200FF)',
          filter: 'blur(50px) url(#hero-liquid-grain)',
          mixBlendMode: 'overlay',
          zIndex: -10
        }}
        animate={{
          borderRadius: ['50% 70% 40% 60% / 50% 60% 70% 40%', '60% 40% 70% 50% / 40% 70% 50% 60%', '50% 70% 40% 60% / 50% 60% 70% 40%'],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
