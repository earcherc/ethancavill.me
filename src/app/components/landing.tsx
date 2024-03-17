'use client';

import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';
import React, { useEffect, useState } from 'react';

export default function Landing() {
  const [key, setKey] = useState(0);

  const nameAnimation = useSpring({
    from: { transform: 'translate3d(0,-80px,0)', opacity: 0 },
    to: { transform: 'translate3d(0,-20px,0)', opacity: 1 },
    config: {
      friction: 200,
      tension: 2000,
      mass: 20,
    },
  });

  const iconsAnimation = useSpring({
    from: { transform: 'translate3d(0,20px,0)', opacity: 0 },
    to: { transform: 'translate3d(0,0,0)', opacity: 1 },
    config: {
      friction: 200,
      tension: 2000,
      mass: 20,
    },
  });

  useEffect(() => {
    setKey((prevKey: number) => prevKey + 1);
  }, []);

  return (
    <div key={key} className="h-screen-60 flex flex-col justify-center text-center">
      <div className="flex flex-col flex-grow justify-center">
        <animated.div style={nameAnimation} className="flex flex-col">
          <span className="text-8xl text-slate-800 font-medium">Ethan Cavill</span>
          <span className="text-3xl font-semilight mt-2 text-gray-700">
            <span className="font-light text-gray-500">{'{'}</span>
            full-stack developer
            <span className="font-light text-gray-500">{'}'}</span>
          </span>
        </animated.div>
      </div>

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
    </div>
  );
}
