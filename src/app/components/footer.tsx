import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowUpCircleIcon } from '@heroicons/react/20/solid';
import { scrollToElement } from '../../utils/scrollTo';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="z-[-10] footer-shape bg-gray-300">
      <div className="pt-5 flex flex-col justify-center items-center">
        <a
          href="mailto: ethancavill@gmail.com"
          className="text-gray-600 font-semibold hover:text-gray-800 mb-4 transition duration-300 ease-in-out hover:scale-110 transform"
        >
          ethancavill@gmail.com
        </a>

        <div className="flex space-x-5 mb-4">
          <a href="https://www.linkedin.com/in/ethancavill/" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon size="2x" icon={faLinkedin} className="text-gray-500 hover:text-gray-900" />
          </a>
          <a href="https://github.com/earcherc" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon size="2x" icon={faGithub} className=" text-gray-500 hover:text-gray-900" />
          </a>
        </div>

        <div className="font-bold text-xs text-white mb-4">Ethan Cavill © {currentYear}</div>

        <button onClick={() => scrollToElement('#home')} className="cursor-pointer">
          <ArrowUpCircleIcon className="h-10 w-10 text-white hover:text-gray-100" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
