"use client";

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const sectionsData = [
  { id: "about-me", title: "Sobre Mi", content: (
    <>
      <p className="mb-3">Born in Guatemala, 2004. Studying Computer Science at Universidad del Valle de Guatemala. I believe that Computer Science holds the key to solving many of the world's challenges.</p>
      <br />
      <blockquote className="italic ">"Wonder is the beginning of wisdom." - Socrates</blockquote>
      <br />
      <p className="text-opacity-80 text-xs">Scroll to Continue...</p>
    </>
  )},
  { id: "skills", title: "Skills", content: "JavaScript, React, Node.js, CSS, HTML, and more..." },
  { id: "contact", title: "Contact", content: (
    <div className="flex space-x-8">
      <a href="https://github.com/Rodrimansidub14" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="44"
          viewBox="0 0 98 96"
          className="w-16 h-16 hover:scale-110 transition-transform duration-300"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            fill="#BABDC9"
          />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/rodrigomansidub/" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="44"
          viewBox="0 0 24 24"
          className="w-16 h-16 hover:scale-110 transition-transform duration-300"
        >
          <path
            d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"
            fill="#A9BAC6"
          />
        </svg>
      </a>
    </div>
  )}
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = useRef(sectionsData.map(() => React.createRef()));

  const gotoSection = (index) => {
    if (index >= 0 && index < sectionsData.length) {
      const direction = index > currentIndex ? 1 : -1;
      const currentSection = sectionRefs.current[currentIndex].current;
      const nextSection = sectionRefs.current[index].current;

      gsap.fromTo(currentSection, 
        { x: 0 }, 
        { x: -direction * window.innerWidth, opacity: 0, duration: 1, ease: "power2.inOut" }
      );
      
      gsap.fromTo(nextSection, 
        { x: direction * window.innerWidth, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power2.inOut", onComplete: () => setCurrentIndex(index) }
      );
    }
  };

  useEffect(() => {
    const observer = ScrollTrigger.observe({
      target: window,
      type: "wheel,touch",
      onUp: () => gotoSection(currentIndex - 1),
      onDown: () => gotoSection(currentIndex + 1),
    });

    return () => {
      observer.kill();
    };
  }, [currentIndex]);

  useEffect(() => {
    sectionRefs.current[0].current.scrollIntoView({ behavior: 'smooth' });
    gsap.fromTo(sectionRefs.current[0].current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div className="about-page min-h-screen text-white flex flex-col items-center justify-center relative">
      {sectionsData.map((section, index) => (
        <div 
          key={section.id} 
          id={section.id} 
          ref={sectionRefs.current[index]}
          className={`section w-full min-h-screen flex items-center justify-center p-8 absolute`}
          style={{ display: index === currentIndex ? 'flex' : 'none' }}
        >
          <div className="relative z-50 w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
            <h2 className="section-heading font-sans font-black text-2xl mb-8">{section.title}</h2>
            <div className="section-content text-lg leading-relaxed text-center">
              {section.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}