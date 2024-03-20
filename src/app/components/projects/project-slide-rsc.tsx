import { ProjectSlideProps } from './projects';
import Image from 'next/image';
import React from 'react';

export default function ProjectSlideRSC({
  imageSrc,
  title,
  description,
  technologies,
  viewLink,
  reverse,
}: ProjectSlideProps) {
  return (
    <div
      className={`mb-10 lg:mb-20 w-5/6 lg:w-3/4 mx-auto flex flex-col lg:flex-row h-auto justify-center items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className={`z-[-10] w-full lg:w-2/3 ${reverse ? 'lg:-mr-14' : 'lg:-ml-14'}`}>
        <Image src={imageSrc} alt={title} width={700} height={475} className="rounded shadow" />
      </div>
      <div
        className={`w-full lg:w-2/5 bg-white shadow-2xl rounded p-5 flex flex-col justify-between ${reverse ? 'lg:-mr-14' : 'lg:-ml-14'} -mt-14 lg:-mt-0`}
      >
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
    </div>
  );
}
