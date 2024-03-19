'use client';

import ProjectSlide, { ProjectSlideProps } from './projectSlide';
import React from 'react';

import michellesImage from '../../../public/michelles-portfolio.png';
import ethansImage from '../../../public/my-portfolio.png';

export default function Projects() {
  const michellesProject: ProjectSlideProps = {
    imageSrc: michellesImage,
    title: 'Harmony Within',
    description:
      'An elegant home for a Health Coach that allows clients to learn and transact with Michelle. Using StripeAPI for e-commerce functionality, and Acuity Scheduler for scheduling services, features core to the health coaching business model are implemented. Content management is facilitated through Sanity.io, allowing for a blog for added exposure. GatsbyJS ensures a fast and responsive experience.',
    technologies: ['Gatsby.js', 'Stripe API', 'Sanity.io', 'Acuity Scheduler'],
    viewLink: 'https://michellesportfoliomain.gatsbyjs.io/',
  };

  const ethansProject: ProjectSlideProps = {
    imageSrc: ethansImage,
    title: 'My Portfolio',
    description:
      'My portfolio offers a simple and clean home for sharing thoughts and ideas through its blog. Leveraging Gatsby and TailwindCSS for rapid design and development, and React-Spring for animations, this project combines technology and design to create a lively user experience.',
    technologies: ['Gatsby.js', 'TailwindCSS', 'React-Spring'],
    viewLink: 'https://ethansportfolio.example.com/',
  };

  return (
    <div id="projects" className="flex flex-col mx-auto h-auto max-w-screen-xl">
      <div className="w-4/5 mx-auto">
        <div className="text-center mb-10">
          <span className="text-4xl font-bold text-slate-800">Projects</span>
        </div>
        <div className="space-y-10 lg:space-y-20">
          {[michellesProject, ethansProject].map((project, index) => (
            <ProjectSlide key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
