import React from 'react';

export default function PrivacyPage() {
  return (
    <section className="py-8 md:py-16 lg:py-24 pb-12 md:pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-12">
        <h1 className="text-4xl py-8">Data Privacy</h1>

        {/* 1. Controller */}
        <h2 className="text-2xl py-4">1. Who is responsible for this website</h2>
        <p className="pb-2">The data controller for this website is:</p>
        <p className="pb-2">
          <span className="block">Bryan Lancien</span>
          <span className="block">Rua Poeta Mílton 2, 1170-321 Lisboa, Portugal</span>
          <span className="block">bryanlancien.ui@gmail.com</span>
        </p>

        {/* 2. Hosting */}
        <h2 className="text-2xl py-4">2. Hosting</h2>
        <p className="pb-2">
          This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          When you visit this website, Vercel automatically records technical server log data in its
          infrastructure. This includes:
        </p>
        <ul className="pb-2 list-disc list-inside">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring URL</li>
          <li>Date and time of the request</li>
        </ul>
        <p className="pb-2">
          This data is processed on the basis of Art. 6(1)(f) GDPR — the legitimate interest in
          providing a technically functional and secure website. This data is not merged with any
          other data sources and is not used to identify individual visitors.
        </p>
        <p className="pb-2">
          Data processing by Vercel is governed by a Data Processing Addendum in accordance with
          Art. 28 GDPR. Vercel is certified under the EU–US Data Privacy Framework, which provides
          a valid legal basis for data transfers to the United States. For more information, see{' '}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Vercel's Privacy Policy
          </a>.
        </p>

        {/* 3. Analytics */}
        <h2 className="text-2xl py-4">3. Analytics</h2>
        <p className="pb-2">
          This website uses Vercel Web Analytics to understand how visitors use the site. This tool
          does not use cookies, does not collect or store IP addresses, and does not track individual
          users across sessions or websites. All data is anonymised and used only in aggregate form
          (page views, referrers, device type, approximate geolocation at country level).
        </p>
        <p className="pb-2">
          Because no personal data is collected or stored, this analytics tool does not require your
          consent. For more information, see{' '}
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Vercel Analytics Privacy &amp; Compliance
          </a>.
        </p>

        {/* 4. Email contact */}
        <h2 className="text-2xl py-4">4. Contact by email</h2>
        <p className="pb-2">
          If you contact me by email, I will store and process your name, email address, and the
          content of your message for the purpose of responding to your enquiry. This is done on the
          basis of Art. 6(1)(f) GDPR (legitimate interest in handling communications) or Art. 6(1)(b)
          GDPR where the enquiry relates to a potential contract.
        </p>
        <p className="pb-2">
          This data is not shared with third parties and is deleted once it is no longer needed,
          unless statutory retention obligations require otherwise.
        </p>

        {/* 5. Your rights */}
        <h2 className="text-2xl py-4">5. Your rights</h2>
        <p className="pb-2">Under GDPR, you have the right to:</p>
        <ul className="pb-2 list-disc list-inside">
          <li>Request access to any personal data held about you (Art. 15)</li>
          <li>Request correction of inaccurate data (Art. 16)</li>
          <li>Request deletion of your data (Art. 17)</li>
          <li>Request restriction of processing (Art. 18)</li>
          <li>Object to processing based on legitimate interests (Art. 21)</li>
          <li>Request data portability where applicable (Art. 20)</li>
        </ul>
        <p className="pb-2">
          To exercise any of these rights, contact me at bryanlancien.ui@gmail.com.
        </p>

        {/* 6. Supervisory authority */}
        <h2 className="text-2xl py-4">6. Right to lodge a complaint</h2>
        <p className="pb-2">
          You have the right to lodge a complaint with a data protection supervisory authority,
          in particular in the EU member state where you reside, work, or where an alleged
          infringement occurred. In Portugal, the competent authority is the{' '}
          <a
            href="https://www.cnpd.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Comissão Nacional de Proteção de Dados (CNPD)
          </a>.
        </p>
      </div>
    </section>
  );
}
