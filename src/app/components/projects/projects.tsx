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
      "Inspired by Cal Newport's 'Deep Work,' this productivity tool reimagines focus tracking.  Disappointed by existing options, I built a personalized timer aligning with Newport's research. This NextJS application uses Docker, AWS, and a robust backend (Redis, Postgres, GraphQL, etc.) to deliver an optimized deep work experience.",
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
      "During my internship at Tangible AI, I developed and evaluated various information retrieval (IR) systems to enhance search results within a corpus of health documents. Starting with TF-IDF, I created a pipeline for processing and assessment, then compared results against a BERT-based vectorizer. This project, alongside Hobson Lane's 'NLP in Action,' deepened my understanding of natural language processing.",
    technologies: ['Jupyter', 'Pandas', 'SpaCy', 'NumPy', 'SciKit', 'HuggingFace', 'Joblib', 'PyTorch'],
    viewLink: 'https://github.com/earcherc/vector-search',
  },
  {
    imageSrc: radreportImage,
    title: 'RadReport',
    description:
      'RadReport is a radiology reporting system implemented at Adelaide MRI, significantly improving report accuracy, detail, and throughput. By leveraging data and image analysis, RadReport represents a substantial advancement in radiology practices.',
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
      'This professionally designed website empowers health coaches to effectively manage their practice and attract new clients. The platform provides a comprehensive suite of tools for client engagement, appointment scheduling, and resource sharing, all presented in an elegant interface that fosters trust and credibility.',
    technologies: ['Gatsby', 'Stripe', 'Sanity.io', 'Acuity Scheduler'],
  },
  {
    imageSrc: portfolioImage,
    title: 'Portfolio',
    description:
      'My portfolio website showcases my projects, services, and insights while serving as a dynamic testing ground for innovative code practices, technologies, and design principles.',
    technologies: ['Next', 'Tailwind CSS', 'Framer motion', 'MDX', 'Vercel'],
    viewLink: 'https://ethancavill.me',
  },
  {
    imageSrc: devarityImage,
    title: 'Devarity',
    description:
      'This indie game distribution platform champions independent game developers by offering fairer profit margins and a unique customer experience. At launch we featured over 50 games from our partners',
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
