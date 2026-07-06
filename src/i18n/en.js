export const en = {
  // ─── Navigation ────────────────────────────────────────────────────────────
  nav: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },

  // ─── Footer ────────────────────────────────────────────────────────────────
  footer: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    imprint: 'Imprint',
    privacy: 'Data Privacy',
    copyright: 'All rights reserved',
  },

  // ─── Homepage — Hero ───────────────────────────────────────────────────────
  hero: {
    heading: 'Data-Heavy Interfaces for Climate Tech',
    subheading:
      '7+ years designing and building dashboards, scenario tools, and map-based interfaces for the renewable energy sector. I help interdisciplinary teams communicate complex energy insights through clear, accessible design.',
  },

  // ─── Homepage — Projects section ───────────────────────────────────────────
  projectsSection: {
    heading: 'Selected Projects',
    subheading: 'A showcase of data-driven interfaces and tools built for the renewable energy sector',
    cards: {
      empowerplan: {
        description:
          'Web app visualizing the regional energy system of a german region and aims at creating a trans-disciplinary dialogue between decision-makers.',
      },
      wwf: {
        description:
          'Dashboard displaying data visualizations such as the daily updated electricity mix or CO₂ trends for a climate-neutral Germany.',
      },
      reenact: {
        description: "A scenario planning tool for citizens shaping their region's energy future.",
      },
      localiser: {
        description: 'A digital platform for EV charging and hydrogen infrastructure planning.',
      },
    },
  },

  // ─── Homepage — Contact section ────────────────────────────────────────────
  contactSection: {
    heading: "Let's connect",
    body: "I'm always excited to explore new opportunities and collaborations, so if you have a project in mind or just want to brainstorm possibilities, don't hesitate to reach out!",
    cta: 'Contact me',
  },

  // ─── About page ────────────────────────────────────────────────────────────
  about: {
    heading: 'About',
    paragraphs: [
      "I'm a UX/UI designer specialising in the energy transition — the tools, web interfaces, and data visualisations that help researchers, planners, policymakers, and non-experts make sense of complex systems.",
      "For the past eight years I've worked with research institutes, think tanks, and startups, designing web applications and interactive tools for problems like regional energy planning, charging infrastructure, sustainable transportation, and off-grid microgrid solutions. I handle both the design and the visual frontend implementation, which means fewer handoff gaps and more considered detail in the final product.",
      "My background spans applied arts training, a science degree, and eight years of hands-on work in the energy sector, reinforced more recently by TU Delft's certificate programme in Intelligent and Integrated Energy Systems.",
      "I'm based in Lisbon, work remotely across Europe, and have a high interest in how complex systems, such as energy or cities, organise themselves.",
      { pre: "If that sounds like a fit, ", linkText: "get in touch", href: "https://www.linkedin.com/in/blancien/", post: "." },
    ],
  },

  // ─── Contact page ──────────────────────────────────────────────────────────
  contactPage: {
    heading: 'Contact',
    intro: "I'm always happy to connect on new projects in the energy space.",
  },

  // ─── Imprint page ──────────────────────────────────────────────────────────
  imprint: {
    heading: 'Imprint',
    infoHeading: 'Information',
    copyright: 'All rights reserved.',
  },

  // ─── Privacy page ──────────────────────────────────────────────────────────
  // Paragraphs that contain a hyperlink use { pre, linkText, post } so the
  // component can render the <a> tag in the right place. linkText is the
  // visible anchor text. URLs never change between languages.
  privacy: {
    heading: 'Data Privacy',
    sections: [
      {
        heading: '1. Who is responsible for this website',
        paragraphs: [
          'The data controller for this website is:',
        ],
        // The address block (name, address, email) is not translated
      },
      {
        heading: '2. Hosting',
        paragraphs: [
          'This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. When you visit this website, Vercel automatically records technical server log data in its infrastructure. This includes:',
          'This data is processed on the basis of Art. 6(1)(f) GDPR — the legitimate interest in providing a technically functional and secure website. This data is not merged with any other data sources and is not used to identify individual visitors.',
          {
            pre: 'Data processing by Vercel is governed by a Data Processing Addendum in accordance with Art. 28 GDPR. Vercel is certified under the EU–US Data Privacy Framework, which provides a valid legal basis for data transfers to the United States. For more information, see ',
            linkText: "Vercel's Privacy Policy",
            post: '.',
          },
        ],
        listItems: [
          'IP address',
          'Browser type and version',
          'Operating system',
          'Referring URL',
          'Date and time of the request',
        ],
      },
      {
        heading: '3. Analytics',
        paragraphs: [
          'This website uses Vercel Web Analytics to understand how visitors use the site. This tool does not use cookies, does not collect or store IP addresses, and does not track individual users across sessions or websites. All data is anonymised and used only in aggregate form (page views, referrers, device type, approximate geolocation at country level).',
          {
            pre: 'Because no personal data is collected or stored, this analytics tool does not require your consent. For more information, see ',
            linkText: 'Vercel Analytics Privacy & Compliance',
            post: '.',
          },
        ],
      },
      {
        heading: '4. Contact by email',
        paragraphs: [
          'If you contact me by email, I will store and process your name, email address, and the content of your message for the purpose of responding to your enquiry. This is done on the basis of Art. 6(1)(f) GDPR (legitimate interest in handling communications) or Art. 6(1)(b) GDPR where the enquiry relates to a potential contract.',
          'This data is not shared with third parties and is deleted once it is no longer needed, unless statutory retention obligations require otherwise.',
        ],
      },
      {
        heading: '5. Your rights',
        paragraphs: [
          'Under GDPR, you have the right to:',
          'To exercise any of these rights, contact me at bryanlancien.ui@gmail.com.',
        ],
        listItems: [
          'Request access to any personal data held about you (Art. 15)',
          'Request correction of inaccurate data (Art. 16)',
          'Request deletion of your data (Art. 17)',
          'Request restriction of processing (Art. 18)',
          'Object to processing based on legitimate interests (Art. 21)',
          'Request data portability where applicable (Art. 20)',
        ],
      },
      {
        heading: '6. Right to lodge a complaint',
        paragraphs: [
          {
            pre: 'You have the right to lodge a complaint with a data protection supervisory authority, in particular in the EU member state where you reside, work, or where an alleged infringement occurred. In Portugal, the competent authority is the ',
            linkText: 'Comissão Nacional de Proteção de Dados (CNPD)',
            post: '.',
          },
        ],
      },
    ],
  },

  // ─── Project pages ─────────────────────────────────────────────────────────
  // header.title      — displayed as the large <h1> on each project page
  // header.funding    — optional; omit the key or set to '' to hide it
  // header.skills     — displayed as chips; keep as an array of strings
  // sections          — ordered array matching the JSX top-to-bottom
  //   title           — section heading
  //   body            — ordered array of paragraphs (strings)
  //   images          — ordered array of images within this section
  //     alt           — screen-reader alt text
  //     caption       — visible caption below the image
  projects: {
    empowerplan: {
      header: {
        title: 'Making the energy transition understandable for the people who have to plan it',
        funding: 'Funded by BMWK (7th Energy Research Program)',
        tagline: [
          'Lead designer for a regional energy planning tool, built with Reiner Lemoine Institut, Öko-Institut and IZT',
          'Tested and improved through several workshop cycles with real stakeholders in the Oderland-Spree region',
          'By the final iteration, participants used the tool on their own to discuss real planning trade-offs',
        ],
        skills: ['UX/UI design', 'Data visualisation & map design', 'UI development'],
      },
      sections: [
        {
          title: 'The missing tool for non-expert decision-makers',
          body: [
            'Regional planners, municipal administrators and county officials across Germany have to make land-use decisions that will shape their regions for decades. The problem: as of 2022, there was no tool that was easy enough to use without a data scientist in the room, and rich enough in data to be worth using at all. Existing tools were either too simple or too expert.',
            'EmPowerPlan filled that gap. As lead designer, my task was to make a complex energy simulation tool usable by people who plan regions, not energy systems.',
          ],
          images: [
            {
              alt: 'The Challenges step, the entry point to EmPowerPlan',
              caption: 'Users start with the Challenges step, which sets the context before they explore scenarios',
            },
          ],
        },
        {
          title: "The most important decision: from 'here is data' to 'here is where you stand'",
          body: [
            'The scenario comparison view went through the biggest evolution of the project.',
            "Early versions showed the scenario data clearly: wind capacity, PV targets, land requirements. The numbers were correct and readable, and still, users could not evaluate them. Is 500 MW of wind a lot for this region? Nobody can answer that from the number alone.",
            'The missing piece was a reference point. The solution was to bring the state and national goals directly into the same view. A planner looking at Oderland-Spree\'s numbers could now see immediately how the region compares to Brandenburg and to Germany\'s national targets.',
            'That one change turned the screen from an information display into a decision support tool. It is also the clearest lesson I took from the project: data becomes useful for decisions only when the reader knows where they stand.',
            'Around this, a wizard-style flow (Herausforderungen → Region heute → Szenarien → Einstellungen → Ergebnisse) kept the experience navigable as the tool grew more complex with every project iteration. Predefined policy scenarios, like the Energiestrategie Brandenburg 2030, could be loaded as a starting point with one click — a simple answer for users who did not know where to begin.',
          ],
          images: [
            {
              alt: 'Scenario comparison view with state and national targets as reference',
              caption: 'Adding state and national targets directly into the comparison view turned the screen from an information display into a decision support tool',
            },
            {
              alt: 'Wizard-style navigation flow through the five steps',
              caption: 'The wizard flow (Herausforderungen → Region heute → Szenarien → Einstellungen → Ergebnisse) kept the tool navigable as complexity grew',
            },
          ],
        },
        {
          title: 'The design had to carry real complexity',
          body: [
            'Behind the interface, the model coupled regional energy scenarios with national climate targets, which is quite a demanding data environment.',
            'The map alone had 26 layers that needed to stay legible together. I solved this with category-based color grouping: one color family per category, sequential palettes for the differences inside each group. ECharts handled the charts, Bootstrap kept the frontend simple to maintain, and accessibility, i.e., keyboard navigation, ARIA structure, and contrast, was built in from the start, not added later.',
          ],
          images: [
            {
              alt: 'Color palettes for the 26 map layers',
              caption: 'Category-based color grouping with sequential palettes for each group — designed to stay legible when multiple layers are active at once',
            },
            {
              alt: 'Map view with multiple active layers',
              caption: 'Map view with data layers for land use, protected areas, and renewable energy potential',
            },
          ],
        },
        {
          title: 'Workshops, feedback, code, repeat',
          body: [
            'The tool was tested through several workshop cycles with actual stakeholders in Oderland-Spree. The research team gathered feedback in each session. I turned that feedback into design changes and implemented them directly in the frontend code, ready to be tested in the next cycle.',
            'Because I handled both design and implementation, nothing was lost between the workshop and the interface, and this enabled faster iteration.',
            'By the final iteration, participants were navigating the tool and using the scenario comparisons to discuss real planning trade-offs — which was the point.',
            { pre: 'The tool can be seen here: ', linkText: 'epp.rl-institut.de', href: 'https://epp.rl-institut.de/de/', post: '' },
          ],
          images: [
            {
              alt: 'Workshop iteration cycle',
              caption: 'Workshop feedback fed directly into design changes, which were implemented in the frontend and tested in the next session',
            },
            {
              alt: 'Results view with charts and map',
              caption: 'Results view showing scenario outcomes across charts and the map',
            },
          ],
        },
        {
          title: 'What I took from it',
          body: [
            'Two things. First: a number without a reference point is not information, it is decoration. Most of the design value in this project came from adding context, not adding data.',
            'Second: in research projects, the loop between feedback and working software is usually slow. Covering design and code in one person made the loop faster. I think that the speed of that loop, more than any single design decision, is what made the workshops productive.',
          ],
          images: [],
        },
      ],
    },

    wwf: {
      header: {
        title: 'Data visualization dashboard for a climate-neutral Germany',
        funding: 'WWF Germany',
        tagline: [
          "11 interactive visualizations for WWF Germany's website, from the daily electricity mix to long-term CO₂ trends",
          'Designed for a general audience with no energy background, embedded as responsive iframes across the WWF site',
        ],
        skills: ['UI design', 'Data visualisation design', 'UI development'],
      },
      sections: [
        {
          title: 'Bringing energy data to a general audience',
          body: [
            "WWF Germany wanted to show energy data to the everyday visitors of their website — people with no background in energy systems. The challenge was making that data feel meaningful to them, not just correct. The brief asked for a set of dynamic, interactive visualizations that could be embedded as an iframe while keeping WWF's visual identity.",
          ],
          images: [],
        },
        {
          title: 'The starting point: sketches, and one question',
          body: [
            'The project began with rough sketches from the partner team, including chart concepts that captured what they wanted to communicate. My first task was to turn those sketches into workable mockups. But before that, I had to ask a more basic question for every chart: what is this visualization actually trying to say? That question drove every design decision that followed.',
            'Responsiveness was part of the thinking from day one. The visualizations would be embedded on different pages and screen sizes, so mobile layouts had to be designed early, not changed quickly at the end. This shaped the grid layout and how much information each chart could carry on a small screen.',
          ],
          images: [
            {
              alt: 'Different mobile screen sizes for the same visualization',
              caption: 'Mobile layouts designed from the start, not retrofitted at the end',
            },
            {
              alt: 'Desktop view of the visualization layout on the WWF website',
              caption: 'Desktop view of the visualization layout on the WWF website',
            },
          ],
        },
        {
          title: 'The most important decision: simpler charts, not complex ones',
          body: [
            "The early sketches had too much information competing for attention. Several concepts used pie charts, which work poorly when comparing more than two values. Position on a common scale is the easiest thing for a human eye to compare; angles and circle sizes are much harder. So I moved the concepts to column and line charts, which readers can decode without effort.",
            'The goal was always the same: remove anything that makes the reader work harder than necessary. Icons, consistent brand colors and a clear typographic hierarchy were added not as decoration, but as navigation — ways for a visitor to orient themselves quickly inside each chart.',
          ],
          images: [
            {
              alt: 'Early sketches simplified into column and line charts',
              caption: 'Moving from overly complex concepts to column and line charts that readers can decode without effort',
            },
          ],
        },
        {
          title: 'Interactivity as storytelling',
          body: [
            "The most effective single feature was a time slider that lets users scrub through historical data at their own pace. Instead of a static snapshot, each chart became a small story: you can watch Germany's electricity mix shift year by year, or follow the relationship between CO₂ concentration and temperature across decades. Thanks to this simple feature, the data tells its own story.",
          ],
          images: [
            {
              alt: 'Time slider allowing users to scrub through historical data',
              caption: 'The time slider turns each chart into a small story — the data tells itself once the interface gets out of the way',
            },
          ],
        },
        {
          title: 'Results',
          body: [
            'The final dashboard comprised 11 dynamic visualizations, covering topics from transport emissions to the growth of renewables to daily electricity production. Each one is responsive, so WWF can place them anywhere on the site without layout problems.',
            { pre: 'You can find the dashboard here: ', linkText: 'WWF Energiewende Dashboard', href: 'https://www.wwf.de/themen-projekte/klimaschutz/wwf-energiewende-dashboard', post: '' },
          ],
          images: [
            {
              alt: 'Final dashboard with 11 dynamic visualizations',
              caption: 'The final set of 11 responsive visualizations, embeddable anywhere on the WWF Germany site',
            },
          ],
        },
        {
          title: 'What I took from it',
          body: [
            'Data visualization design always starts with the same question: what should the reader understand? Chart type, color and interaction all follow from the answer. Simple charts usually win, because the reader can focus on the data instead of decoding the format. The harder skill is knowing when a custom chart adds real value and when it only adds noise.',
          ],
          images: [],
        },
      ],
    },

    reenact: {
      header: {
        title: "A scenario planning tool for citizens shaping their region's energy future",
        funding: 'Funded by Bundesministerium für Wirtschaft und Energie and PtJ',
        tagline: [
          'A tool that lets citizens and local stakeholders explore energy scenarios for their own region: wind, PV, biomass, hydrogen, storage, land use, costs',
          'Designed for a partly skeptical audience: every design choice was also a trust decision',
          'Used in a "Planungszelle" — a structured citizen deliberation — in the Peenetal region (Germany)',
        ],
        skills: ['UX/UI design', 'UI development'],
      },
      sections: [
        {
          title: 'A complex topic and a skeptical audience',
          body: [
            'The energy transition in rural eastern Germany is not just a technical question. It is a political one. Renewable energy projects can meet real skepticism from some residents who distrust political decisions and feel that changes happen around them, not with them.',
            "ReEnAct was a direct answer to that tension. The goal: give citizens and local stakeholders an active role in exploring their region's energy future. My role was to design and build the tool that made this possible.",
            'The tool had to work for citizens with no energy background, for people skeptical of the whole project, and for workshop facilitators switching views quickly on an iPad. And the system underneath was genuinely complex: wind, several PV technologies, biomass, hydrogen, storage, land use, costs, CO₂ targets for 2030 and 2040.',
            "One thing was clear from the start: no interface can create trust on its own. That is why the project included social researchers and facilitators who were close to the communities. The tool's job was narrower: present real data honestly, and let people explore without feeling pushed.",
          ],
          images: [],
        },
        {
          title: 'Every design choice is also a trust decision',
          body: [
            'That sentence became the test for every significant decision in the project.',
            "Show the landscape, not just the numbers. Some residents fear that renewable installations will dominate their landscape. So the tool includes a map that shows the actual footprint of each scenario, layered against settlement areas and moorland sites. Seeing the real proportions answers a fear that numbers alone cannot reach.",
            'Boring charts, on purpose. Bar charts are used throughout the tool. They can look plain, but they are familiar, easy to read, and perceptually accurate. For an audience that might suspect manipulation, a chart everyone can verify at a glance builds more trust than anything clever but complex.',
            'Context in every interaction. Sliders show markers for current values and official targets. Charts include goal lines. Moving a slider updates the results immediately, so the link between a decision and its consequence stays visible. Scenarios and technologies can be compared side by side, because isolated numbers are hard to judge.',
            'Costs as a first-class metric. For many citizens, affordability matters more than carbon neutrality. Leaving costs out would have turned the tool into advocacy. Exactly what a skeptical audience expects and rejects.',
            'Progressive disclosure. The most important information comes first, in the simplest form. Detailed charts exist for more curious users, but stay hidden by default.',
            'The hardest single problem was the scenario comparison view. I landed on line charts with goal lines, clickable scenario names to highlight one at a time, and a cap on how many scenarios can be compared at once. One idea was rejected on purpose: showing a medal next to the best-performing scenario. It would have been helpful but it would have felt like advocacy. It stayed out.',
            "To be honest about the tool's position: the data is real and unbiased, but the design is not entirely neutral. By making climate-neutral scenarios easy to build, and by showing that reaching CO₂ targets often has no negative side effects for the region, the tool quietly demonstrates that a good outcome is possible. That only works if people trust it enough to engage. For those who don't, the researchers and facilitators in the room were the more important factor.",
            'I built the initial prototype myself in Next.js with Tailwind UI components before the project moved to its final implementation.',
          ],
          images: [
            {
              alt: 'Map view showing the spatial footprint of energy scenarios',
              caption: 'The map shows the actual footprint of each scenario layered against settlement areas and moorland sites — answering a spatial fear that numbers alone cannot reach',
            },
            {
              alt: 'Bar charts used throughout the tool for scenario comparison',
              caption: 'Bar charts throughout the tool — familiar and perceptually accurate, designed to be verifiable at a glance',
            },
            {
              alt: 'Scenario creation view with sliders and goal markers',
              caption: 'Sliders with current values and target markers, charts with goal lines — the link between a decision and its consequence stays visible',
            },
            {
              alt: 'Scenario comparison view including costs',
              caption: 'Costs treated as a first-class metric alongside energy and emissions',
            },
            {
              alt: 'Scenario comparison with line charts and goal lines',
              caption: 'Line charts with goal lines and clickable scenario names to highlight one at a time',
            },
            {
              alt: 'Scenario comparison view with a cap on simultaneous comparisons',
              caption: 'A cap on simultaneous comparisons keeps the view readable',
            },
          ],
        },
        {
          title: 'When the brief changed',
          body: [
            "Late in the project, the partners revised the workshop format. Facilitators needed everything visible at once, because during a live session, there is no time to navigate between pages. So the step-by-step flow became a tab-based layout: dashboard, scenario builder and comparison view, all reachable without leaving the screen.",
            'It was a real trade-off. The original flow was better for independent discovery; the new layout was better for the workshop room. The workshop room won, because that is where the tool would actually be used — by real people, under time pressure.',
            { pre: 'The tool can be seen here: ', linkText: 'reenact.apps2.rl-institut.de', href: 'https://reenact.apps2.rl-institut.de/', post: '' },
          ],
          images: [
            {
              alt: 'Second version of the tool with tab-based layout',
              caption: 'The tab-based layout: dashboard, scenario builder and comparison view all reachable without leaving the screen',
            },
            {
              alt: 'Scenario builder in the second version',
              caption: 'Scenario builder in the revised layout',
            },
            {
              alt: 'Comparison view in the second version',
              caption: 'With sliders and charts visible at the same time, the link between decision and consequence stays immediate',
            },
          ],
        },
        {
          title: 'How it landed',
          body: [
            'The tool was successfully used in a "Planungszelle" — a structured citizen deliberation process — in the Peenetal region.',
            'A note on method: I had no direct contact with citizens during the project. Design decisions drew on domain knowledge, design judgment and close collaboration with the project team. This is a common constraint in publicly funded research projects, and one reason the social researchers in the room mattered.',
          ],
          images: [],
        },
        {
          title: 'What I took away',
          body: [
            'Designing for a skeptical public audience means every choice is also a trust decision: what to show first, how to label a chart, whether to include costs.',
            'And a tool is used by a real person, in a real room, under time pressure. The late pivot to the one-screen layout was a reminder that this context has to be part of the design from the start and not discovered at the end.',
          ],
          images: [],
        },
      ],
    },

    localiser: {
      header: {
        title: 'Seven years as design lead for an EV charging infrastructure platform',
        funding: '',
        tagline: [
          'Design lead since 2018, working directly with the leadership team',
          'The platform is used by charge point operators, municipalities and investors in Germany and other European countries',
          'Scope grew from UI work to the full product surface: app, website, icon systems, French localization',
        ],
        skills: ['Product design', 'UX/UI', 'Map design', 'UI development', 'Visual design'],
      },
      sections: [
        {
          title: 'What Localiser does, and my role in it',
          body: [
            'Localiser is a web platform for planning EV charging infrastructure. Its users need to answer one question: is this a good place for a charging station? The platform combines geographical data, demand indicators and planning tools to help them decide. In recent years it also expanded into a marketplace for hydrogen infrastructure.',
            'The main customers are charge point operators, municipalities, and investors, in Germany and other European countries.',
            'I have been the design lead since 2018. I work with full autonomy across the web app, the public website, and the visual material around the product. Decisions go directly between me and the leadership team.',
          ],
          images: [],
        },
        {
          title: 'The most important decision: the map must stay visible',
          body: [
            'The core feature of Localiser is the charging point view. Users place a potential charging point on the map, add information about it, and evaluate if the location is viable.',
            'In the early years, this happened in a modal window. It kept the interface clean, and at that time it was enough. But the feature kept growing: location data, technical parameters, files, accessibility information, and a full viability assessment. The modal was running out of space.',
            "We could have simply made the modal bigger. But the real problem was not space. The modal covered the map — and the map is the reason the tool exists. A charging point only makes sense in its surroundings: what is nearby, where the demand comes from, what the competition looks like. Hiding the map while the user reviews a location works directly against how they think.",
            'So the modal became a persistent side panel. The user can now read every detail about a site and see its context at the same time. It is a simple pattern, but choosing it meant understanding what the product is really for, and not just fixing a layout problem.',
          ],
          images: [
            {
              alt: 'From a modal to a persistent side panel',
              caption: 'The charging point view moved from a modal window to a persistent side panel, keeping the map always visible alongside the location details.',
            },
          ],
        },
        {
          title: 'Making the viability assessment scannable',
          body: [
            'Inside the charging point view, the viability assessment had its own problem. The original design was a table for key values and a long flat list for everything else. All information had the same visual weight. A user who wanted a quick answer had to read everything.',
            'I grouped the indicators into categorized boxes with clear headings, and kept the table for the key values. Now the section can be scanned instead of read. The structure follows how users think about a site, not how the data arrives from the backend.',
          ],
          images: [
            {
              alt: 'The viability assessment redesigned as categorized boxes',
              caption: 'Grouping indicators into categorized boxes made the section scannable. The table stayed for the key values; the long flat list became structured groups.',
            },
          ],
        },
        {
          title: '40+ map layers, two domains, one visual system',
          body: [
            'The Digitalatlas, a central feature of the app, brings together more than 40 data layers: existing charging infrastructure, grid capacity, demand potential, points of interest, land use, and more.',
            'Every layer needs to be recognizable at a glance and still fit with all the others. I designed the icon sets and the color logic for both domains. This work sits between data visualization and visual identity: the icons are not decoration, they are how users read the map.',
          ],
          images: [
            {
              alt: 'Different map layers in the Digitalatlas',
              caption: 'Different map layers for EV charging infrastructure planning.',
            },
            {
              alt: 'Overview of the Digitalatlas',
              caption: 'The Digitalatlas brings together more than 40 data layers, divided into categories.',
            },
            {
              alt: 'Hydrogen-specific icons for the H2 Marketplace',
              caption: 'Icon sets for both domains. The icons are not decoration — they are how users read and navigate the map.',
            },
          ],
        },
        {
          title: 'Beyond the app',
          body: [
            'Seven years on one product means the scope grows. I designed and implemented the public website, which is now being migrated to an open-source CMS to make the multilingual setup easier to maintain. I handled the French localization of the platform, and I produce the graphic material around the product — presentations, icons, visual assets.',
            'For a small company, this is the practical value of a long-term design partner: one person who knows the product, the customers and the visual language, available across the whole surface.',
          ],
          images: [],
        },
        {
          title: 'What seven years on one product taught me',
          body: [
            'Most design portfolios show projects that lasted a few months. Working on the same product for seven years is a different discipline. Every new feature has to respect decisions made years earlier. Consistency becomes a daily job, not a style guide.',
            'It also changes the relationship. After seven years, the conversations are less about screens and more about the product: what to build, for whom, and how to explain it. That is the part of the work I want to grow.',
          ],
          images: [],
        },
      ],
    },
  },
};
