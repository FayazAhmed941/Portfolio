
import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, animate } from 'framer-motion';

interface AnimatedCounterProps {
  to: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to }) => {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 100, damping: 30 });
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, to, {
        duration: 2,
        onUpdate(value) {
          // Use Math.round to display integer values during animation
          if(ref.current) {
            ref.current.textContent = Math.round(value).toString();
          }
        },
        onComplete() {
           if(ref.current) {
            ref.current.textContent = to.toString();
          }
        }
      });
      return animation.stop;
    }
  }, [inView, to, count]);

  return <span ref={ref}>0</span>;
};

export default AnimatedCounter;
