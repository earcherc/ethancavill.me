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
        'Multidisciplinary background in visual arts, marketing, and branding allows me to create cohesive and impactful visual identities.',
    },
    {
      icon: faCode,
      title: 'Development',
      description:
        'Experience in the medical AI industry provided insight into architecting complex systems that meet stakeholder demands.',
    },
    {
      icon: faMicrochip,
      title: 'Technology',
      description:
        'Committed to understanding your vision and searching for the technologies that perform now and into the future.',
    },
    {
      icon: faHandshake,
      title: 'Relationships',
      description:
        'Prioritising transparent communication and open dialogue is the foundation of a successful partnership.',
    },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div id="skillset">
        <div className="mx-auto w-4/5 min-h-[20rem] md:h-[24rem] rounded-t-xl p-10 bg-gray-100 mt-10">
          <h2 className="font-bold text-4xl text-center mb-8 text-slate-800">Creative Developer</h2>
          <p className="text-center prose prose-slate mx-auto mb-6">
            I specialise in the the marriage of design and technology, seeking to captivate and engage by providing
            industry leading user experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-stretch mx-auto -mt-14 sm:-mt-24 md:-mt-44 max-w-screen-xl mb-20">
          {skillDetails.map((detail, index) => (
            <div key={index} className="w-4/5 md:w-2/5 m-2">
              <SkillsetDetailClient {...detail} />
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
