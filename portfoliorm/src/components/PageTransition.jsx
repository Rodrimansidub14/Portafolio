// /components/PageTransition.jsx
"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const animateIn = () => {
      gsap.fromTo(pageRef.current, { opacity: 0, y: window.innerHeight }, { opacity: 1, y: 0, duration: 2, ease: 'power1.inOut' });
    };

    animateIn();
  }, [pathname]);

  return (
    <div ref={pageRef} style={{ position: 'relative', zIndex: 50 }}>
      {children}
    </div>
  );
};

export default PageTransition;
