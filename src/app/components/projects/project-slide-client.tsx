'use client';

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import ProjectSlideRSC from './project-slide-rsc';
import { ProjectSlideProps } from './projects';
import React from 'react';

export default function ProjectSlideClient(props: ProjectSlideProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const projectAnimations = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translate3d(0,0,0)' : props.reverse ? 'translate3d(-150px,0,0)' : 'translate3d(150px,0,0)',
    },
    from: {
      opacity: 0,
      transform: props.reverse ? 'translate3d(-150px,0,0)' : 'translate3d(150px,0,0)',
    },
    config: { friction: 200, tension: 2000, mass: 20 },
  });

  return (
    <div ref={ref} className="overflow-x-hidden">
      <animated.div style={projectAnimations}>
        <ProjectSlideRSC {...props} />
      </animated.div>
    </div>
  );
}
