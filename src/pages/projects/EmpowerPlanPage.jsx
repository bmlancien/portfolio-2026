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
            height={673}
          />
        </ProjectSection>
        <ProjectDivider />
        <ProjectSection title="From 'here is data' to 'here is where you stand'">
          <p>
            The scenario comparison view went through a significant evolution across the project. 
            Early versions displayed scenario data clearly, e.g., wind capacity, PV targets and land 
            requirements, but without a reference point, users still couldn't evaluate what they were 
            seeing. The solution was to include state and national goals directly into the same view, 
            so that a planner looking at Oderland-Spree's numbers could immediately see how their 
            region compared to Brandenburg and to Germany's national targets. That change turned the 
            scenario screen from an information UI into a decision support tool.
          </p>
          <ProjectImage
            src="/images/projects/epp/epp-scenarios.svg"
            alt="After seeing the challenges and regional data in the first two steps, users can compare scenarios to state and national targets in the third step"
            caption="After seeing the challenges and regional data in the first two steps, users can compare scenarios to state and national targets in the third step"
            width={1282}
            height={822}
          />
          <p>
            A wizard-style flow (Herausforderungen → Region heute → Szenarien → Einstellungen → Ergebnisse) 
            kept the overall experience navigable as requirements grew in complexity across project 
            iterations. Predefined policy scenarios like the Energiestrategie Brandenburg 2030 could be 
            selected as a baseline with a single click, guiding users who didn't know where to start.
          </p>
          <ProjectImage
            src="/images/projects/epp/epp-wizard.svg"
            alt="Layout overview: Top navigation bar, with side panels for parameters and content, next to the map and charts."
            caption="Layout overview: Top navigation bar, with side panels for parameters and content, next to the map and charts."
            width={806}
            height={524}
          />
        </ProjectSection>
        <ProjectDivider />
        <ProjectSection title="On the technical side, the design had to carry real complexity">
          <p>
            The underlying model coupled regional energy scenarios with national climate targets, which 
            was quite a challenging data environment. 26 map layers needed to coexist legibly, which I 
            addressed through category-based color grouping and sequential palettes for differentiation 
            within each group. ECharts handled the plotting, Bootstrap kept the frontend simple and 
            maintainable, and accessibility, i.e., keyboard navigation, ARIA structures, contrast 
            compliance, was built in from the start.
          </p>
          <ProjectImage
            src="/images/projects/epp/epp-palettes.png"
            alt="Color palettes used in the EmPowerPlan prototype"
            caption="Color palettes for a high number of layers, designed to work together on the same map"
            width={1440}
            height={2447}
          />
          <ProjectImage
            src="/images/projects/epp/epp-map.png"
            alt="Map view"
            caption="Map view with different layers of information, including land use, protected areas, and renewable energy potential"
            width={1440}
            height={901}
          />
        </ProjectSection>
        <ProjectDivider />
        <ProjectSection title="Several workshop cycles in one region led to measurable change">
          <p>
            The tool was tested and iterated through workshops with actual stakeholders in Oderland-Spree. 
            I worked from the feedback the research team gathered in each session to iterate on prototypes, 
            then implemented the changes directly in frontend code, which were tested again in the next 
            workshop cycle. Because I handled both design and implementation, changes moved directly from 
            workshop feedback into the interface.
          </p>
          <ProjectImage
            src="/images/projects/epp/epp-iteration.png"
            alt="Iteration process in the EmPowerPlan prototype"
            caption="Iteration process in the EmPowerPlan prototype, with workshops leading to design changes that were implemented directly in the frontend code and tested again in the next workshop cycle"
            width={1440}
            height={329}
          />
          <p>
            By the final iteration, participants were navigating the tool independently and using scenario 
            comparisons to discuss real planning trade-offs, which was the point.
          </p>
          <ProjectImage
            src="/images/projects/epp/epp-results.png"
            alt="Results view"
            caption="Results view with different layers of information, includind charts and a map view"
            width={1280}
            height={1031}
          />
        </ProjectSection>
      </div>
    </>
  );
}
