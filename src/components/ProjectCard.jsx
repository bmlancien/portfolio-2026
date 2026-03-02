import React from 'react';

const ProjectCard = ({ projectNumber, title, description, imageUrl }) => {
  return (
    <div className="mb-24">
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-600 mb-2">Project {projectNumber}</p>
        <h3 className="text-4xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-700 max-w-2xl">{description}</p>
      </div>
      
      {/* Project Image */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default ProjectCard;
