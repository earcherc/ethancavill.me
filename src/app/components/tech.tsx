'use client';

import { faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { TechDetail } from './techDetails';
import React from 'react';

export default function Tech() {
  const [ref, inView] = useInView({
    root: null,
    rootMargin: '-200px 0px',
    threshold: 0,
    triggerOnce: true,
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0,-100px,0)',
    config: {
      friction: 200,
      tension: 2000,
      mass: 20,
    },
  });

  return (
    <animated.div style={animationProps} ref={ref} className="relative w-full mx-auto max-w-screen-xl">
      <span className="hidden md:flex transform -rotate-90 text-3xl font-bold absolute left-0 top-1/2 -translate-y-1/2 ml-20">
        Technologies
      </span>
      <div className="flex flex-col md:flex-row w-4/5 mx-auto justify-center md:space-x-10 space-y-10 md:space-y-0">
        <TechDetail
          icon={faJs}
          title="Frontend"
          items={['React', 'Angular', 'RxJS', 'Redux', 'Tailwind', 'Next', 'Webhooks']}
        />

        <TechDetail
          icon={faPython}
          title="Backend"
          items={['Python', 'Jupyter', 'GraphQL/Rest', 'Docker', 'AWS', 'SQL', 'Fast API']}
        />
      </div>
    </animated.div>
  );
}
