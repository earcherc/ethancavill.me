import { faDraftingCompass, faCode, faHandshake, IconDefinition, faMicrochip } from '@fortawesome/free-solid-svg-icons';

const SkillsetDetailClient = React.lazy(() => import('./skill-set-detail-client'));

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
        'With an education in visual arts, writing, marketing and branding, I’m able to produce a harmonious balance between all dimensions of your business’ image.',
    },
    {
      icon: faCode,
      title: 'Development',
      description:
        'Working in the medical AI industry taught me how to organise complex systems and appreciate the demands of staff and clientele alike. Building with industry-leading standards and up-to-date technology is what I specialise in.',
    },
    {
      icon: faMicrochip,
      title: 'Technology',
      description:
        'No matter what dream you have, I will do the research necessary to make it come to life using the most advanced technologies available. The tech industry moves at lightning speed and it’s important to keep your competitive edge.',
    },
    {
      icon: faHandshake,
      title: 'Relationships',
      description:
        'I believe communication and honesty are the hallmarks of a good relationship. I’m available to chat no matter the time or circumstance. All of our work is shared in real-time so you have space to provide ideas and feedback.',
    },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div id="skillset">
        <div className="mx-auto w-4/5 min-h-[20rem] md:h-[24rem] rounded-t-xl p-10 bg-gray-100 mt-10">
          <h2 className="font-bold text-4xl text-center mb-8 text-slate-800">Creative Developer</h2>
          <p className="prose prose-slate mx-auto mb-6">
            A marriage between design and technology is what the modern consumer demands from our digital experiences.
            One without the other isn’t enough to produce a memorable experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-stretch mx-auto -mt-10 sm:-mt-24 md:-mt-40 max-w-screen-xl mb-20">
          {skillDetails.map((detail, index) => (
            <div className="w-4/5 md:w-2/5 m-2">
              <SkillsetDetailClient key={index} {...detail} />
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
