import michellesImage from '../../../../public/home/michelles-portfolio.png';
import vectorsearchImage from '../../../../public/home/vector-search.png';
import radreportImage from '../../../../public/home/radreport.webp';
import portfolioImage from '../../../../public/home/portfolio.png';
import deepworkImage from '../../../../public/home/deep-work.png';
import devarityImage from '../../../../public/home/devarity.png';
import { StaticImageData } from 'next/image';

import ProjectSlideClient from './project-slide-client';
import React, { Suspense } from 'react';

export interface ProjectSlideInterface {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  viewLink?: string;
}

export interface ProjectSlideProps extends ProjectSlideInterface {
  reverse: boolean;
}

const projects: ProjectSlideInterface[] = [
  {
    imageSrc: deepworkImage,
    title: 'Deep Work Timer',
    description:
      'A project still in development that aims to provide tools for increasing productivity. After reading Deep Work, by Cal Newport, I was disappointed at the array of productivity tools on the market. This inspired an idea to develop my ideal productivity tracker in-line with Newport’s research.',
    technologies: [
      'NextJS',
      'Docker',
      'AWS',
      'Redis',
      'Postgres',
      'Jotai',
      'GraphQL',
      'Strawberry',
      'FastAPI',
      'SQLModel',
    ],
    viewLink: 'https://github.com/earcherc/deep-work',
  },
  {
    imageSrc: vectorsearchImage,
    title: 'Tangible AI Internship',
    description:
      'The final internship project I produced while working with Hobson at Tangible AI. I built a series of information retrieval (IR) systems to help get better search results from a corpus of health documents. Starting with TF-IDF, I built a processing and evaluation pipeline which was then used to compare results against an alternative BERT vectoriser. The internship and Hobson’s book, "NLP in Action", were greatly illuminating. I’m very grateful to the team at Tangible for being so generous with their time.',
    technologies: ['Jupyter', 'Pandas', 'SpaCy', 'NumPy', 'SciKit', 'HuggingFace', 'Joblib', 'PyTorch'],
    viewLink: 'https://github.com/earcherc/vector-search',
  },
  {
    imageSrc: radreportImage,
    title: 'RadReport',
    description:
      'A radiology reporting system that significantly improved accuracy, detail and throughput of Adelaide MRI. Using various forms of data and image analysis, RadReport represented a step forward in radiology.',
    technologies: [
      'Angular',
      'RxJS',
      'Docker',
      'Redis',
      'Flask',
      'React',
      'SQLAlchemy',
      'Celery',
      'PyTest',
      'Cypress',
      'Sentry',
      'Jinja',
      'Postgres',
    ],
    viewLink: 'https://adelaidemri.com/',
  },
  {
    imageSrc: michellesImage,
    title: 'Harmony Within',
    description:
      'A health coaching business website that provides valuable information and tools for patient management. This provides the coach with an elegant and professional online presence that increases engagement and conversion of potential clientele.',
    technologies: ['Gatsby', 'Stripe', 'Sanity.io', 'Acuity Scheduler'],
    viewLink: 'https://michellesportfoliomain.gatsbyjs.io/',
  },
  {
    imageSrc: portfolioImage,
    title: 'Portfolio',
    description:
      'I designed this portfolio to offer an elegant home for my thoughts, projects and services. It’s also used as a testing ground for code practices, technologies, and design.',
    technologies: ['Next', 'Tailwind CSS', 'Framer motion', 'MDX', 'Vercel'],
    viewLink: 'https://ethancavill.me',
  },
  {
    imageSrc: devarityImage,
    title: 'Devarity',
    description:
      'An indie game distributor for developers and gamers. The mission was to support indie developers through a custom platform that provided healthier profit margins and unique customer buying experience. At launch we featured over 50 games from our partners.',
    technologies: ['PHP', 'MySQL', 'Python', 'Bootstrap', 'JQuery'],
  },
];

export default function Projects() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div id="projects" className="text-center mb-10 md:mb-16">
        <span className="text-4xl font-bold text-slate-700 ">Projects</span>
      </div>
      {projects.map((project, index) => (
        <ProjectSlideClient key={index} reverse={index % 2 === 0} {...project}></ProjectSlideClient>
      ))}
    </Suspense>
  );
}
