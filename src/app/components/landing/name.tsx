'use client';

import { useSpring, animated } from 'react-spring';

export default function Name() {
  const nameAnimation = useSpring({
    from: { transform: 'translate3d(0,-80px,0)', opacity: 0 },
    to: { transform: 'translate3d(0,-20px,0)', opacity: 1 },
    config: {
      friction: 200,
      tension: 2000,
      mass: 20,
    },
  });

  return (
    <animated.div style={nameAnimation} className="flex flex-col">
      <span className="text-8xl text-slate-800 font-medium">Ethan Cavill</span>
      <span className="text-3xl font-semilight mt-2 text-gray-700">
        <span className="font-light text-gray-500">{'{'}</span>
        full-stack developer
        <span className="font-light text-gray-500">{'}'}</span>
      </span>
    </animated.div>
  );
}
