"use client";

import React from 'react';
import { usePopup } from './popupcontext';
import Link from 'next/link';

const projectDetails = {
  blog: {
    title: 'Elden Ring Blog and Crud Administrator',
    description: 'Detailed description of the Elden Ring Blog project...',
    github: 'https://github.com/Rodrimansidub14/BlogP1.git',
  },
  chat: {
    title: 'Chat Application with Vanilla JS',
    description: 'Detailed description of the Chat Application with Vanilla JS project...',
    github: 'https://github.com/Rodrimansidub14/Lab5JSOnly.git',
  },
  steamDen: {
    title: 'SteamDen',
    description: 'Detailed description of the SteamDen project...',
    figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FjvfNWeo3MiwYE36lqwBmW4%2FSteamDen%3Fnode-id%3D0-1%26t%3DyJpQ8H6b3j4oqVpD-1',
  },
  blackList: {
    title: 'ListaNegra',
    description: 'Detailed description of the ListaNegra project...',
    figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FjvfNWeo3MiwYE36lqwBmW4%2FListaNegra%3Fnode-id%3D0-1%26t%3DyJpQ8H6b3j4oqVpD-1',
  },
  potentials: {
    title: 'Electric Potential Energy Simulation',
    description: 'Detailed description of the Electric Potential Energy Simulation project...',
    github: 'https://github.com/Rodrimansidub14/Energ-a-potencial-y-potencial-electrico-simulaci-n.git',
  },
  currents: {
    title: 'Electric Current Simulation',
    description: 'Detailed description of the Electric Current Simulation project...',
    github: 'https://github.com/Rodrimansidub14/ElectricCurrentSimulator.git',
  },
};

const Modal = () => {
  const { isOpen, currentProject, closePopup } = usePopup();

  if (!isOpen || !currentProject) return null;

  const details = projectDetails[currentProject];

  if (!details) {
    return <div>Project not found</div>;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={closePopup} className="modal-close-button">&times;</button>
        <div className="modal-content">
          <h1 className="modal-title">{details.title}</h1>
          <p className="modal-description">{details.description}</p>
          {details.github && (
            <Link href={details.github} className="modal-github-link" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </Link>
          )}
          {details.figma && (
            <div className="modal-figma-container">
              <iframe
                className="modal-figma"
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                src={details.figma}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
