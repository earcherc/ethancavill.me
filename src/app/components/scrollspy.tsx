'use client';

import { useInView } from 'react-intersection-observer';
import { scrollToElement } from '../../utils/scrollTo';
import { useSpring, animated } from 'react-spring';
import React, { useState, useEffect } from 'react';

const sections = ['home', 'about', 'skillset', 'projects'];

export default function ScrollSpyMenu() {
  const [activeSection, setActiveSection] = useState('home');

  const menuAnimation = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    from: { opacity: 0, transform: 'translate3d(50px,0,0)' },
    config: { friction: 26, tension: 170, mass: 1 },
  });

  // Scroll to element utility
  const handleScrollToElement = (section: string) => {
    scrollToElement(`#${section}`);
    setActiveSection(section);
  };

  // Intersection Observer setup for each section
  sections.forEach((section) => {
    const { ref } = useInView({
      onChange: (inView) => inView && setActiveSection(section),
    });
    useEffect(() => {
      const sectionEl = document.getElementById(section);
      if (sectionEl) {
        ref(sectionEl);
      }
    }, [ref]);
  });

  return (
    <animated.div style={menuAnimation} className="fixed right-0 top-1/2 hidden md:flex z-30 flex-col items-center">
      <div className="p-1 fixed mr-20 rotate-90 transform space-x-3 bg-white border-t border-gray-100 rounded-full shadow-lg hidden md:flex">
        {sections.map((item, index) => (
          <button
            key={index}
            onClick={() => handleScrollToElement(item)}
            className={`font-medium text-xs xl:text-base text-gray-600 hover:text-gray-700 hover:bg-gray-100 p-1 rounded-full transition duration-300 ease-in-out transform hover:scale-110 ${activeSection === item ? 'bg-gray-200 text-gray-800 rounded-full' : ''}`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
    </animated.div>
  );
}
