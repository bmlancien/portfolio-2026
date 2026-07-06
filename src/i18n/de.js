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
    intro: 'Ich nehme gerne Kontakt zu neuen Projekten im Energiebereich auf.',
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
        tagline: [
          'Lead-Designer für ein regionales Energieplanungstool, entwickelt mit dem Reiner Lemoine Institut, Öko-Institut und IZT',
          'In mehreren Workshop-Zyklen mit echten Stakeholdern in der Region Oderland-Spree getestet und weiterentwickelt',
          'In der letzten Iteration nutzten die Teilnehmenden das Tool eigenständig, um reale Planungsabwägungen zu diskutieren',
        ],
        skills: ['UX/UI-Design', 'Datenvisualisierung & Kartendesign', 'UI-Entwicklung'],
      },
      sections: [
        {
          title: 'Das fehlende Tool für Entscheidungsträger ohne Fachkenntnisse',
          body: [
            'Regionalplaner, Gemeindeverwaltungen und Kreisbehörden in ganz Deutschland müssen Flächennutzungsentscheidungen treffen, die ihre Regionen für Jahrzehnte prägen. Das Problem: Es gab bis 2022 kein Tool, das ohne Data-Scientist im Raum bedienbar und gleichzeitig reichhaltig genug in den Daten war. Bestehende Tools waren entweder zu einfach oder zu sehr auf Experten ausgerichtet.',
            'EmPowerPlan schloss diese Lücke. Als Lead-Designer war meine Aufgabe, ein komplexes Energiesimulationstool für Menschen nutzbar zu machen, die Regionen planen – nicht Energiesysteme.',
          ],
          images: [
            {
              alt: 'Der Schritt „Herausforderungen" als Einstieg in EmPowerPlan',
              caption: 'Nutzer starten mit dem Schritt „Herausforderungen", der den Kontext setzt, bevor sie Szenarien erkunden',
            },
          ],
        },
        {
          title: 'Die wichtigste Entscheidung: Von „hier sind Daten" zu „hier stehen Sie"',
          body: [
            'Die Szenariovergleichsansicht durchlief die größte Entwicklung des Projekts.',
            'Frühe Versionen zeigten die Szenariodaten klar: Windkapazitäten, PV-Ziele, Flächenbedarf. Die Zahlen waren korrekt und lesbar – und dennoch konnten Nutzer sie nicht einordnen. Sind 500 MW Wind viel für diese Region? Das lässt sich aus der Zahl allein nicht beantworten.',
            'Was fehlte, war ein Referenzpunkt. Die Lösung war, Landes- und Bundesziele direkt in dieselbe Ansicht zu integrieren. Ein Planer, der die Zahlen von Oderland-Spree betrachtete, konnte nun sofort sehen, wie seine Region im Vergleich zu Brandenburg und den nationalen Zielen dasteht.',
            'Diese eine Änderung verwandelte den Screen von einem Informationsdisplay in ein Entscheidungsunterstützungstool. Sie ist auch die deutlichste Erkenntnis, die ich aus dem Projekt mitgenommen habe: Daten werden erst dann nützlich für Entscheidungen, wenn der Leser weiß, wo er steht.',
            'Darum herum hielt ein Wizard-Flow (Herausforderungen → Region heute → Szenarien → Einstellungen → Ergebnisse) die Erfahrung navigierbar, als das Tool mit jeder Projektiteration komplexer wurde. Vordefinierte Politikszenarien wie die Energiestrategie Brandenburg 2030 konnten mit einem Klick als Ausgangspunkt geladen werden – eine einfache Antwort für Nutzer, die nicht wussten, wo sie anfangen sollten.',
          ],
          images: [
            {
              alt: 'Szenariovergleichsansicht mit Landes- und Bundeszielen als Referenz',
              caption: 'Landes- und Bundesziele direkt in die Vergleichsansicht zu integrieren verwandelte den Screen vom Informationsdisplay in ein Entscheidungsunterstützungstool',
            },
            {
              alt: 'Wizard-Navigation durch die fünf Schritte',
              caption: 'Der Wizard-Flow (Herausforderungen → Region heute → Szenarien → Einstellungen → Ergebnisse) hielt das Tool navigierbar, als die Komplexität wuchs',
            },
          ],
        },
        {
          title: 'Das Design musste echte Komplexität tragen',
          body: [
            'Hinter dem Interface verknüpfte das Modell regionale Energieszenarien mit nationalen Klimazielen – eine anspruchsvolle Datenumgebung.',
            'Die Karte allein hatte 26 Ebenen, die gemeinsam lesbar bleiben mussten. Ich löste das durch kategoriebasierte Farbgruppierungen: eine Farbfamilie pro Kategorie, sequenzielle Paletten für die Unterschiede innerhalb jeder Gruppe. ECharts übernahm die Diagramme, Bootstrap hielt das Frontend einfach wartbar, und Barrierefreiheit – Tastaturnavigation, ARIA-Struktur und Kontrast – war von Anfang an eingebaut, nicht nachträglich ergänzt.',
          ],
          images: [
            {
              alt: 'Farbpaletten für die 26 Kartenebenen',
              caption: 'Kategoriebasierte Farbgruppierungen mit sequenziellen Paletten – entwickelt, um bei mehreren aktiven Ebenen lesbar zu bleiben',
            },
            {
              alt: 'Kartenansicht mit mehreren aktiven Ebenen',
              caption: 'Kartenansicht mit Datenschichten für Flächennutzung, Schutzgebiete und Potenziale erneuerbarer Energien',
            },
          ],
        },
        {
          title: 'Workshops, Feedback, Code, wiederholen',
          body: [
            'Das Tool wurde in mehreren Workshop-Zyklen mit echten Stakeholdern in Oderland-Spree getestet. Das Forschungsteam sammelte Feedback in jeder Sitzung. Ich übersetzte dieses Feedback in Designänderungen und implementierte sie direkt im Frontend-Code, bereit für den nächsten Zyklus.',
            'Da ich Design und Implementierung in einer Hand hielt, ging nichts zwischen Workshop und Interface verloren – und das ermöglichte eine schnellere Iteration.',
            'In der letzten Iteration navigierten die Teilnehmenden das Tool selbstständig und nutzten die Szenariovergleiche, um reale Planungsabwägungen zu diskutieren – was genau das Ziel war.',
            { pre: 'Das Tool ist hier zu sehen: ', linkText: 'epp.rl-institut.de', href: 'https://epp.rl-institut.de/de/', post: '' },
          ],
          images: [
            {
              alt: 'Workshop-Iterationszyklus',
              caption: 'Workshop-Feedback floss direkt in Designänderungen ein, die im Frontend implementiert und in der nächsten Sitzung getestet wurden',
            },
            {
              alt: 'Ergebnisansicht mit Diagrammen und Karte',
              caption: 'Ergebnisansicht mit Szenarioergebnissen in Diagrammen und auf der Karte',
            },
          ],
        },
        {
          title: 'Was ich mitgenommen habe',
          body: [
            'Zwei Dinge. Erstens: Eine Zahl ohne Referenzpunkt ist keine Information, sondern Dekoration. Der größte Designwert in diesem Projekt entstand durch das Hinzufügen von Kontext, nicht von Daten.',
            'Zweitens: In Forschungsprojekten ist der Kreislauf zwischen Feedback und funktionierender Software meist langsam. Eine Person für Design und Code zu haben beschleunigte diesen Kreislauf. Ich denke, dass die Geschwindigkeit dieses Kreislaufs, mehr als jede einzelne Designentscheidung, die Workshops produktiv machte.',
          ],
          images: [],
        },
      ],
    },

    wwf: {
      header: {
        title: 'Datenvisualisierungs-Dashboard für ein klimaneutrales Deutschland',
        funding: 'WWF Deutschland',
        tagline: [
          '11 interaktive Visualisierungen für die Website des WWF Deutschland, vom täglichen Strommix bis zu langfristigen CO₂-Trends',
          'Konzipiert für ein breites Publikum ohne Energiehintergrund, als responsive iframes in die WWF-Website eingebettet',
        ],
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
        tagline: [
          'Ein Tool, das Bürgerinnen, Bürgern und lokalen Stakeholdern ermöglicht, Energieszenarien für ihre Region zu erkunden: Wind, PV, Biomasse, Wasserstoff, Speicher, Flächennutzung, Kosten',
          'Für ein teils skeptisches Publikum gestaltet: Jede Designentscheidung war zugleich eine Vertrauensentscheidung',
          'Eingesetzt in einer „Planungszelle" – einem strukturierten Bürgerbeteiligungsverfahren – in der Peenetal-Region',
        ],
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
        title: 'Sieben Jahre als Design-Lead für eine EV-Ladeinfrastruktur-Plattform',
        funding: '',
        tagline: [
          'Design-Lead seit 2018, direkte Zusammenarbeit mit dem Führungsteam',
          'Die Plattform wird von Ladepunktbetreibern, Kommunen und Investoren in Deutschland und anderen europäischen Ländern genutzt',
          'Vom UI-Design zur vollen Produktoberfläche: App, Website, Icon-Systeme, französische Lokalisierung',
        ],
        skills: ['Produktdesign', 'UX/UI', 'Kartendesign', 'UI-Entwicklung', 'Visual Design'],
      },
      sections: [
        {
          title: 'Was Localiser macht – und meine Rolle darin',
          body: [
            'Localiser ist eine Web-Plattform für die Planung von EV-Ladeinfrastruktur. Die Nutzerinnen und Nutzer müssen eine Frage beantworten: Ist das ein guter Platz für eine Ladestation? Die Plattform kombiniert geografische Daten, Nachfrageindikatoren und Planungstools, um diese Entscheidung zu unterstützen. In den letzten Jahren wurde sie außerdem um einen Marktplatz für Wasserstoffinfrastruktur erweitert.',
            'Die Hauptkunden sind Ladepunktbetreiber, Kommunen und Investoren in Deutschland und anderen europäischen Ländern.',
            'Ich bin seit 2018 Design-Lead. Ich arbeite mit voller Autonomie über die Web-App, die öffentliche Website und das visuelle Material rund um das Produkt. Entscheidungen laufen direkt zwischen mir und dem Führungsteam.',
          ],
          images: [],
        },
        {
          title: 'Die wichtigste Entscheidung: Die Karte muss sichtbar bleiben',
          body: [
            'Das zentrale Feature von Localiser ist die Ladepunktansicht. Nutzerinnen und Nutzer platzieren einen potenziellen Ladepunkt auf der Karte, ergänzen Informationen dazu und bewerten, ob der Standort geeignet ist.',
            'In den frühen Jahren geschah das in einem Modal-Fenster. Es hielt das Interface übersichtlich, und damals reichte das aus. Doch das Feature wuchs weiter: Standortdaten, technische Parameter, Dateien, Zugänglichkeitsinformationen und eine vollständige Eignungsbewertung. Das Modal stieß an seine Grenzen.',
            'Wir hätten das Modal einfach größer machen können. Aber das eigentliche Problem war nicht der Platz. Das Modal verdeckte die Karte – und die Karte ist der Grund, warum das Tool existiert. Ein Ladepunkt ergibt nur im Kontext seiner Umgebung Sinn: Was ist in der Nähe? Wo kommt die Nachfrage her? Wie sieht die Konkurrenz aus? Die Karte zu verbergen, während der Nutzer einen Standort prüft, arbeitet direkt gegen seine Denkweise.',
            'Also wurde das Modal zu einem persistenten Seitenpanel. Nutzerinnen und Nutzer können nun alle Details zu einem Standort lesen und gleichzeitig dessen Kontext sehen. Es ist ein einfaches Muster – aber es zu wählen bedeutete zu verstehen, wofür das Produkt wirklich da ist, und nicht nur ein Layoutproblem zu lösen.',
          ],
          images: [
            {
              alt: 'Vom Modal zum persistenten Seitenpanel',
              caption: 'Die Ladepunktansicht wechselte vom Modal zum persistenten Seitenpanel – die Karte bleibt stets neben den Standortdetails sichtbar.',
            },
          ],
        },
        {
          title: 'Die Eignungsbewertung überschaubar machen',
          body: [
            'In der Ladepunktansicht hatte die Eignungsbewertung ihr eigenes Problem. Das ursprüngliche Design war eine Tabelle für die wichtigsten Werte und eine lange, flache Liste für alles andere. Alle Informationen hatten dasselbe visuelle Gewicht. Wer eine schnelle Antwort wollte, musste alles lesen.',
            'Ich gruppierte die Indikatoren in kategorisierte Boxen mit klaren Überschriften und behielt die Tabelle für die Schlüsselwerte. Jetzt lässt sich der Bereich überfliegen statt lesen. Die Struktur folgt der Art, wie Nutzer über einen Standort nachdenken – nicht der Art, wie die Daten vom Backend geliefert werden.',
          ],
          images: [
            {
              alt: 'Die Eignungsbewertung als kategorisierte Boxen',
              caption: 'Die Gruppierung von Indikatoren in kategorisierte Boxen macht den Bereich überfliegbar. Die Tabelle blieb für die Schlüsselwerte; die lange flache Liste wurde zu strukturierten Gruppen.',
            },
          ],
        },
        {
          title: '40+ Kartenebenen, zwei Domänen, ein visuelles System',
          body: [
            'Der Digitalatlas, ein zentrales Feature der App, bündelt mehr als 40 Datenschichten: bestehende Ladeinfrastruktur, Netzkapazität, Nachfragepotenzial, Points of Interest, Flächennutzung und mehr.',
            'Jede Ebene muss auf einen Blick erkennbar sein und gleichzeitig mit allen anderen harmonieren. Ich habe die Icon-Sets und die Farblogik für beide Domänen entwickelt. Diese Arbeit liegt zwischen Datenvisualisierung und visueller Identität: Die Icons sind keine Dekoration – sie sind das, womit Nutzerinnen und Nutzer die Karte lesen.',
          ],
          images: [
            {
              alt: 'Verschiedene Kartenebenen im Digitalatlas',
              caption: 'Verschiedene Kartenebenen für die Ladeinfrastrukturplanung.',
            },
            {
              alt: 'Übersicht des Digitalatlas',
              caption: 'Der Digitalatlas bündelt mehr als 40 Datenschichten, aufgeteilt in Kategorien.',
            },
            {
              alt: 'Wasserstoffspezifische Icons für den H2-Marktplatz',
              caption: 'Icon-Sets für beide Domänen. Die Icons sind keine Dekoration – sie sind das, womit Nutzerinnen und Nutzer die Karte navigieren und lesen.',
            },
          ],
        },
        {
          title: 'Über die App hinaus',
          body: [
            'Sieben Jahre auf einem Produkt bedeuten, dass der Umfang wächst. Ich habe die öffentliche Website gestaltet und implementiert, die gerade auf ein Open-Source-CMS migriert wird, um die mehrsprachige Struktur einfacher wartbar zu machen. Ich habe die französische Lokalisierung der Plattform übernommen und produziere das visuelle Material rund um das Produkt: Präsentationen, Icons, visuelle Assets.',
            'Für ein kleines Unternehmen ist das der praktische Wert eines langfristigen Designpartners: eine Person, die das Produkt, die Kunden und die visuelle Sprache kennt und über die gesamte Oberfläche hinweg verfügbar ist.',
          ],
          images: [],
        },
        {
          title: 'Was sieben Jahre auf einem Produkt mich gelehrt haben',
          body: [
            'Die meisten Design-Portfolios zeigen Projekte, die ein paar Monate gedauert haben. Sieben Jahre lang an demselben Produkt zu arbeiten ist eine andere Disziplin. Jedes neue Feature muss Entscheidungen respektieren, die Jahre früher getroffen wurden. Konsistenz wird zur täglichen Aufgabe, nicht zur Style-Guide-Fußnote.',
            'Es verändert auch die Beziehung. Nach sieben Jahren dreht sich das Gespräch weniger um Screens und mehr ums Produkt: Was soll gebaut werden, für wen, und wie erklärt man es? Das ist der Teil der Arbeit, den ich weiterentwickeln möchte.',
          ],
          images: [],
        },
      ],
    },
  },
};
