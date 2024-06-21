import Image from 'next/image';
import React from 'react';

import portraitImage from '../../../../public/home/portrait.png';
import PortraitBlob from '../svgs/portait-blob';
import AboutWave1 from '../svgs/about-wave1';
import AboutWave2 from '../svgs/about-wave2';
import TechDetails from './tech-details';

export default function About() {
  return (
    <>
      <AboutWave1 />
      <div id="about" className="h-auto bg-gray-100 md:-mt-20 xl:-mt-24">
        <h2 className="text-center text-5xl font-semibold text-slate-800 mb-8 md:mb-10">About Me</h2>

        <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto relative mb-10">
          <div className="relative mb-10 h-60 w-60 md:w-72 md:h-72 ">
            <div className="absolute inset-0">
              <PortraitBlob className="w-full h-full text-blue-300 fill-current animate-[spin_10s_ease-in-out_infinite]" />
            </div>
            <div className="flex justify-center items-center h-full">
              <Image src={portraitImage} alt="Portrait" className="z-10 w-48 h-48 md:w-56 md:h-56 rounded-full" />
            </div>
          </div>

          <div className="prose prose-slate mx-6 md:mx-0">
            <p className="mb-2">
              Hi! I'm an experienced full-stack developer with a passion for technology, philosophy, nutrition, fitness,
              and life. I bring a diverse skill set and a strong foundation in mathematics, natural language processing
              (NLP), machine learning, and medical software.
            </p>
            <p className="mb-2">
              Through my research and experience, I've gained a deep understanding of the structural complexity of both
              digital and biological systems alike.
            </p>
          </div>
        </div>

        <TechDetails />
        <AboutWave2 />
      </div>
    </>
  );
}
