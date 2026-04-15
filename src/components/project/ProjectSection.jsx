import React from 'react';
import FadeInView from '../FadeInView';

export default function ProjectSection({ title, children }) {
  return (
    <FadeInView className="w-full max-w-8xl mx-auto px-6 lg:px-12 pb-12">
      {title && (
        <h2 className="text-left text-lg md:text-xl lg:text-4xl font-bold text-gray-800 mb-2 xl:mb-4 max-w-[860px]">
          {title}
        </h2>
      )}
      <div className="text-base lg:text-lg xl:text-xl text-gray-500 [&>p]:max-w-[860px] [&>p]:mb-2 [&>p]:xl:mb-4">
        {children}
      </div>
    </FadeInView>
  );
}
