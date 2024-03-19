'use client';

import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';

export default function Socials() {
  const iconsAnimation = useSpring({
    from: { transform: 'translate3d(0,20px,0)', opacity: 0 },
    to: { transform: 'translate3d(0,0,0)', opacity: 1 },
    config: {
      friction: 200,
      tension: 2000,
      mass: 20,
    },
  });

  return (
    <animated.div style={iconsAnimation} className="flex justify-center">
      <ul className="flex space-x-12">
        <a
          className="transform transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-110 text-gray-500 hover:text-gray-600"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/ethancavill/"
        >
          <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </a>
        <a
          className="transform transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-110 text-gray-500 hover:text-gray-600 "
          target="_blank"
          rel="noreferrer noopener"
          href="mailto: ethancavill@gmail.com"
        >
          <FontAwesomeIcon size="2x" icon={faEnvelope} />
        </a>
        <a
          className="transform transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-110 text-gray-500 hover:text-gray-600"
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/earcherc"
        >
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </a>
        <a
          className="transform transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-110 text-gray-500 hover:text-gray-600"
          target="_blank"
          rel="noreferrer noopener"
          href="https://discord.gg/6g5yvj9X5b"
        >
          <FontAwesomeIcon size="2x" icon={faDiscord} />
        </a>
      </ul>
    </animated.div>
  );
}
