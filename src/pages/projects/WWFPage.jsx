import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectImage from '../../components/project/ProjectImage';
import ProjectDivider from '../../components/project/ProjectDivider';
import { wwf } from '../../data/projects/wwf';

export default function WWFPage() {
  return (
    <>
      <div className="w-full bg-white">
        <ProjectHeader {...wwf.header} />
        <ProjectHero {...wwf.hero} />
      </div>
    </>
  );
}
