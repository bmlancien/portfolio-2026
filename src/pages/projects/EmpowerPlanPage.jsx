import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import { empowerplan } from '../../data/projects/empowerplan';

export default function EmpowerPlanPage() {
  return (
    <>
      <div className="w-full bg-white">
        <ProjectHeader {...empowerplan.header} />
        <ProjectHero {...empowerplan.hero} />
      </div>
      <div className="-translate-y-8 lg:-translate-y-12 xl:-translate-y-40">
        <div className="w-full max-w-8xl mx-auto px-6 lg:px-12 pb-12">
          <h2 className="text-left text-lg md:text-xl lg:text-4xl font-bold text-gray-800 mb-2 xl:mb-4 max-w-[860px]">
            The missing tool for non-expert decision-makers
          </h2>
          <p className="text-base lg:text-lg xl:text-xl text-gray-500 mb-2 xl:mb-4 max-w-[860px]">
            Regional planners, municipal administrators, and county officials across Germany are expected to make land-use decisions for the future. The problem: as of 2022, there was no tool available that was easy enough to use without a data scientist in the room and rich enough in valuable data and information at the same time.
          </p>
          <p className="text-base lg:text-lg xl:text-xl text-gray-500 mb-2 xl:mb-4 max-w-[860px]">
            EmPowerPlan filled the gap. As the lead designer working with Reiner Lemoine Institut, together partners including Öko-Institut and IZT, and tested with stakeholders in the Oderland-Spree region of Brandenburg, my task was to make a complex simulation tool usable by non-expert decision-makers.
          </p>
          <figure className="w-full flex flex-col items-center mt-6 xl:mt-12 mb-6 xl:mb-12">
            <img
              width={1280}
              src="/images/projects/epp/epp-challenges.svg"
              alt="Challenges as first page in the EmPowerPlan prototype"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              Users start with the Challenges step
            </figcaption>
          </figure>
          <div className="hidden lg:block w-full max-w-[600px] border border-gray-200" style={{ margin: '6rem auto' }}></div>
        </div>
      </div>
    </>
  );
}
