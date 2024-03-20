'use client';

import StaticSkillsetDetail from './staticSkillsetDetail';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { SkillDetailsType } from './skillset';

export default function SkillsetDetail(props: SkillDetailsType) {
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
    <animated.div ref={ref} style={skillsetAnimation} className="w-3/4 md:w-2/5">
      <StaticSkillsetDetail {...props} />
    </animated.div>
  );
}
