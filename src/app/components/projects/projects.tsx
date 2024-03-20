import michellesImage from '../../../../public/michelles-portfolio.png';
import ethansImage from '../../../../public/my-portfolio.png';
import { StaticImageData } from 'next/image';

import ProjectSlideClient from './project-slide-client';
import React, { Suspense } from 'react';

export interface ProjectSlideInterface {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  viewLink: string;
}

export interface ProjectSlideProps extends ProjectSlideInterface {
  reverse: boolean;
}

const projects: ProjectSlideInterface[] = [
  {
    imageSrc: michellesImage,
    title: 'Harmony Within',
    description:
      'An elegant home for a Health Coach that allows clients to learn and transact with Michelle. Using StripeAPI for e-commerce functionality, and Acuity Scheduler for scheduling services, features core to the health coaching business model are implemented. Content management is facilitated through Sanity.io, allowing for a blog for added exposure. GatsbyJS ensures a fast and responsive experience.',
    technologies: ['Gatsby.js', 'Stripe API', 'Sanity.io', 'Acuity Scheduler'],
    viewLink: 'https://michellesportfoliomain.gatsbyjs.io/',
  },

  {
    imageSrc: ethansImage,
    title: 'My Portfolio',
    description:
      'My portfolio offers a simple and clean home for sharing thoughts and ideas through its blog. Leveraging Gatsby and TailwindCSS for rapid design and development, and React-Spring for animations, this project combines technology and design to create a lively user experience.',
    technologies: ['Gatsby.js', 'TailwindCSS', 'React-Spring'],
    viewLink: 'https://ethansportfolio.example.com/',
  },
];

export default function Projects() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="text-center mb-10 md:mb-16">
        <span className="text-4xl font-bold text-slate-700 ">Projects</span>
      </div>
      {projects.map((project, index) => (
        <ProjectSlideClient key={index} reverse={index % 2 === 0} {...project}></ProjectSlideClient>
      ))}
    </Suspense>
  );
}
