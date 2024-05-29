import React, { forwardRef } from 'react';

const Section = forwardRef(({ id, title, children, className }, ref) => {
  return (
    <section id={id} ref={ref} className={`section h-screen flex items-center justify-center p-8 relative ${className}`}>
      <div className="bg absolute top-0 left-0 w-full h-full"></div>
      <div className="outer relative z-10 w-full h-full flex items-center justify-center">
        <div className="inner">
          <h2 className="section-heading text-4xl mb-4">{title}</h2>
          <div className="section-content text-lg">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Section;
