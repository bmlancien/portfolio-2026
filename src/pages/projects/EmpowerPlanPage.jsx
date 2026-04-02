import React from 'react';

export default function EmpowerPlanPage() {
  return (
    <div className="w-full bg-white">

      {/* Header Section */}
      <div className="max-w-8xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="flex flex-wrap items-center gap-1 text-sm lg:text-base xl:text-xl text-gray-500 mb-2 xl:mb-6">
          <span>Reiner Lemoine Institut</span>
          <span className="mx-2">·</span>
          <span>Funded by BMWK (7th Energy Research Program)</span>
          <span className="mx-2">·</span>
          <span>2023-2024</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-rajdhani leading-tight mb-4 xl:mb-8 max-w-7xl">
          Making the energy transition understandable for the people who have to plan it
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-base lg:text-lg xl:text-2xl text-gray-800">Role & Skills:</span>
          <span className="px-4 py-1 bg-gray-100 text-gray-800 rounded-full text-base lg:text-lg xl:text-2xl">
            UX/UI design
          </span>
          <span className="px-4 py-1 bg-gray-100 text-gray-800 rounded-full text-base lg:text-lg xl:text-2xl">
            Data visualisation & map design
          </span>
          <span className="px-4 py-1 bg-gray-100 text-gray-800 rounded-full text-base lg:text-lg xl:text-2xl">
            UI development
          </span>
        </div>
      </div>

      <div className="overflow-hidden -translate-y-8 lg:-translate-y-12 xl:-translate-y-40">
        <img
          src="/images/projects/epp/epp-isometric-sm.png"
          alt="EmPowerPlan visualization and maps"
          className="block xl:hidden w-[800px] md:w-[1280px] max-w-none relative left-1/2 -translate-x-1/2"
        />
        <img
          src="/images/projects/epp/epp-isometric.png"
          alt="EmPowerPlan visualization and maps"
          className="hidden xl:block w-[2909px] max-w-none relative left-1/2 -translate-x-1/2"
        />
      </div>

    </div>
  );
}
