import React from 'react';

export default function ProjectHero({ srcLarge, srcSmall, alt, widthLarge, heightLarge, widthSmall, heightSmall }) {
  return (
    <div className="overflow-hidden">
      <img
        src={srcSmall}
        alt={alt}
        width={widthSmall}
        height={heightSmall}
        className="block xl:hidden w-[800px] md:w-[1280px] max-w-none relative left-1/2 -translate-x-1/2"
      />
      <img
        src={srcLarge}
        alt={alt}
        width={widthLarge}
        height={heightLarge}
        className="hidden xl:block max-w-none relative left-1/2 -translate-x-1/2"
        style={{ width: `${widthLarge}px` }}
      />
    </div>
  );
}
