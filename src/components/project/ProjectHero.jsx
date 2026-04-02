import React from 'react';

export default function ProjectHero({ srcLarge, srcSmall, alt, widthLarge, widthSmall }) {
  return (
    <div className="overflow-hidden -translate-y-8 lg:-translate-y-12 xl:-translate-y-40">
      <img
        src={srcSmall}
        alt={alt}
        className="block xl:hidden w-[800px] md:w-[1280px] max-w-none relative left-1/2 -translate-x-1/2"
      />
      <img
        src={srcLarge}
        alt={alt}
        className={`hidden xl:block max-w-none relative left-1/2 -translate-x-1/2`}
        style={{ width: `${widthLarge}px` }}
      />
    </div>
  );
}
