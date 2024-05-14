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
        'Multidisciplinary background in visual arts, marketing, and branding allows me to create cohesive and impactful visual identities that resonate with your target audience.',
    },
    {
      icon: faCode,
      title: 'Development',
      description:
        'Experience in the medical AI industry has honed my ability to architect complex systems that meet the needs of both staff and clients. I specialize in building scalable solutions using industry best practices and cutting-edge technologies.',
    },
    {
      icon: faMicrochip,
      title: 'Technology',
      description:
        'Committed to understanding your unique vision and conducting thorough research to leverage the most advanced technologies. By staying aware of the rapidly evolving tech landscape, I ensure your business maintains a competitive advantage.',
    },
    {
      icon: faHandshake,
      title: 'Relationships',
      description:
        'Prioritizing transparent communication and open dialogue is the foundation of a successful partnership. I am readily available for consultation and provide real-time access to project progress, fostering an environment of collaboration and feedback.',
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
            <div key={index} className="w-4/5 md:w-2/5 m-2">
              <SkillsetDetailClient {...detail} />
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
