import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectImage from '../../components/project/ProjectImage';
import ProjectDivider from '../../components/project/ProjectDivider';
import { empowerplan } from '../../data/projects/empowerplan';

export default function EmpowerPlanPage() {
  return (
    <>
      <div className="w-full bg-white">
        <ProjectHeader {...empowerplan.header} />
        <ProjectHero {...empowerplan.hero} />
      </div>
      <div className="-translate-y-8 lg:-translate-y-12 xl:-translate-y-40">
        <ProjectSection title="The missing tool for non-expert decision-makers">
          <p>
            Regional planners, municipal administrators, and county officials across Germany are
            expected to make land-use decisions for the future. The problem: as of 2022, there was
            no tool available that was easy enough to use without a data scientist in the room and
            rich enough in valuable data and information at the same time.
          </p>
          <p>
            EmPowerPlan filled the gap. As the lead designer working with Reiner Lemoine Institut,
            together partners including Öko-Institut and IZT, and tested with stakeholders in the
            Oderland-Spree region of Brandenburg, my task was to make a complex simulation tool
            usable by non-expert decision-makers.
          </p>
          <ProjectImage
            src="/images/projects/epp/epp-challenges.svg"
            alt="Challenges as first page in the EmPowerPlan prototype"
            caption="Users start with the Challenges step"
            width={1280}
          />
        </ProjectSection>
        <ProjectDivider />
      </div>
    </>
  );
}
