import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const Stats = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 12000;
      const duration = 2000;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 px-6 text-center relative z-10">
      <div className="max-w-4xl mx-auto">
        <p className="text-velmesa-blue text-lg md:text-xl font-medium mb-4">
          Transformed over
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="text-7xl md:text-9xl font-extrabold text-velmesa-blue tracking-tighter">
            {count.toLocaleString()}
          </span>
          <span className="text-2xl md:text-3xl font-extrabold text-velmesa-blue/80 text-left leading-tight">
            leaders and teams<br />of tomorrow
          </span>
        </div>
      </div>
    </section>
  );
};
