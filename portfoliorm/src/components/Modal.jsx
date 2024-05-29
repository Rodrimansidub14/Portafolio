"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { usePopup } from './popupcontext';

const projectDetails = {
  blog: {
    title: 'Elden Ring Blog and Crud Administrator',
    description: 'This project is an Elden Ring blog with a CRUD (Create, Read, Update, Delete) administrator. It was built using Express and Node.js for the API, Vite and React for the frontend, and Bootstrap for styling.',
    github: 'https://github.com/Rodrimansidub14/BlogP1.git',
  },
  chat: {
    title: 'Chat Application with Vanilla JS',
    description: 'This application is a chat platform with a minimalist interface that allows users to input images in base64 format. It is responsive and built using HTML, CSS, and Vanilla JavaScript.',
    github: 'https://github.com/Rodrimansidub14/Lab5JSOnly.git',
  },
  steamDen: {
    title: 'SteamDen',
    description: 'SteamDen is a design project focused on creating a video game purchasing platform for mothers. The design was created using Figma.',
    figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FjvfNWeo3MiwYE36lqwBmW4%2FSteamDen%3Fnode-id%3D0-1%26t%3DyJpQ8H6b3j4oqVpD-1',
  },
  blackList: {
    title: 'ListaNegra',
    description: 'ListaNegra is a design project for a platform that provides access to legal background information. Its goal is to promote access to legal history data for better decision-making in electoral processes and daily life.',
    figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FvAx6pvOQF4v59tAtkJz7IQ%2FProyecto-4%3Fnode-id%3D0-1%26t%3D7TduDPYRvNhG9lOI-1',
  },
  potentials: {
    title: 'Electric Potential Energy Simulation',
    description: 'This project is a simulator that visualizes concepts related to potential energy and electric potential. It was implemented in Python using libraries such as math, re, and Tkinter.',
    github: 'https://github.com/Rodrimansidub14/Energ-a-potencial-y-potencial-electrico-simulaci-n.git',
  },
  currents: {
    title: 'Electric Current Simulation',
    description: 'This simulator models electrical conduction in a semiconductor material. It calculates electrical properties such as current, voltage, power, drift velocity, and electron travel time based on physical dimensions and conductor properties. The project utilizes PyGame, sys, random, and math libraries.',
    github: 'https://github.com/Rodrimansidub14/ElectricCurrentSimulator.git',
  },
};

const Modal = () => {
  const { isOpen, currentProject, closePopup } = usePopup();
  const modalRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(modalRef.current, { rotationY: -90, opacity: 0 }, { rotationY: 0, opacity: 1, duration: 0.8 });
    } else if (modalRef.current) {
      gsap.to(modalRef.current, { rotationY: 90, opacity: 0, duration: 0.8 });
    }
  }, [isOpen]);

  useEffect(() => {
    if (currentProject) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Adjust the delay as needed
    }
  }, [currentProject]);

  if (!isOpen || !currentProject) return null;

  const details = projectDetails[currentProject];

  if (!details) {
    return <div>Project not found</div>;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <button onClick={closePopup} className="modal-close-button">&times;</button>
        <h1 className="modal-title">{details.title}</h1>
        <p className="modal-description">{details.description}</p>
        {details.github && (
          <div className="modal-github-link-container justify-center">
            <a href={details.github} className="modal-github-link items-center" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="44"
                viewBox="0 0 98 96"
                className="github-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  fill="#BABDC9"
                />
              </svg>
            </a>
          </div>
        )}
        {details.figma && (
          <div className="modal-figma-container relative">
            {isLoading && (
              <div className="skeleton-loader absolute top-0 left-0 w-full h-full z-10"></div>
            )}
            <iframe
              className="modal-figma"
              src={details.figma}
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
