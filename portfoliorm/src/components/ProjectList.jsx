"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { usePopup } from './popupcontext';

const projects = {
  Development: [
    { title: 'Elden Ring Blog and Crud Administrator', link: 'blog' },
    { title: 'Chat Application with Vanilla JS', link: 'chat' },
  ],
  Design: [
    { title: 'SteamDen', link: 'steamDen' },
    { title: 'ListaNegra', link: 'blackList' },
  ],
  'Scientific Computing': [
    { title: 'Electric Potential Energy Simulation', link: 'potentials' },
    { title: 'Electric Current Simulation', link: 'currents' },
  ],
};

const ProjectList = () => {
  const { openPopup } = usePopup();
  const buttonRefs = useRef([]);

  useEffect(() => {
    buttonRefs.current.forEach((button, index) => {
      gsap.fromTo(button, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: index * 0.2, duration: 0.1 });
    });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(buttonRefs.current[index], { scale: 1.1, color: "#D5D6D7", duration: 0.1 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(buttonRefs.current[index], { scale: 1, color: "#FFFFFF", duration: 0.1 });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 container">
      {Object.keys(projects).map((category, categoryIndex) => (
        <section key={categoryIndex} className="mb-12 text-center">
          <h2 className="text-lg font-sans font-bold mb-3">{category}</h2>
          {projects[category].map((project, projectIndex) => {
            const uniqueIndex = `${categoryIndex}-${projectIndex}`;
            return (
              <button
                key={uniqueIndex}
                ref={el => buttonRefs.current[uniqueIndex] = el}
                onClick={() => openPopup(project.link)}
                onMouseEnter={() => handleMouseEnter(uniqueIndex)}
                onMouseLeave={() => handleMouseLeave(uniqueIndex)}
                className="block my-2 text-center text-2xl font-sans font-bold hover:text-gray-200 transition duration-300"
              >
                {project.title}
              </button>
            );
          })}
        </section>
      ))}
    </div>
  );
};

export default ProjectList;