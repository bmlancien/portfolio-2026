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
    heading: 'Datenintensive Interfaces für die Energiewende',
    subheading:
      'Acht Jahre Gestaltung und Entwicklung von Planungstools, Dashboards und kartenbasierten Interfaces für den Energiesektor – für Forschungsinstitute, Energieunternehmen und öffentliche Projekte. Ich übersetze komplexe Modelle und Infrastrukturdaten in Tools, die Planer, Betreiber und Bürgerinnen und Bürger tatsächlich nutzen können.',
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
      'Ich bin Produktdesigner mit Spezialisierung auf die Energiewende – auf Planungstools, Web-Interfaces und Datenvisualisierungen. Sie alle helfen Planern, Forschenden, Entscheidungsträgern und Bürgerinnen und Bürgern, Entscheidungen über komplexe Energiesysteme zu treffen.',
      'In den vergangenen acht Jahren habe ich mit Forschungsinstituten, Think Tanks und Energieunternehmen zusammengearbeitet und Tools für regionale Energieplanung, EV-Ladeinfrastruktur, Energiesystemmodellierung und netzunabhängige Elektrifizierung gestaltet und entwickelt.',
      'Von Anfang an habe ich sowohl Design als auch Frontend-Implementierung übernommen. In der Praxis bedeutet das: Feedback aus einem Workshop oder von einem Kunden kann direkt in funktionierenden Code einfließen – ohne Übergabe dazwischen, ohne Details, die dabei verloren gehen.',
      'Ich arbeite auf Englisch, Deutsch und Französisch, womit ein Großteil der europäischen Energielandschaft abgedeckt ist. Mein Hintergrund verbindet eine kunsthandwerkliche Ausbildung, ein naturwissenschaftliches Studium an der Humboldt-Universität Berlin, acht Jahre im Energiesektor und das Zertifikatsprogramm der TU Delft in Intelligent and Integrated Energy Systems.',
      'Ich lebe in Lissabon und arbeite remote in ganz Europa. Abseits von Kundenprojekten fasziniert mich, wie komplexe Systeme – Energienetze oder Städte – sich selbst organisieren. Wahrscheinlich der Grund, warum ich bei Tools voller Karten gelandet bin.',
      { pre: 'Wenn das passt, ', linkText: 'melden Sie sich gerne', href: 'https://www.linkedin.com/in/blancien/', post: '.' },
    ],
  },

  // ─── Contact page ──────────────────────────────────────────────────────────
  contactPage: {
    heading: 'Kontakt',
    paragraphs: [
      'Ich höre gerne von neuen Projekten im Energiebereich: Planungstools, Dashboards, Karten-Interfaces oder etwas, das noch keine Kategorie hat.',
      'Melden Sie sich auch dann, wenn die Idee noch vage ist. Ein paar Sätze darüber, woran Sie arbeiten, reichen völlig aus!',
    ],
    note: 'Ich arbeite auf Englisch, Französisch, Deutsch und Portugiesisch – schreiben Sie einfach in der Sprache, die Ihnen am leichtesten fällt. Ich antworte in der Regel innerhalb von 1–2 Werktagen.',
    linkedin: { pre: 'Auch auf ', linkText: 'LinkedIn', href: 'https://www.linkedin.com/in/blancien/', post: '.' },
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
          title: 'Energiedaten einem breiten Publikum zugänglich machen',
          body: [
            'WWF Deutschland wollte Energiedaten für die alltäglichen Besucherinnen und Besucher ihrer Website aufbereiten – Menschen ohne Hintergrundwissen in Energiesystemen. Die Herausforderung: Diese Daten nicht nur korrekt, sondern bedeutsam zu machen. Der Auftrag umfasste einen Satz dynamischer, interaktiver Visualisierungen, die als iframe eingebettet werden konnten und gleichzeitig die visuelle Identität des WWF wahren.',
          ],
          images: [],
        },
        {
          title: 'Der Ausgangspunkt: Skizzen – und eine Frage',
          body: [
            'Das Projekt begann mit groben Skizzen des Partnerteams, die Diagrammkonzepte enthielten und festhielten, was kommuniziert werden sollte. Meine erste Aufgabe war es, diese Skizzen in umsetzbare Mockups zu überführen. Davor aber musste ich für jedes Diagramm eine grundlegendere Frage stellen: Was will diese Visualisierung eigentlich aussagen? Diese Frage trieb jede folgende Designentscheidung an.',
            'Responsivität war von Anfang an Teil des Denkens. Da die Visualisierungen auf verschiedenen Seiten und Bildschirmgrößen eingebettet werden sollten, mussten mobile Layouts früh gestaltet werden, nicht schnell am Ende geändert. Das prägte die Layout-Struktur und die Informationsdichte jedes Diagramms auf kleinen Bildschirmen.',
          ],
          images: [
            {
              alt: 'Verschiedene mobile Bildschirmgrößen für dieselbe Visualisierung',
              caption: 'Mobile Layouts von Anfang an gestaltet, nicht nachträglich angepasst',
            },
            {
              alt: 'Desktop-Ansicht des Visualisierungs-Layouts auf der WWF-Website',
              caption: 'Das Desktop-Layout musste die meisten Informationen tragen und dennoch für ein breites Publikum zugänglich bleiben',
            },
          ],
        },
        {
          title: 'Die wichtigste Entscheidung: Einfachere Diagramme, keine komplexen',
          body: [
            'Die frühen Skizzen enthielten zu viele Informationen, die um Aufmerksamkeit konkurrierten. Einige Konzepte verwendeten Kreisdiagramme, die beim Vergleich von mehr als zwei Werten schlecht funktionieren. Position auf einer gemeinsamen Skala lässt sich für das menschliche Auge am einfachsten vergleichen; Winkel und Kreisgrößen sind wesentlich schwieriger. Ich wechselte die Konzepte daher zu Säulen- und Liniendiagrammen, die Leserinnen und Leser mühelos entschlüsseln können.',
            'Das Ziel war immer dasselbe: Alles entfernen, was den Leser mehr als nötig belastet. Icons, konsistente Markenfarben und eine klare typografische Hierarchie wurden nicht als Dekoration hinzugefügt, sondern als Navigation – Wege für Besucherinnen und Besucher, sich schnell innerhalb jedes Diagramms zu orientieren.',
          ],
          images: [
            {
              alt: 'Frühe Skizzen vereinfacht zu Säulen- und Liniendiagrammen',
              caption: 'Von zu komplexen Konzepten zu Säulen- und Liniendiagrammen, die Leserinnen und Leser mühelos entschlüsseln können',
            },
          ],
        },
        {
          title: 'Interaktivität als Erzählung',
          body: [
            'Das wirkungsvollste einzelne Feature war ein Zeitschieber, mit dem Nutzerinnen und Nutzer historische Daten in eigenem Tempo durchblättern können. Anstatt eines statischen Schnappschusses wurde jedes Diagramm zu einer kleinen Geschichte: Man kann beobachten, wie sich der deutsche Strommix Jahr für Jahr verschiebt, oder den Zusammenhang zwischen CO₂-Konzentration und Temperatur über Jahrzehnte verfolgen. Dank dieses einfachen Features erzählen die Daten ihre eigene Geschichte.',
          ],
          images: [
            {
              alt: 'Zeitschieber zum Navigieren durch historische Daten',
              caption: 'Der Zeitschieber verwandelt jedes Diagramm in eine kleine Geschichte – die Daten erzählen sich selbst, sobald das Interface aus dem Weg tritt',
            },
          ],
        },
        {
          title: 'Ergebnisse',
          body: [
            'Das fertige Dashboard umfasste 11 dynamische Visualisierungen zu Themen wie Verkehrsemissionen, dem Wachstum erneuerbarer Energiequellen und der täglichen Stromproduktion. Alle sind responsiv, sodass WWF sie an jeder Stelle der Website platzieren kann, ohne Layoutprobleme.',
            { pre: 'Das Dashboard ist hier zu finden: ', linkText: 'WWF Energiewende Dashboard', href: 'https://www.wwf.de/themen-projekte/klimaschutz/wwf-energiewende-dashboard', post: '' },
          ],
          images: [
            {
              alt: 'Fertiges Dashboard mit 11 dynamischen Visualisierungen',
              caption: 'Der finale Satz von 11 responsiven Visualisierungen, einbettbar an jeder Stelle der WWF-Deutschland-Website',
            },
          ],
        },
        {
          title: 'Was ich mitgenommen habe',
          body: [
            'Datenvisualisierungsdesign beginnt immer mit derselben Frage: Was soll die Leserin oder der Leser verstehen? Diagrammtyp, Farbe und Interaktion folgen alle aus der Antwort. Einfache Diagramme gewinnen meistens, weil sich die Leserin oder der Leser auf die Daten konzentrieren kann, anstatt das Format zu entschlüsseln. Die schwierigere Fähigkeit ist zu erkennen, wann ein eigens entwickeltes Diagramm echten Mehrwert bringt und wann es nur Rauschen erzeugt.',
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
            'Die Energiewende im ländlichen Ostdeutschland ist nicht nur eine technische Frage – es ist eine politische. Erneuerbare-Energie-Projekte können bei manchen Bewohnerinnen und Bewohnern auf echtes Misstrauen stoßen: gegenüber politischen Entscheidungen und dem Gefühl, dass Veränderungen um sie herum passieren, nicht mit ihnen.',
            'ReEnAct war eine direkte Antwort auf diese Spannung. Das Ziel: Bürgerinnen, Bürgern und lokalen Stakeholdern eine aktive Rolle beim Erkunden der Energiezukunft ihrer Region zu geben. Meine Aufgabe war es, das Tool zu gestalten und zu bauen, das dies möglich machte.',
            'Das Tool musste für Bürgerinnen und Bürger ohne Energiehintergrund funktionieren, für Menschen, die dem gesamten Projekt skeptisch gegenüberstanden, und für Workshop-Facilitators, die auf einem iPad schnell zwischen Ansichten wechseln. Und das zugrunde liegende System war von echter Komplexität: Wind, mehrere PV-Technologien, Biomasse, Wasserstoff, Speicher, Flächennutzung, Kosten, CO₂-Ziele für 2030 und 2040.',
            'Eines war von Anfang an klar: Kein Interface kann allein Vertrauen schaffen. Deshalb waren Sozialforschende und Facilitators Teil des Projekts, die den Gemeinschaften näher waren. Die Aufgabe des Tools war enger gesteckt: echte Daten ehrlich präsentieren und Menschen erkunden lassen, ohne dass sie sich gedrängt fühlen.',
          ],
          images: [],
        },
        {
          title: 'Jede Designentscheidung ist auch eine Vertrauensentscheidung',
          body: [
            'Dieser Satz wurde zum Maßstab für jede wesentliche Entscheidung im Projekt.',
            'Die Landschaft zeigen, nicht nur Zahlen. Manche Bewohnerinnen und Bewohner befürchten, dass erneuerbare Anlagen ihre Landschaft dominieren werden. Daher enthält das Tool eine Karte, die den tatsächlichen Flächenbedarf jedes Szenarios zeigt – überlagert mit Siedlungsflächen und Moorstandorten. Den realen Maßstab zu sehen beantwortet eine Angst, die Zahlen allein nicht erreichen können.',
            'Langweilige Diagramme, mit Absicht. Balkendiagramme werden im gesamten Tool verwendet. Sie mögen schlicht wirken, sind aber vertraut, leicht lesbar und wahrnehmungsgenau. Für ein Publikum, das Manipulation vermuten könnte, baut ein Diagramm, das jeder auf einen Blick überprüfen kann, mehr Vertrauen auf als alles Clevere, aber Komplexe.',
            'Kontext in jeder Interaktion. Schieberegler zeigen Markierungen für aktuelle Werte und offizielle Ziele. Diagramme enthalten Ziellinien. Das Bewegen eines Schiebereglers aktualisiert die Ergebnisse sofort, sodass der Zusammenhang zwischen einer Entscheidung und ihren Konsequenzen sichtbar bleibt. Szenarien und Technologien können nebeneinander verglichen werden, weil isolierte Zahlen schwer zu beurteilen sind.',
            'Kosten als erstrangige Kennzahl. Für viele Bürgerinnen und Bürger ist Bezahlbarkeit wichtiger als Klimaneutralität. Kosten auszublenden hätte das Tool zu Lobbyarbeit gemacht – genau das, was ein skeptisches Publikum erwartet und ablehnt.',
            'Progressive Disclosure. Die wichtigsten Informationen kommen zuerst, in der einfachsten Form. Detailliertere Diagramme sind für neugierigere Nutzerinnen und Nutzer vorhanden, bleiben aber standardmäßig ausgeblendet.',
            'Das schwierigste einzelne Problem war die Szenariovergleichsansicht. Ich entschied mich für Liniendiagramme mit Ziellinien, anklickbare Szenarionamen, um jeweils eines hervorzuheben, und eine Begrenzung der gleichzeitig vergleichbaren Szenarien. Eine Idee wurde bewusst verworfen: eine Medaille neben dem am besten abschneidenden Szenario zu zeigen. Es wäre hilfreich gewesen, hätte sich aber nach Lobbyarbeit angefühlt. Es blieb draußen.',
            'Um ehrlich über die Position des Tools zu sein: Die Daten sind real und unvoreingenommen, aber das Design ist nicht völlig neutral. Indem klimaneutrale Szenarien leicht zu erstellen sind und gezeigt wird, dass das Erreichen von CO₂-Zielen oft keine negativen Folgen für die Region hat, demonstriert das Tool still, dass ein gutes Ergebnis möglich ist. Das funktioniert nur, wenn Menschen ihm genug vertrauen, um sich darauf einzulassen. Für diejenigen, die das nicht tun, waren die Forschenden und Facilitators im Raum der wichtigere Faktor.',
            'Den initialen Prototyp baute ich selbst in Next.js mit Tailwind-UI-Komponenten, bevor das Projekt in seine finale Umsetzung überging.',
          ],
          images: [
            {
              alt: 'Kartenansicht mit dem räumlichen Fußabdruck von Energieszenarien',
              caption: 'Die Karte zeigt den tatsächlichen Flächenbedarf jedes Szenarios überlagert mit Siedlungsflächen und Moorstandorten – eine räumliche Angst, die Zahlen allein nicht erreichen können',
            },
            {
              alt: 'Balkendiagramme für den Szenariovergleich',
              caption: 'Balkendiagramme im gesamten Tool – vertraut und wahrnehmungsgenau, auf einen Blick überprüfbar',
            },
            {
              alt: 'Szenarioerstellung mit Schiebereglern und Zielmarkierungen',
              caption: 'Schieberegler mit aktuellen Werten und Zielmarkierungen, Diagramme mit Ziellinien – der Zusammenhang zwischen Entscheidung und Konsequenz bleibt sichtbar',
            },
            {
              alt: 'Szenariovergleich mit Kostenangaben',
              caption: 'Kosten als erstrangige Kennzahl neben Energie und Emissionen',
            },
            {
              alt: 'Szenariovergleich mit Liniendiagrammen und Ziellinien',
              caption: 'Liniendiagramme mit Ziellinien und anklickbaren Szenarionamen zum einzelnen Hervorheben',
            },
            {
              alt: 'Szenariovergleich mit Begrenzung gleichzeitiger Vergleiche',
              caption: 'Eine Begrenzung gleichzeitiger Vergleiche hält die Ansicht lesbar',
            },
          ],
        },
        {
          title: 'Als sich das Briefing änderte',
          body: [
            'Gegen Ende des Projekts überarbeiteten die Partner das Workshop-Format. Facilitators benötigten alles auf einmal sichtbar, weil es während einer Live-Session keine Zeit gibt, zwischen Seiten zu navigieren. Also wurde der schrittweise Flow zu einem tab-basierten Layout: Dashboard, Szenario-Builder und Vergleichsansicht, alle erreichbar, ohne den Bildschirm zu verlassen.',
            'Es war ein echter Kompromiss. Der ursprüngliche Flow war besser für selbstständiges Erkunden; das neue Layout war besser für den Workshop-Raum. Der Workshop-Raum gewann, weil das der Ort war, wo das Tool tatsächlich eingesetzt werden würde – von echten Menschen, unter Zeitdruck.',
            { pre: 'Das Tool ist hier zu sehen: ', linkText: 'reenact.apps2.rl-institut.de', href: 'https://reenact.apps2.rl-institut.de/', post: '' },
          ],
          images: [
            {
              alt: 'Zweite Version des Tools mit tab-basiertem Layout',
              caption: 'Das tab-basierte Layout: Dashboard, Szenario-Builder und Vergleichsansicht erreichbar, ohne den Bildschirm zu verlassen',
            },
            {
              alt: 'Szenario-Builder in der zweiten Version',
              caption: 'Der Szenario-Builder im Ein-Bildschirm-Layout — alle Steuerelemente sichtbar, ohne die Seite zu verlassen',
            },
            {
              alt: 'Vergleichsansicht in der zweiten Version',
              caption: 'Mit sichtbaren Schiebereglern und Diagrammen gleichzeitig bleibt der Zusammenhang zwischen Entscheidung und Konsequenz unmittelbar',
            },
          ],
        },
        {
          title: 'Wie es ankam',
          body: [
            'Das Tool wurde erfolgreich in einer Planungszelle – einem strukturierten Bürgerbeteiligungsverfahren – in der Peenetal-Region eingesetzt.',
            'Eine Anmerkung zur Methode: Ich hatte während des Projekts keinen direkten Kontakt zu Bürgerinnen und Bürgern. Designentscheidungen stützten sich auf Domänenwissen, Designurteil und enge Zusammenarbeit mit dem Projektteam. Das ist eine häufige Einschränkung in öffentlich geförderten Forschungsprojekten und ein Grund, warum die Sozialforschenden im Raum wichtig waren.',
          ],
          images: [],
        },
        {
          title: 'Was ich mitgenommen habe',
          body: [
            'Für ein skeptisches öffentliches Publikum zu gestalten bedeutet, dass jede Wahl auch eine Vertrauensentscheidung ist: was zuerst gezeigt wird, wie ein Diagramm beschriftet ist, ob Kosten einbezogen werden.',
            'Und ein Tool wird von einem echten Menschen, in einem echten Raum, unter Zeitdruck benutzt. Der späte Schwenk zum Ein-Bildschirm-Layout war eine Erinnerung daran, dass dieser Kontext von Anfang an Teil des Designs sein muss – und nicht am Ende entdeckt werden darf.',
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
              caption: 'Die Ladepunktansicht wechselte vom Modal zum persistenten Seitenpanel – die Karte bleibt neben den Standortdetails sichtbar',
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
              caption: 'Von einer flachen Liste zu kategorisierten Boxen – dieselben Informationen, strukturiert zum Überfliegen statt zum Lesen',
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
              caption: 'Über 40 Ebenen – jede muss auf Anhieb lesbar und visuell konsistent mit den anderen sein',
            },
            {
              alt: 'Übersicht des Digitalatlas',
              caption: 'Das Ebenen-Panel des Digitalatlas – Kategorien halten 40+ Schichten navigierbar, ohne visuell zu überfordern',
            },
            {
              alt: 'Wasserstoffspezifische Icons für den H2-Marktplatz',
              caption: 'Icon-Sets für die EV-Lade- und Wasserstoff-Domäne – visuell eigenständig, aber Teil desselben Systems',
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
