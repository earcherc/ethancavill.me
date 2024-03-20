'use client';

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export default function Name() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const nameAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0,-20px,0)' : 'translate3d(0,-80px,0)',
    config: { friction: 26, tension: 170, mass: 1 },
  });

  return (
    <animated.div ref={ref} style={nameAnimation} className="flex flex-col">
      <span className="text-8xl text-slate-800 font-medium">Ethan Cavill</span>
      <span className="text-3xl font-semilight mt-2 text-gray-700">
        <span className="font-light text-gray-500">{'{'}</span>
        full-stack developer
        <span className="font-light text-gray-500">{'}'}</span>
      </span>
    </animated.div>
  );
}
