'use client';

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

export interface ProjectSlideProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  viewLink?: string;
}

export default function ProjectSlide({
  imageSrc,
  title,
  description,
  technologies,
  viewLink,
  index,
}: ProjectSlideProps & { index: number }) {
  const reverse = index % 2 !== 0;
  const [ref, inView] = useInView({
    rootMargin: '-200px 0px',
    triggerOnce: true,
  });

  const projectAnimations = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0,0,0)' : reverse ? 'translate3d(150px,0,0)' : 'translate3d(-150px,0,0)',
    config: {
      friction: 200,
      tension: 2000,
      mass: 20,
    },
  });

  return (
    <animated.div
      style={projectAnimations}
      ref={ref}
      className={`flex flex-col lg:flex-row h-auto justify-center items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="w-full lg:w-2/3 lg:-mr-14">
        <Image src={imageSrc} alt={title} layout="responsive" width={700} height={475} className="rounded shadow" />
      </div>
      <div className="w-full lg:w-2/5 bg-white shadow-xl rounded p-5 flex flex-col justify-between lg:-ml-14 -mt-10 lg:-mt-0">
        <h1 className="font-bold text-xl mb-4">{title}</h1>
        <p className="prose prose-slate">{description}</p>

        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl text-center p-3 shadow">
              {tech}
            </div>
          ))}
        </div>
        {viewLink && (
          <a
            href={viewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 bg-blue-200 rounded-xl text-center shadow p-3"
          >
            View Project
          </a>
        )}
      </div>
    </animated.div>
  );
}
