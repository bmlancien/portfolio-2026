import React from 'react';

export default function ProjectImage({ src, alt, caption, width }) {
  return (
    <figure className="w-full flex flex-col items-center mt-6 xl:mt-12 mb-6 xl:mb-12">
      <img src={src} alt={alt} width={width} />
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-500">{caption}</figcaption>
      )}
    </figure>
  );
}
