import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowUpCircleIcon } from '@heroicons/react/20/solid';
import { scrollToElement } from '../../../utils/scrollTo';
import FooterBlob from './svgs/footerBlob';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="relative w-full mt-72 flex flex-col items-center justify-end">
      <FooterBlob className="absolute w-full h-96 -z-10" />
      <div className="text-gray-600 hover:text-gray-800 mx-auto mb-2 font-medium tracking-wider transition duration-300 ease-in-out hover:scale-110 transform">
        <a className="" href="mailto: ethancavill@gmail.com">
          ethancavill@gmail.com
        </a>
      </div>

      <div className="flex space-x-5 mb-10">
        <a href="https://www.linkedin.com/in/ethancavill/" target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon size="2x" icon={faLinkedin} className="text-gray-500 hover:text-gray-900" />
        </a>
        <a href="https://github.com/earcherc" target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon size="2x" icon={faGithub} className=" text-gray-500 hover:text-gray-900" />
        </a>
      </div>

      <button onClick={() => scrollToElement('#home')} className="cursor-pointer mb-3">
        <ArrowUpCircleIcon className="h-14 w-14 text-white hover:text-gray-100" />
      </button>

      <div className="font-bold text-xs text-white mb-2">Ethan Cavill © {currentYear}</div>
    </div>
  );
};

export default Footer;
