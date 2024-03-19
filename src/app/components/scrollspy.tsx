'use client';

import { scrollToElement } from '../../../utils/scrollTo';
import { useSpring, animated } from 'react-spring';
import React, { useEffect } from 'react';
import Scrollspy from 'react-scrollspy';

export default function ScrollSpyMenu() {
  const [props, set] = useSpring(() => ({
    transform: 'translate3d(100px,0,0)',
    config: { friction: 20, tension: 4000, mass: 20 },
  }));

  useEffect(() => {
    set({ transform: 'translate3d(0,0,0)' });
  }, [set]);

  return (
    <animated.div style={props} className="fixed right-0 top-1/2 hidden lg:flex flex-col items-center">
      <Scrollspy
        items={['home', 'about', 'skillset', 'projects']}
        currentClassName="bg-gray-200 text-gray-800 rounded-full transition duration-200 ease-in-out"
        className="p-1 fixed mr-20 rotate-90 transform space-x-3 bg-white border-t border-gray-100 rounded-full shadow-lg hidden md:flex"
      >
        {['home', 'about', 'skillset', 'projects'].map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToElement(`#${item}`)}
            className="font-medium text-xs xl:text-base text-gray-600 hover:text-gray-700 hover:bg-gray-100 p-1 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
          >
            {item.toUpperCase()}
          </button>
        ))}
      </Scrollspy>
    </animated.div>
  );
}
