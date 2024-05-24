"use client";

import React from 'react';
import { usePopup } from './popupcontext';

const projects = {
  'Web Development': [
    { title: 'Elden Ring Blog and Crud Administrator', link: 'blog' },
    { title: 'Chat Application with Vanilla JS', link: 'chat' },
  ],
  Design: [
    { title: 'SteamDen', link: 'steamDen' },
    { title: 'ListaNegra', link: 'blackList' },
  ],
  'Scientific Computing': [
    { title: 'Electric Potential Energy Simulation', link: 'potentialsim' },
    { title: 'Electric Current Simulation', link: 'currentsim' },
  ],
};

const ProjectList = () => {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 container">
      {Object.keys(projects).map((category, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-xl font-sans font-bold mb-3">{category}</h2>
          {projects[category].map((project, idx) => (
            <button
              key={idx}
              onClick={() => openPopup(project.link)}
              className="block my-2 text-center text-2xl font-sans font-bold hover:text-gray-200 transition duration-300"
            >
              {project.title}
            </button>
          ))}
        </section>
      ))}
    </div>
  );
};

export default ProjectList;
