'use client';

import { useInView } from 'react-intersection-observer';
import StaticProjectSlide from './staticProjectSlide';
import { useSpring, animated } from 'react-spring';
import { ProjectSlideProps } from './projects';
import React, { Suspense } from 'react';

export default function DynamicProjectSlide(props: ProjectSlideProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const projectAnimations = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0,0,0)' : props.reverse ? 'translate3d(-150px,0,0)' : 'translate3d(150px,0,0)',
    config: { friction: 200, tension: 2000, mass: 20 },
  });

  return (
    <animated.div ref={ref} style={projectAnimations}>
      <StaticProjectSlide {...props} />
    </animated.div>
  );
}
