import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface TechDetailProps {
  icon: IconDefinition;
  title: string;
  items: string[];
}

export const TechDetailRSC: React.FC<TechDetailProps> = ({ icon, title, items }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg p-6 w-full md:w-1/3 border rounded-xl">
      <div className="flex align-center mb-4">
        <FontAwesomeIcon size="2x" className="mr-3" icon={icon} />
        <span className="font-bold text-gray-800 text-2xl">{title}</span>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center transform transition duration-150 ease-in-out hover:-translate-x-1 hover:text-blue-500"
        >
          <FontAwesomeIcon size="1x" className="text-gray-400 mr-2" icon={faChevronRight} />
          <span className="text-xl">{item}</span>
        </div>
      ))}
    </div>
  );
};
