import {
  faDraftingCompass,
  faCode,
  faDollyFlatbed,
  faHandshake,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

const DynamicSkillsetDetail = React.lazy(() => import('./dynamicSkillsetDetail'));

import React, { Suspense } from 'react';

export type SkillDetailsType = {
  icon: IconDefinition;
  title: string;
  description: string;
};

export default function Skillset() {
  const skillDetails: SkillDetailsType[] = [
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
    <Suspense fallback={<div>Loading...</div>}>
      <div id="skillset">
        <div className="mx-auto w-4/5 min-h-[20rem] md:h-[24rem] rounded-t-xl p-10 bg-gray-100 mt-10">
          <h2 className="font-bold text-4xl text-center mb-8 text-slate-800">Creative Developer</h2>
          <p className="prose prose-slate mx-auto mb-6">
            I have the creative and technical skills to build products tailored to your business needs. With a strong
            client relationship, we will develop a unique online presence that separates you from the crowd.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row flex-wrap items-center md:items-stretch md:justify-center -mt-10 sm:-mt-24 md:-mt-40 max-w-screen-xl mb-20">
          {skillDetails.map((detail, index) => (
            <DynamicSkillsetDetail key={index} {...detail} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
