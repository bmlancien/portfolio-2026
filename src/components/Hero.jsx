import React from 'react';
import FadeInView from './FadeInView';
import useT from '../hooks/useT';

const Hero = () => {
  const t = useT();
  return (
    <section className="bg-white">
      <div className="max-w-8xl flex justify-center mx-auto px-6 lg:px-8 xl:px-12 py-8 md:py-16 lg:py-20 pt-16 lg:pt-24 xl:pt-32">
        <FadeInView className="max-w-5xl flex flex-col items-center">
          <h1 className="text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-rajdhani text-gray-700 mb-4 leading-tight">
            {t.hero.heading}
          </h1>
          <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-700">
            {t.hero.subheading}
          </p>
        </FadeInView>
      </div>
    </section>
  );
};

export default Hero;
