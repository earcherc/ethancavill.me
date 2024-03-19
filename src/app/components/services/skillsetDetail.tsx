'use client';

import StaticSkillsetDetail from './staticSkillsetDetail';
import { useSpring, animated } from 'react-spring';
import { SkillDetailsType } from './skillset';

export default function SkillsetDetail(props: SkillDetailsType) {
  const animationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { friction: 200, tension: 2000, mass: 20 },
  });

  return (
    <animated.div style={animationProps} className="w-3/4 md:w-2/5">
      <StaticSkillsetDetail {...props} />
    </animated.div>
  );
}
