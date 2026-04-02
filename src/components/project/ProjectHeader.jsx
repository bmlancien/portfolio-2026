import React from 'react';

export default function ProjectHeader({ organization, funding, years, title, skills }) {
  return (
    <div className="max-w-8xl mx-auto px-6 lg:px-12 pt-16 pb-12">
      <div className="flex flex-wrap items-center gap-1 text-sm lg:text-base xl:text-xl text-gray-500 mb-2 xl:mb-6">
        <span>{organization}</span>
        <span className="mx-2">·</span>
        <span>{funding}</span>
        <span className="mx-2">·</span>
        <span>{years}</span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-rajdhani leading-tight mb-4 xl:mb-8 max-w-7xl">
        {title}
      </h1>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-base lg:text-lg xl:text-2xl text-gray-800">Role & Skills:</span>
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-1 bg-gray-100 text-gray-800 rounded-full text-base lg:text-lg xl:text-2xl">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
