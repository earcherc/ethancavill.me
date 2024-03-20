import Image from 'next/image';
import React from 'react';

import portraitImage from '../../../../public/portrait.png';
import PortraitBlob from '../svgs/portaitBlob';
import AboutWave1 from '../svgs/aboutWave1';
import AboutWave2 from '../svgs/aboutWave2';
import TechDetails from './tech-details';

export default function About() {
  return (
    <>
      <AboutWave1 />
      <div id="about" className="h-auto bg-gray-100 -mt-0 md:-mt-20 xl:-mt-32">
        <h2 className="text-center text-5xl font-semibold text-slate-800 mb-8 md:mb-20">About Me</h2>

        <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto relative mb-10">
          <div className="h-96 w-96 relative mb-10">
            <div className="absolute inset-0">
              <PortraitBlob />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <Image src={portraitImage} alt="Portrait" width={300} height={300} className="rounded-full" />
            </div>
          </div>

          <p className="prose prose-slate mx-6 md:mx-0">
            Hello, I'm Ethan! Passionate about technology, math, philosophy, nutrition, meditation, fitness, and life;
            through these pursuits, it's my goal to help make the world a better place. Currently focused on building
            applications that connect and empower humanity.
          </p>
        </div>

        <TechDetails />
        <AboutWave2 />
      </div>
    </>
  );
}
