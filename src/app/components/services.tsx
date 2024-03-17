'use client';

import {
  faDraftingCompass,
  faCode,
  faDollyFlatbed,
  faHandshake,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated, SpringValue } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const SkillSetDetail = ({
  icon,
  title,
  description,
  style,
}: {
  icon: IconDefinition;
  title: string;
  description: string;
  style: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
}) => (
  <animated.div style={style} className="w-3/4 md:w-2/5 bg-white p-6 rounded border-t-4 shadow m-2">
    <div className="flex font-bold align-middle mb-2 text-gray-900">
      <FontAwesomeIcon icon={icon} className="h-6 w-6 mr-4" />
      <span className="text-xl">{title}</span>
    </div>
    <p className="prose prose-slate">{description}</p>
  </animated.div>
);

export default function Skillset() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationProps = useSpring({
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0,-100px,0)' },
    config: { friction: 200, tension: 2000, mass: 20 },
  });

  const skillDetails = [
    {
      icon: faDraftingCompass,
      title: 'Design',
      description:
        'With visual art and design experience, I specialize in building websites that express passion and personality. Your website will be trendy for years to come.',
    },
    {
      icon: faCode,
      title: 'Development',
      description:
        'Possessing skills in both back and front-end development, I build your website using the most current technologies for a responsive and performant experience.',
    },
    {
      icon: faDollyFlatbed,
      title: 'CMS',
      description:
        'Specializing with modern content management systems for flexibility and minimal overhead, whether hosting a blog or listing products, there’s a solution for you.',
    },
    {
      icon: faHandshake,
      title: 'Relationships',
      description:
        'Working closely with my clients is vital in delivering satisfaction. Through open and frequent communication, your dream project will come to fruition.',
    },
  ];

  return (
    <div id="skillset">
      <div className="mx-auto w-4/5 min-h-[20rem] md:h-[24rem] rounded-t-xl p-10 bg-gray-100 mt-10">
        <h2 className="font-bold text-4xl text-center mb-8 text-gray-900">Creative Developer</h2>
        <p className="prose prose-slate mx-auto mb-6">
          I have the creative and technical skills to build products tailored to your business needs. With a strong
          client relationship, we will develop a unique online presence that separates you from the crowd.
        </p>
      </div>

      <div
        ref={ref}
        className="flex flex-col md:flex-row flex-wrap items-center justify-center md:items-stretch -mt-10 sm:-mt-24 md:-mt-40 mx-auto max-w-screen-xl mb-20"
      >
        {skillDetails.map((detail, index) => (
          <SkillSetDetail key={index} {...detail} style={animationProps} />
        ))}
      </div>
    </div>
  );
}
