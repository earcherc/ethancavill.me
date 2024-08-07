'use client';

import { faGithub, faLinkedin, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { Tooltip } from 'react-tooltip';

export default function Socials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const iconsAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0,20px,0)',
    config: { friction: 26, tension: 170, mass: 1 },
  });

  return (
    <animated.div ref={ref} style={iconsAnimation} className="flex justify-center">
      <ul className="flex space-x-12">
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="LinkedIn"
          className="transform transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-110 text-gray-500 hover:text-gray-600"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/ethancavill/"
        >
          <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </a>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Email"
          className="transform transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-110 text-gray-500 hover:text-gray-600"
          target="_blank"
          rel="noreferrer noopener"
          href="mailto: ethancavill@gmail.com"
        >
          <FontAwesomeIcon size="2x" icon={faEnvelope} />
        </a>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="GitHub"
          className="transform transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-110 text-gray-500 hover:text-gray-600"
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/earcherc"
        >
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </a>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Discord"
          className="transform transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-110 text-gray-500 hover:text-gray-600"
          target="_blank"
          rel="noreferrer noopener"
          href="https://discord.gg/6g5yvj9X5b"
        >
          <FontAwesomeIcon size="2x" icon={faDiscord} />
        </a>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Twitter"
          className="transform transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-110 text-gray-500 hover:text-gray-600"
          target="_blank"
          rel="noreferrer noopener"
          href="https://twitter.com/ethcavill"
        >
          <FontAwesomeIcon size="2x" icon={faTwitter} />
        </a>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Download Resume"
          className="transform transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-110 text-gray-500 hover:text-gray-600"
          href="/resume/ethan_cv.pdf"
          download="ethan_cavill_cv.pdf"
        >
          <FontAwesomeIcon size="2x" icon={faFilePdf} />
        </a>
      </ul>
      <Tooltip id="my-tooltip" delayShow={300} />
    </animated.div>
  );
}
