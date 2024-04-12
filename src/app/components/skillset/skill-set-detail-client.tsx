'use client';

import { useInView } from 'react-intersection-observer';
import SkillsetDetailRSC from './skill-set-detail-rsc';
import { useSpring, animated } from 'react-spring';
import { SkillDetailsType } from './skillset';

export default function SkillsetDetailClient(props: SkillDetailsType) {
  const [ref, inView] = useInView({
    rootMargin: '-200px 0px',
    triggerOnce: true,
  });

  const skillsetAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0,-20px,0)' : 'translate3d(0,-80px,0)',
    config: { friction: 200, tension: 2000, mass: 20 },
  });

  return (
    <animated.div ref={ref} style={skillsetAnimation}>
      <SkillsetDetailRSC {...props} />
    </animated.div>
  );
}
