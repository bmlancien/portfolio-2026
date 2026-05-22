export const en = {
  // ─── Navigation ────────────────────────────────────────────────────────────
  nav: {
    projects: 'Projekte',
    about: 'Über mich',
    contact: 'Kontakt',
  },

  // ─── Footer ────────────────────────────────────────────────────────────────
  footer: {
    projects: 'Projekte',
    about: 'Über mich',
    contact: 'Kontakt',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    copyright: 'Alle Rechte vorbehalten',
  },

  // ─── Homepage — Hero ───────────────────────────────────────────────────────
  hero: {
    heading: 'Datenintensive Interfaces für die Klimatechnologie',
    subheading:
      '7+ Jahre Erfahrung in der Gestaltung und Entwicklung von Dashboards, Szenario-Tools und kartenbasierten Interfaces für den Bereich erneuerbare Energien. Ich helfe interdisziplinären Teams dabei, komplexe Energiedaten durch klares, zugängliches Design verständlich zu machen.',
  },

  // ─── Homepage — Projects section ───────────────────────────────────────────
  projectsSection: {
    heading: 'Ausgewählte Projekte',
    subheading: 'Datengetriebene Interfaces und Tools für den Bereich erneuerbare Energien',
    cards: {
      empowerplan: {
        description:
          'Web-App zur Visualisierung des regionalen Energiesystems einer deutschen Region mit dem Ziel, einen transdisziplinären Dialog zwischen Entscheidungsträgern anzustoßen.',
      },
      wwf: {
        description:
          'Dashboard mit Datenvisualisierungen wie dem täglich aktualisierten Strommix oder CO₂-Trends für ein klimaneutrales Deutschland.',
      },
      reenact: {
        description: 'Ein Szenario-Planungstool für Bürgerinnen und Bürger, die die Energiezukunft ihrer Region mitgestalten.',
      },
      localiser: {
        description: 'Eine digitale Plattform für die Planung von Ladeinfrastruktur und Wasserstoffinfrastruktur.',
      },
    },
  },

  // ─── Homepage — Contact section ────────────────────────────────────────────
  contactSection: {
    heading: "Lass uns über Ihr Projekt sprechen",
    body: "Sie haben ein Projekt im Kopf oder möchten Möglichkeiten ausloten? Melden Sie sich gerne.",
    cta: "Kontakt aufnehmen",
  },

  // ─── About page ────────────────────────────────────────────────────────────
  about: {
    heading: 'Über mich',
    paragraphs: [
      'Ich bin UX/UI-Designer mit Spezialisierung auf die Energiewende – auf die Tools, Web-Interfaces und Datenvisualisierungen, die Forschenden, Planern, Entscheidungsträgern und der breiten Öffentlichkeit helfen, komplexe Systeme zu verstehen.',
      'In den vergangenen acht Jahren habe ich mit Forschungsinstituten, Think Tanks und Startups zusammengearbeitet und Web-Applikationen sowie interaktive Tools für Themen wie regionale Energieplanung, Ladeinfrastruktur, nachhaltige Mobilität und Offgrid Systeme entwickelt. Da ich sowohl das Design als auch die visuelle Frontend-Umsetzung übernehme, entfallen Übergabeverluste, und das Endprodukt gewinnt an Sorgfalt und Tiefe.',
      'Mein Hintergrund verbindet eine kunsthandwerkliche Ausbildung, ein naturwissenschaftliches Studium und acht Jahre praktische Erfahrung im Energiesektor, ergänzt durch das Zertifikatsprogramm „Intelligent and Integrated Energy Systems" der TU Delft.',
      'Ich lebe in Lissabon, arbeite remote für Kunden in ganz Europa und beschäftige mich intensiv damit, wie sich komplexe Systeme, etwa Energie oder Städte, selbst organisieren.',
      { pre: '', linkText: 'Sprechen Sie mich gerne an', href: 'https://www.linkedin.com/in/blancien/', post: '. Ich freue mich über neue Projekte im Energiebereich.' },
    ],
  },

  // ─── Contact page ──────────────────────────────────────────────────────────
  contactPage: {
    heading: 'Kontakt',
    intro: 'Sie können mich per E-Mail erreichen:',
  },

  // ─── Imprint page ──────────────────────────────────────────────────────────
  imprint: {
    heading: 'Impressum',
    infoHeading: 'Informationen',
    copyright: 'Alle Rechte vorbehalten.',
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
        title: 'Die Energiewende verständlich für alle machen, die sie planen müssen',
        funding: 'Gefördert durch das BMWK (7. Energieforschungsprogramm)',
        skills: ['UX/UI-Design', 'Datenvisualisierung & Kartendesign', 'UI-Entwicklung'],
      },
      sections: [
        {
          title: 'Das fehlende Tool für Entscheidungsträger ohne Fachkenntnisse',
          body: [
            'Regionalplaner, Gemeindeverwaltungen und Kreisbehörden in ganz Deutschland sollen Flächennutzungsentscheidungen für die Zukunft treffen. Das Problem: Es gab bis 2022 kein Tool, das ohne Data-Scientist im Raum bedienbar und gleichzeitig reich an relevanten Daten und Informationen war.',
            'EmPowerPlan schloss diese Lücke. Als Lead-Designer arbeitete ich mit dem Reiner Lemoine Institut sowie Partnern wie dem Öko-Institut und IZT zusammen, getestet mit Stakeholdern in der Region Oderland-Spree in Brandenburg. Meine Aufgabe: ein komplexes Simulationstool für nicht-technische Entscheidungsträger nutzbar zu machen.',
          ],
          images: [
            {
              alt: 'Herausforderungen als erste Seite im EmPowerPlan-Prototyp',
              caption: 'Nutzer starten mit dem Schritt „Herausforderungen"',
            },
          ],
        },
        {
          title: 'Von „hier sind Daten" zu „hier stehen Sie"',
          body: [
            'Die Szenariovergleichsansicht durchlief im Projektverlauf eine grundlegende Weiterentwicklung. Frühe Versionen zeigten Szenariodaten klar an, etwa Windkapazitäten, PV-Ziele und Flächenbedarf, aber ohne Referenzpunkt konnten Nutzer das Gezeigte nicht einordnen. Die Lösung: Landes- und Bundesziele direkt in dieselbe Ansicht zu integrieren, sodass ein Planer die Zahlen von Oderland-Spree unmittelbar mit Brandenburg und den nationalen Zielen vergleichen konnte. Damit wurde der Szenarioscreen vom Informations-UI zum Entscheidungsunterstützungstool.',
            'Ein Wizard-Flow (Herausforderungen → Region heute → Szenarien → Einstellungen → Ergebnisse) hielt die Gesamterfahrung auch dann navigierbar, als die Anforderungen über die Projektiterationen hinweg komplexer wurden. Vordefinierte Politikszenarien wie die Energiestrategie Brandenburg 2030 ließen sich per Klick als Ausgangspunkt auswählen – eine Orientierungshilfe für Nutzer, die nicht wussten, wo sie anfangen sollten.',
          ],
          images: [
            {
              alt: 'Nach den ersten beiden Schritten – Herausforderungen und regionale Daten – können Nutzer im dritten Schritt Szenarien mit Landes- und Bundeszielen vergleichen',
              caption: 'Nach den ersten beiden Schritten – Herausforderungen und regionale Daten – können Nutzer im dritten Schritt Szenarien mit Landes- und Bundeszielen vergleichen',
            },
            {
              alt: 'Layout-Übersicht: obere Navigationsleiste mit seitlichen Panels für Parameter und Inhalte, neben Karte und Diagrammen',
              caption: 'Layout-Übersicht: obere Navigationsleiste mit seitlichen Panels für Parameter und Inhalte, neben Karte und Diagrammen',
            },
          ],
        },
        {
          title: 'Das Design musste echte Komplexität tragen',
          body: [
            'Das zugrunde liegende Modell verknüpfte regionale Energieszenarien mit nationalen Klimazielen, was eine anspruchsvolle Datenumgebung bedeutete. 26 Kartenebenen mussten lesbar koexistieren: ich löste das durch kategoriebasierte Farbgruppierungen und sequenzielle Paletten zur Differenzierung innerhalb jeder Gruppe. ECharts übernahm die Diagramme, Bootstrap hielt das Frontend einfach und wartbar, und Barrierefreiheit (Tastaturnavigation, ARIA-Strukturen, Kontrastkonformität) war von Anfang an eingebaut.',
          ],
          images: [
            {
              alt: 'Im EmPowerPlan-Prototyp verwendete Farbpaletten',
              caption: 'Farbpaletten für eine hohe Anzahl an Ebenen, entwickelt für den gemeinsamen Einsatz auf derselben Karte',
            },
            {
              alt: 'Kartenansicht',
              caption: 'Kartenansicht mit verschiedenen Informationsebenen, darunter Flächennutzung, Schutzgebiete und Potenziale erneuerbarer Energien',
            },
          ],
        },
        {
          title: 'Mehrere Workshop-Zyklen in einer Region, messbare Veränderung als Ergebnis',
          body: [
            'Das Tool wurde in Workshops mit echten Stakeholdern in Oderland-Spree getestet und iteriert. Ich arbeitete mit dem Feedback, das das Forschungsteam in jeder Sitzung sammelte, überarbeitete Prototypen und setzte die Änderungen direkt im Frontend-Code um – bereit für den nächsten Workshop-Zyklus. Da ich Design und Implementierung in einer Hand hielt, flossen Erkenntnisse aus den Workshops direkt ins Interface.',
            'In der letzten Iteration navigierten die Teilnehmenden das Tool selbstständig und nutzten Szenariovergleiche, um reale Planungsabwägungen zu diskutieren, was genau das Ziel war.',
          ],
          images: [
            {
              alt: 'Iterationsprozess im EmPowerPlan-Prototyp',
              caption: 'Iterationsprozess im EmPowerPlan-Prototyp: Workshop-Feedback führte zu Designänderungen, die direkt im Frontend-Code umgesetzt und im nächsten Workshop-Zyklus erneut getestet wurden',
            },
            {
              alt: 'Ergebnisansicht',
              caption: 'Ergebnisansicht mit verschiedenen Informationsebenen, darunter Diagramme und eine Kartenansicht',
            },
          ],
        },
      ],
    },

    wwf: {
      header: {
        title: 'Datenvisualisierungs-Dashboard für ein klimaneutrales Deutschland',
        funding: 'WWF Deutschland',
        skills: ['UI-Design', 'Datenvisualisierungsdesign', 'UI-Entwicklung'],
      },
      sections: [
        {
          title: 'Energiedaten zum Leben erwecken',
          body: [
            'WWF Deutschland benötigte eine Möglichkeit, Energiedaten für die alltäglichen Besucher ihrer Website aufzubereiten. Die Herausforderung: diese Daten für Menschen ohne Hintergrundwissen in Energiesystemen bedeutsam und verständlich zu machen. Der Auftrag umfasste einen Satz dynamischer, interaktiver Visualisierungen, die als iframe eingebettet werden konnten, im Einklang mit der visuellen Identität des WWF.',
          ],
          images: [],
        },
        {
          title: 'Der Ausgangspunkt',
          body: [
            'Das Projekt begann mit groben Skizzen des Partnerteams: verschiedene Diagrammkonzepten, die festhielten, was kommuniziert werden sollte. Meine erste Aufgabe war es, diese Skizzen in umsetzbare Mockups zu überführen und dabei die grundlegendere Frage zu stellen: Was will jede Visualisierung eigentlich aussagen? Diese Frage trieb jede folgende Designentscheidung an.',
            'Responsivität war von Anfang an Teil des Gesprächs. Da die Visualisierungen auf verschiedenen Seiten und Bildschirmgrößen eingebettet werden sollten, musste ich mobile Layouts früh mitdenken, bevor die Designs festlagen, anstatt sie nachträglich anzupassen. Das prägte meinen Umgang mit der Layout und der Informationsdichte der Diagramme auf kleineren Bildschirmen.',
          ],
          images: [
            {
              alt: 'Verschiedene mobile Bildschirmgrößen für dieselbe Visualisierung',
              caption: 'Verschiedene mobile Bildschirmgrößen für dieselbe Visualisierung, um zu verstehen, was der Nutzer auf unterschiedlichen Geräten sieht',
            },
            {
              alt: 'Desktop-Ansicht des Visualisierungs-Layouts',
              caption: 'Desktop-Ansicht des Visualisierungs-Layouts, um zu verstehen, was der Nutzer auf der WWF-Website sieht',
            },
          ],
        },
        {
          title: 'Vereinfachen ohne Bedeutung zu verlieren',
          body: [
            'Frühe Skizzen enthielten zu viele Informationen, die innerhalb eines einzelnen Diagramms um Aufmerksamkeit konkurrierten. Einige Konzepte verwendeten Kreisdiagramme, die beim Vergleich von mehr als zwei Werten schlecht funktionieren. Position auf einer gemeinsamen Skala lässt sich generell am leichtesten vergleichen; Kreise und Winkel sind weniger präzise. Ich entschied mich daher für Säulen- und Liniendiagramme, die einfacher zu lesen sind.',
            'Das Ziel war, alles zu entfernen, was den Leser mehr als nötig belastet. Visuelle Hinweise wie Icons, konsistente Markenfarben und eine klare typografische Hierarchie wurden nicht als Dekoration hinzugefügt, sondern als Navigation, damit die Nutzer sich innerhalb jeder Visualisierung schnell orientieren können.',
          ],
          images: [
            {
              alt: 'Visualisierungsskizzen',
              caption: 'Erste Versuche, die Informationsmenge in jeder Visualisierung zu reduzieren',
            },
          ],
        },
        {
          title: 'Interaktivität als Erzählung',
          body: [
            'Eine der wirkungsvolleren Designentscheidungen war der Einsatz eines Zeitschiebers, mit dem Nutzer historische Daten in eigenem Tempo durchblättern konnten. Anstatt einen statischen Schnappschuss zu zeigen, verwandelte er jedes Diagramm in eine kleine Erzählung: Man konnte beobachten, wie sich der deutsche Strommix Jahr für Jahr verschob, oder den Zusammenhang zwischen CO₂-Konzentration und Temperatur über Jahrzehnte verfolgen. Die Daten erzählten ihre eigene Geschichte, sobald das Interface aus dem Weg trat.',
          ],
          images: [
            {
              alt: 'WWF-Visualisierungsmockups',
              caption: 'Der Nutzer kann mit einem Zeitschieber durch die Daten navigieren, was jedes Diagramm in eine kleine zeitliche Erzählung verwandelt',
            },
          ],
        },
        {
          title: 'Ergebnisse',
          body: [
            'Das fertige Dashboard umfasste 11 dynamische Visualisierungen zu Themen wie Verkehrsemissionen, dem Wachstum erneuerbarer Energiequellen und der täglichen Stromproduktion. Alle waren responsiv und für die iframe-Integration konzipiert, sodass sie auf der gesamten WWF-Deutschland-Website ohne Layoutprobleme auf jeder Bildschirmgröße eingebettet werden konnten.',
          ],
          images: [
            {
              alt: 'WWF-Visualisierungsmockups',
              caption: 'Das fertige Dashboard umfasste 11 dynamische Visualisierungen zu Themen wie Verkehrsemissionen, dem Wachstum erneuerbarer Energiequellen und der täglichen Stromproduktion.',
            },
          ],
        },
        {
          title: 'Was ich mitgenommen habe',
          body: [
            'Datenvisualisierungsdesign beginnt immer mit derselben Frage: Was soll der Leser verstehen? Alles andere, wie Diagrammtyp, Farbe oder Interaktion, folgt daraus. Einfache Diagramme sind oft wirkungsvoller als komplexe, gerade weil der Leser sich auf die Daten konzentrieren kann, anstatt das Format zu entschlüsseln. Die schwierigere Fähigkeit ist zu erkennen, wann ein eigens entwickeltes Diagramm echten Mehrwert bietet und wann es nur Rauschen erzeugt.',
          ],
          images: [],
        },
      ],
    },

    reenact: {
      header: {
        title: 'Ein Szenario-Planungstool für Bürgerinnen und Bürger, die die Energiezukunft ihrer Region mitgestalten',
        funding: 'Gefördert durch das Bundesministerium für Wirtschaft und Energie und PtJ',
        skills: ['UX/UI-Design', 'UI-Entwicklung'],
      },
      sections: [
        {
          title: 'Ein komplexes Thema und ein skeptisches Publikum',
          body: [
            'Die Energiewende im ländlichen Ostdeutschland ist nicht nur eine technische Frage – sie ist eine politische. In manchen deutschen Regionen begegnen Bewohnerinnen und Bewohner erneuerbaren Energieprojekten mit echtem Misstrauen: gegenüber politischen Entscheidungen und dem Gefühl, dass Veränderungen um sie herum geschehen, nicht mit ihnen.',
            'ReEnAct war eine direkte Antwort auf diese Spannung. Das Ziel: Bürgerinnen, Bürgern und lokalen Stakeholdern eine aktive Rolle beim Erkunden der Energiezukunft ihrer Region zu geben. Meine Aufgabe war es, das Tool zu gestalten und zu bauen, das dies möglich machte.',
            'Das Tool musste für alle funktionieren – für Bürgerinnen und Bürger ohne Energiehintergrund, für Menschen, die dem Projekt gegenüber skeptisch eingestellt sein könnten, und für Workshop-Facilitators, die auf einem iPad schnell zwischen Ansichten wechseln. Das zugrunde liegende System war von echter Komplexität: Wind, mehrere PV-Technologien, Biomasse, Wasserstoff, Speicher, Flächennutzung, Kosten, CO₂-Ziele für 2030 und 2040.',
            'Manche Nutzer würden dem Tool oder den Menschen dahinter nicht vertrauen. Kein Interface kann diese Lücke vollständig schließen – deshalb waren Sozialforschende und Facilitators Teil des Projekts, die den Gemeinschaften näher waren. Die Aufgabe des Tools war enger gesteckt: echte Daten ehrlich präsentieren und Menschen erkunden lassen, ohne dass sie sich gedrängt fühlen.',
          ],
          images: [],
        },
        {
          title: 'Designentscheidungen',
          body: [
            'Jede wesentliche Entscheidung kam aus einer einzigen Frage: Was braucht dieses Publikum, um zu verstehen und zu vertrauen, was es sieht?',
            'Eine Lösung war die Einbindung einer Karte. Manche Bewohnerinnen und Bewohner befürchten, dass erneuerbare Anlagen die Landschaft dominieren würden. Den tatsächlichen Flächenbedarf sichtbar zu machen – überlagert mit Siedlungsflächen und Moorstandorten – zeigte die Realität auf eine Weise, die Zahlen allein nicht konnten.',
            'Balkendiagramme wurden im gesamten Tool verwendet: Sie mögen unspektakulär wirken, sind aber vertraut, leicht lesbar und wahrnehmungsgenau. Progressive Disclosure strukturierte die Erfahrung. Die wichtigsten Informationen kamen zuerst, in der einfachsten Form. Detailliertere Diagramme waren für neugierige Nutzer verfügbar, aber standardmäßig ausgeblendet.',
            'Kontext war in jede Interaktion eingebaut. Schieberegler zeigten Markierungen für aktuelle Werte und Ziele. Diagramme enthielten Ziellinien. Eine Änderung am Schieberegler aktualisierte die Ergebnisse sofort und machte den Zusammenhang zwischen Entscheidung und Konsequenz in Echtzeit sichtbar. Szenarien und Technologien konnten nebeneinander verglichen werden, da isolierte Zahlen schwer einzuordnen sind.',
            'Kosten wurden als erstrangige Kennzahl behandelt. Für viele Bürgerinnen und Bürger ist Bezahlbarkeit wichtiger als Klimaneutralität. Kosten auszublenden hätte das Tool wie Lobbyarbeit wirken lassen.',
            'Die Szenariovergleichsansicht war das schwierigste Problem. Ich entschied mich für Liniendiagramme mit Ziellinien, anklickbare Szenarionamen, die jeweils eines hervorhoben, und eine Begrenzung gleichzeitiger Vergleiche.',
            'Die gezeigten Daten sind real und unvoreingenommen – aber das Tool ist nicht gänzlich ohne Standpunkt. Indem klimaneutrale Szenarien leicht zu erstellen sind und gezeigt wird, dass das Erreichen von CO₂-Zielen oft keine negativen Folgen für die Region hat, versucht das Design behutsam zu zeigen, dass ein gutes Ergebnis erreichbar ist. Das funktioniert aber nur, wenn Menschen dem Tool genug vertrauen, um sich darauf einzulassen. Für diejenigen, die das nicht tun, waren die Sozialforschenden und Facilitators im Raum der wichtigere Faktor.',
            'Den initialen Prototyp baute ich selbst mit Next.js und Tailwind-UI-Komponenten, bevor das Projekt in seine finale Umsetzung überging.',
          ],
          images: [
            {
              alt: 'Kartenansicht des ReEnAct-Szenarioplanungstools',
              caption: 'Die Kartenansicht wurde entwickelt, um die räumlichen Auswirkungen verschiedener Energieszenarien für unterschiedliche Nutzertypen lesbar zu machen – einschließlich jener, die dem Projekt skeptisch gegenüberstehen könnten. Balkendiagramme wurden im gesamten Tool eingesetzt, da sie vertraut, leicht lesbar und wahrnehmungsgenau sind.',
            },
            {
              alt: 'Szenariovergleichsansicht des ReEnAct-Szenarioplanungstools',
              caption: 'Balkendiagramme wurden im gesamten Tool verwendet, da sie vertraut, leicht lesbar und wahrnehmungsgenau sind.',
            },
            {
              alt: 'Szenarioerstellungsansicht des ReEnAct-Szenarioplanungstools',
              caption: 'Die Szenarioerstellungsansicht wurde so gestaltet, dass Nutzer verschiedene Energieszenarien einfach definieren und vergleichen können.',
            },
            {
              alt: 'Szenariovergleichsansicht des ReEnAct-Szenarioplanungstools',
              caption: 'Kosten als Teil der Szenariovergleichsansicht.',
            },
            {
              alt: 'Szenariovergleichsansicht des ReEnAct-Szenarioplanungstools',
              caption: 'Der Nutzer kann ein bestimmtes Szenario durch Klick auf seinen Namen hervorheben, was den Vergleich einzelner Szenarien erleichtert.',
            },
            {
              alt: 'Szenariovergleichsansicht des ReEnAct-Szenarioplanungstools',
              caption: 'Eine Begrenzung gleichzeitiger Vergleiche war notwendig, um eine Überforderung der Ansicht zu vermeiden. Eine Option war auch, das beste Szenario je Kennzahl mit einer Medaille zu kennzeichnen – das wirkte jedoch zu sehr wie Lobbyarbeit und wurde letztlich weggelassen.',
            },
          ],
        },
        {
          title: 'Als sich das Briefing änderte',
          body: [
            'Gegen Ende des Projekts überarbeiteten die Partner das Workshop-Format. Alles musste auf einmal sichtbar sein, da Facilitators es sich nicht leisten konnten, während laufender Sessions zwischen Seiten zu navigieren. Das bedeutete den Wechsel von einem schrittweisen Flow zu einem tab-basierten Layout, bei dem Dashboard, Szenario-Builder und Vergleichsansicht erreichbar waren, ohne den Bildschirm zu verlassen. Ein echter Kompromiss: Der ursprüngliche Flow war besser für selbstständiges Erkunden, das neue Layout besser für den Workshop-Einsatz.',
          ],
          images: [
            {
              alt: 'Zweite Version des ReEnAct-Szenarioplanungstools mit tab-basiertem Layout',
              caption: 'Die zweite Version des Tools mit tab-basiertem Layout, um einer Änderung im Workshop-Format Rechnung zu tragen. Dashboard, Szenario-Builder und Vergleichsansicht sind erreichbar, ohne den Bildschirm zu verlassen.',
            },
            {
              alt: 'Zweite Version des ReEnAct-Szenarioplanungstools mit tab-basiertem Layout',
              caption: 'Hier ist ein kompakterer Szenariovergleich möglich.',
            },
            {
              alt: 'Zweite Version des ReEnAct-Szenarioplanungstools mit tab-basiertem Layout',
              caption: 'Da Schieberegler und Diagramme gleichzeitig sichtbar sind, können Nutzer die Auswirkungen ihrer Änderungen in Echtzeit sehen – was den Zusammenhang zwischen Entscheidung und Konsequenz unmittelbarer macht.',
            },
          ],
        },
        {
          title: 'Wie es ankam',
          body: [
            'Das Tool wurde in einer Planungszelle – einem strukturierten Bürgerbeteiligungsverfahren – in der Peenetal-Region eingesetzt, was sehr erfolgreich war.',
            'Ich hatte während des Projekts keinen direkten Kontakt zu Bürgerinnen und Bürgern. Designentscheidungen basierten auf Domänenwissen, Designurteil und enger Zusammenarbeit mit dem Projektteam, und nicht auf eigener Nutzerforschung. Das ist eine echte Einschränkung und eine häufige in öffentlich geförderten Forschungsprojekten.',
          ],
          images: [],
        },
        {
          title: 'Was ich mitgenommen habe',
          body: [
            'Für ein skeptisches Publikum zu gestalten bedeutet, dass jede Wahl auch eine Vertrauensentscheidung ist: was zuerst gezeigt wird, wie ein Diagramm beschriftet ist, ob Kosten einbezogen werden.',
            'Der späte Schwenk zum Ein-Bildschirm-Layout war eine nützliche Erinnerung daran, dass ein Tool von einem echten Menschen, in einem echten Raum, unter Zeitdruck benutzt wird. Dieser Kontext muss von Anfang an Teil des Designs sein.',
          ],
          images: [],
        },
      ],
    },

    localiser: {
      header: {
        title: 'Lead Designer für eine Plattform zur Ladeinfrastrukturplanung',
        funding: '',
        skills: ['UX/UI-Design', 'UI-Entwicklung', 'Kartendesign', 'Visual Design'],
      },
      sections: [
        {
          title: 'Ein Tool für Standortplanung und Wasserstoff entlang der Wertschöpfungskette',
          body: [
            'Localiser ist eine Web-Applikation für die Planung von EV-Ladeinfrastruktur. Sie hilft Planern, Investoren und Kommunen, geeignete Standorte zu identifizieren, indem geografische Daten mit Planungs- und Bewertungstools kombiniert werden. Die Plattform hat sich seitdem zu einem Marktplatz für Wasserstoffinfrastruktur erweitert und eine zweite Domäne mit eigenen Datenschichten und Nutzerflüssen hinzugewonnen.',
            'Ich bin seit den frühen Phasen des Produkts der de-facto-Design-Lead und arbeite mit voller Designautonomie über die App, die Website und begleitende visuelle Arbeiten hinweg.',
          ],
          images: [],
        },
        {
          title: 'Die Ladepunktansicht wuchs über das hinaus, was ein Modal fassen konnte',
          body: [
            'Nutzer können potenzielle Ladepunkte auf der Karte einsehen und hinzufügen. Es ist möglich, Informationen zu ergänzen und – vor allem – die Eignung des potenziellen Ladepunkts zu bewerten. Anfangs geschah dies in einem Modal, um das Interface übersichtlich zu halten. Doch mit der Reife des Features wuchs auch sein Inhalt: Standortdaten, technische Parameter, Dateien, Zugänglichkeitsinformationen und eine Standortbewertung. Das Modal stieß an seine Grenzen.',
            'Noch wichtiger: Die Karte zu verbergen, während Nutzer einen Standort prüften, arbeitete gegen sie. Der eigentliche Zweck des Tools ist das Verstehen eines Standorts im Kontext seiner Umgebung. Die Entscheidung, beide gleichzeitig sichtbar zu halten, war die richtige. Das Modal wurde daher zu einem persistenten Seitenpanel – die Karte bleibt stets im Blick.',
          ],
          images: [
            {
              alt: 'Vom Modal zum persistenten Seitenpanel.',
              caption: 'Vom Modal zum persistenten Seitenpanel. Das Feature entwickelte sich zu einem Informationszentrum für den Standort – die Karte im Blick zu behalten war entscheidend für den Nutzerfluss.',
            },
          ],
        },
        {
          title: 'Der Bewertungsbereich brauchte eine andere Art von Struktur',
          body: [
            'Innerhalb der Ladepunktansicht stellte die Eignungsbewertung ein eigenes Leseproblem dar. Das ursprüngliche Design verwendete eine Tabelle für Schlüsselwerte und eine flache Liste für zusätzliche Indikatoren – funktional, aber kognitiv eintönig. Alles hatte dasselbe visuelle Gewicht, was es schwer machte, schnell zu erkennen, was zählte.',
            'Die Liste wurde zu kategorisierten Boxen, die verwandte Indikatoren unter klaren Überschriften gruppierten. Die Tabelle blieb. Das Ergebnis war ein Bereich, den Nutzer überfliegen statt lesen konnten – mit einer Struktur, die widerspiegelte, wie die Informationen tatsächlich organisiert waren, nicht nur wie sie als Rohdaten ankamen.',
          ],
          images: [
            {
              alt: 'Wechsel vom ursprünglichen Tabellen- und Listendesign zum neuen Design mit kategorisierten Boxen.',
              caption: 'Wechsel vom ursprünglichen Tabellen- und Listendesign zum neuen Design mit kategorisierten Boxen. Das neue Design hat eine klare Hierarchie, mit Schlüsselindikatoren in gruppierten Boxen.',
            },
          ],
        },
        {
          title: '40+ Ebenen, zwei Domänen, ein kohärentes visuelles System',
          body: [
            'Der Digitalatlas, ein Hauptfeature der Web-App, aggregiert über 40 Datenschichten: bestehende Ladeinfrastruktur, Netzkapazität, Nachfragepotenzial, Points of Interest, Flächennutzung und mehr. Der H2-Marktplatz hingegen verfügt über einen eigenen Satz wasserstoffspezifischer Ebenen. Jede Ebene muss visuell eigenständig, sofort erkennbar und konsistent mit den anderen sein.',
            'Ich habe Icon-Sets für beide Domänen entworfen. Diese Arbeit liegt zwischen Datenvisualisierung und visueller Identität. Die Icons sind keine Dekoration – sie sind Teil der Art, wie Nutzer die Karte navigieren und interpretieren.',
          ],
          images: [
            {
              alt: 'Verschiedene Kartenebenen',
              caption: 'Verschiedene Kartenebenen für eine bessere Planung.',
            },
            {
              alt: 'Übersicht des Digitalatlas.',
              caption: 'Übersicht des Digitalatlas. Die Karte verfügt über mehr als 40 Ebenen, aufgeteilt in verschiedene Kategorien.',
            },
            {
              alt: 'Wasserstoffspezifische Icons für den H2-Marktplatz.',
              caption: 'Wasserstoffspezifische Icons für den H2-Marktplatz. Diese Icons helfen Nutzern, verschiedene Arten von Wasserstoffinfrastruktur schnell zu identifizieren und zu verstehen.',
            },
          ],
        },
        {
          title: 'Die volle Produktoberfläche besitzen',
          body: [
            "Sechs Jahre wiederkehrender Arbeit bedeuten, dass der Umfang weit über die App hinausgewachsen ist. Ich habe die öffentliche Website gestaltet und implementiert, die auf ein Open-Source-Python-CMS migriert wird, um sie visuell zu verbessern und die Schwierigkeiten einer mehrsprachigen Website zu reduzieren. Ich habe die französische Lokalisierung für die Plattform übernommen und Grafikdesign-Arbeiten für Präsentationen und die oben erwähnten Icon-Systeme erstellt.",
          ],
          images: [],
        },
      ],
    },
  },
};
