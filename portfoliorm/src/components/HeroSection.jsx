import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center z-10">
      <section className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-transparent text-white z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black to-transparent z-0"></div>
        <div className="text-center">
          <h1 className="text-5xl font-sans leading-none font-light ">
            RODRIGO MANSILLA  
          </h1>
          <h1 className="text-6xl font-sans leading-none font-bold"><br />SOFTWARE</h1>
          <h1 className="text-6xl font-sans leading-none font-bold">DEVELOPER</h1>
        </div>

      </section>
    </div>
  );
};

export default HeroSection;
