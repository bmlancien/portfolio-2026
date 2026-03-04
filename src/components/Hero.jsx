import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 xl:px-12 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-rajdhani text-gray-700 mb-6 leading-tight">
              Data-Heavy Interfaces for Climate Tech
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-700">
              7+ years designing and building dashboards, scenario tools, and map-based interfaces for the renewable energy sector. 
              I help interdisciplinary teams communicate complex energy insights through clear, accessible design.
            </p>
          </div>
          <div className="flex items-center justify-center w-full max-w-[20rem] md:max-w-[24rem] lg:max-w-[30rem] pt-12">
            <img src="/images/hero_img.svg" alt="Hero illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
