import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectImage from '../../components/project/ProjectImage';
import ProjectDivider from '../../components/project/ProjectDivider';
import { localiser } from '../../data/projects/localiser';

export default function LocaliserPage() {
  return (
    <div className="w-full bg-white pb-6 lg:pb-12 xl:pb-24">
      <ProjectHeader {...localiser.header} />
      <ProjectHero {...localiser.hero} />
      <ProjectSection title="A tool for both site planning and hydrogen along the value chain">
        <p>
          Localiser is a web application for EV charging infrastructure planning. It helps 
          planners, investors, and municipalities identify viable locations by combining a 
          geographical data with planning and assessment tools. The platform has since expanded 
          into a marketplace for hydrogen infrastructure, adding a second domain with its own 
          data layers and user flows.
        </p>
        <p>
          I've been the de facto design lead since the early stages of the product, working with 
          full design autonomy across the app, the website, and supporting visual work.
        </p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="The charging point view grew beyond what a modal could hold">
        <p>
          Users can view and add potential charging points to the map. It is possible to add 
          information and, most importantly, evaluate the viability of the potential charging 
          point. Early on, this was done on a modal to keep the interface clean. But as the 
          feature matured, so did its content: location data, technical parameters, files, 
          accessibility information, and an assessment of the site's viability. The modal was 
          running out of room.
        </p>
        <p>
          More importantly, hiding the map while users reviewed a location was working against 
          them. The whole point of the tool is understanding a site in the context of its 
          surroundings. Choosing to keep both visible at the same time was the right decision 
          to take. Therefore the modal became a persistent side panel, allowing the map to 
          always stay in view.
        </p>
        <ProjectImage
          src="/images/projects/localiser/localiser-ux.png"
          alt="Overview of features of the app."
          caption="Overview of features of the app. The charging point feature grew to be an information hub for the site."
          width={1061}
          height={1084}
        />
        <ProjectImage
          src="/images/projects/localiser/localiser-lis.png"
          alt="From a modal to a persistent side panel with map."
          caption="Changing from a modal to a persistent side panel and keeping the map in view was crucial to the user flow."
          width={1440}
          height={1676}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="The assessment section needed a different kind of structure">
        <p>
          Within the charging point view, the viability assessment presented its own readability 
          problem. The original design used a table for key values and a flat list for additional 
          indicators, which is functional, but cognitively flat. Everything had the same visual 
          weight, which made it hard to quickly identify what mattered.
        </p>
        <p>
          The list became categorized boxes, grouping related indicators together under clear 
          headings. The table stayed. The result was a section that users could scan rather than 
          read, with structure that reflected how the information was actually organized, not just 
          how it arrived as raw data.
        </p>
        <ProjectImage
          src="/images/projects/localiser/localiser-lis-assessment.png"
          alt="Change between the original table and list design and the new categorized boxes design."
          caption="Change between the original table and list design and the new categorized boxes design. The new design has a clear hierarchy, with key indicators grouped in boxes."
          width={1440}
          height={1364}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="40+ layers, two domains, one coherent visual system">
        <p>
          The Digitalatlas, a main feature of the web app, aggregates over 40 data layers: existing 
          charging infrastructure, grid capacity, demand potential, points of interest, land use, and 
          more. The H2 Marketplace, on the other hand, has a separate set of hydrogen-specific layers. 
          Each layer needs to be visually distinct, immediately recognizable, and consistent with the others.
        </p>
        <ProjectImage
          src="/images/projects/localiser/localiser-maps.png"
          alt="Different map layers"
          caption="Different map layers for better planning."
          width={1440}
          height={1550}
        />
        <ProjectImage
          src="/images/projects/localiser/localiser-map-infrastructure.png"
          alt="Overview of the Digitalatlas."
          caption="Overview of the Digitalatlas. The map has over 40 layers, divided into different categories."
          width={1440}
          height={1024}
        />
        <p>
          I designed icon sets for both domains. This kind of work sits between data visualization and visual 
          identity. The icons aren't decoration, they're part of how users navigate and interpret the map.
        </p>
        <ProjectImage
          src="/images/projects/localiser/localiser-h2-icons.png"
          alt="Hydrogen-specific icons for the H2 Marketplace."
          caption="Hydrogen-specific icons for the H2 Marketplace. These icons help users quickly identify and understand the different types of hydrogen infrastructure."
          width={1440}
          height={1275}
        />
      </ProjectSection>
    </div>
  );
}
