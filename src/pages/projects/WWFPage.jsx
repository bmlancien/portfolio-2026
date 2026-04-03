import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectImage from '../../components/project/ProjectImage';
import ProjectDivider from '../../components/project/ProjectDivider';
import { wwf } from '../../data/projects/wwf';

export default function WWFPage() {
  return (
    <div className="w-full bg-white pb-6 lg:pb-12 xl:pb-24">
      <ProjectHeader {...wwf.header} />
      <ProjectHero {...wwf.hero} />
      <ProjectSection title="Let’s bring energy data to life">
        <p>
          WWF Germany needed a way to display energy data to everyday visitors to their website. 
          The challenge was making that data feel meaningful and legible to someone with no 
          background in energy systems. The brief called for a set of dynamic, interactive 
          visualizations that could be included as an iframe while keeping WWF's visual identity.
        </p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="The starting point">
        <p>
          The project began with rough sketches from the partner team: a set of chart concepts that 
          captured what they wanted to communicate. My first task was to turn those sketches into 
          workable mockups and, in doing so, ask the more fundamental question: what is each 
          visualization actually trying to say? That question drove every design decision that followed.
        </p>
        <p>
          Responsiveness was part of the conversation from the start. Because the visualizations would 
          be embedded across different pages and screen sizes, I had to think about mobile layouts 
          early — before the designs were locked in — rather than retrofitting them at the end. This 
          shaped how I approached the grid structure and how much information each chart could carry at 
          smaller sizes.
        </p>
        <ProjectImage
          src="/images/projects/wwf/wwf-responsive.svg"
          alt="Different mobile sizes for the same visualization"
          caption="Different mobile sizes for the same visualization in order to understand what the user would see on different screen sizes"
          width={1440}
          height={1066}
        />
        <ProjectImage
          src="/images/projects/wwf/wwf-desktop.png"
          alt="Desktop view of the visualization layout"
          caption="Desktop view of the visualization layout in order to understand what the user would see on the WWF website"
          width={1440}
          height={2419}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="Simplifying without losing meaning">
        <p>
          Early sketches had too much information competing for attention within a single chart. 
          Several concepts used pie charts that work poorly when comparing more than two values. 
          Position on a common scale is generally the easiest to compare, whereas circles and angles 
          are less precise. I therefore went for column and line charts, which are easier to decode.
        </p>
        <p>
          The goal was to remove anything that made the reader work harder than necessary. Visual cues 
          like icons, consistent brand colors, and clear typographic hierarchy were added not as 
          decoration but as navigation so that users could orient themselves quickly within each 
          visualization.
        </p>
        <ProjectImage
          src="/images/projects/wwf/wwf-first-sketches.svg"
          alt="Visualization sketches"
          caption="First attempts to reduce the amount of information in each visualization"
          width={1440}
          height={825}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="Interactivity as storytelling">
        <p>
          One of the more effective design decisions was the use of a time slider, letting users scrub 
          through historical data at their own pace. Rather than presenting a static snapshot, it 
          turned each chart into a small narrative: you could watch Germany's electricity mix shift 
          year by year, or trace the relationship between CO₂ concentration and temperature across 
          decades. The data told its own story once the interface got out of the way.
        </p>
        <ProjectImage
          src="/images/projects/wwf/wwf-frames.svg"
          alt="WWF visualization mockups"
          caption="The user can scrub through the data with a time slider, which turns each chart into a small narrative over time"
          width={1440}
          height={844}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="Results">
        <p>
          The final dashboard comprised 11 dynamic visualizations, covering topics from transport 
          emissions to the growth of renewable energy sources to daily electricity production. Each 
          was responsive and designed for iframe integration, so it could be embedded flexibly across 
          the WWF Germany site without layout friction on any screen size.
        </p>
        <ProjectImage
          src="/images/projects/wwf/wwf-frames2.png"
          alt="WWF visualization mockups"
          caption="The final dashboard comprised 11 dynamic visualizations, covering topics from transport emissions to the growth of renewable energy sources to daily electricity production."
          width={1440}
          height={844}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="What I took from it">
        <p>
          Data visualization design always starts with the same question: what do we want the reader 
          to understand? Everything else, like chart type, color or interaction, follows from that. 
          Simple charts are often more effective than complex ones precisely because the reader can 
          focus on the data instead of decoding the format. The harder skill is knowing when a custom 
          chart adds real value and when it just adds noise.
        </p>
      </ProjectSection>
    </div>
  );
}
