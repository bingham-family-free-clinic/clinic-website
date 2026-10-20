/**
 * Legal page content: Terms of Use and Website Privacy Statement.
 *
 * Read by `src/pages/terms-of-service.astro` and `src/pages/privacy.astro`
 * and rendered by `components/sections/LegalDocument.astro`. To change the
 * wording, edit this file and bump `lastUpdated` — no component changes
 * needed.
 *
 * Block types:
 *   { type: "p", text }                       paragraph
 *   { type: "ul", items: [{ label?, text }] } bullet list; `label` renders bold
 *   { type: "contact" }                       the clinic contact block
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: { label?: string; text: string }[] }
  | { type: "contact" };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  /** Short page title (BaseLayout appends the site name). */
  seoTitle: string;
  seoDescription: string;
  /** Banner heading. */
  heading: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const legalContact = {
  name: "Bingham Family Free Clinic",
  addressLines: ["987 South Geneva Road, Suite 141", "Orem, Utah 84058"],
  phone: "801-854-5168",
  phoneHref: "tel:+18018545168",
  email: "info@binghamfamilyclinic.org",
  website: "https://www.binghamfamilyclinic.org",
};

export const terms: LegalDocument = {
  seoTitle: "Terms of Use",
  seoDescription:
    "Terms of Use for the Bingham Family Free Clinic website in Orem, UT, covering acceptable use, content ownership, and third-party links.",
  heading: "Terms of Use",
  lastUpdated: "October 12, 2026",
  sections: [
    {
      heading: "1. Acceptance of Terms",
      blocks: [
        {
          type: "p",
          text: "By accessing or using the website of Bingham Family Free Clinic (the “Clinic”), you agree to these Terms of Use. These terms apply to the public-facing website and its content.",
        },
      ],
    },
    {
      heading: "2. Copyright and Intellectual Property",
      blocks: [
        {
          type: "p",
          text: "Unless otherwise indicated, website content, including text, photographs, graphics, logos, and design elements, is owned by the Clinic or used with permission and may be protected by copyright or other intellectual property laws.",
        },
        {
          type: "p",
          text: "You may access and view content for personal and informational purposes. Reproducing, distributing, modifying, or republishing protected content without authorization is prohibited, except as permitted by law. Written permission may be required for other uses.",
        },
        {
          type: "p",
          text: "Links to publicly accessible pages are permitted provided they do not misrepresent the Clinic or imply unauthorized endorsement.",
        },
      ],
    },
    {
      heading: "3. Acceptable Use",
      blocks: [
        {
          type: "p",
          text: "You agree not to use the website for unlawful purposes, attempt unauthorized access, interfere with its operation or security, introduce malicious code, or misuse the website in a manner that violates applicable law or the rights of others.",
        },
      ],
    },
    {
      heading: "4. Website Information and Third-Party Links",
      blocks: [
        {
          type: "p",
          text: "The Clinic makes reasonable efforts to maintain accurate and current website information but does not guarantee that all content is complete, accurate, or up to date. Services, eligibility requirements, and operating hours may change.",
        },
        {
          type: "p",
          text: "The website may link to third-party websites that the Clinic does not control. The Clinic is not responsible for their content, availability, or privacy practices.",
        },
      ],
    },
    {
      heading: "5. Liability",
      blocks: [
        {
          type: "p",
          text: "To the fullest extent permitted by law, the Clinic disclaims warranties relating to the website’s availability, accuracy, and uninterrupted operation. The Clinic will not be liable for indirect or consequential damages arising from website use where such limitations are legally permitted.",
        },
        {
          type: "p",
          text: "Nothing in these terms excludes liability or limits rights that cannot lawfully be excluded or limited.",
        },
      ],
    },
    {
      heading: "6. Changes to These Terms",
      blocks: [
        {
          type: "p",
          text: "The Clinic may update these terms by publishing a revised version on this page. The updated date will indicate when the terms were last revised.",
        },
      ],
    },
    {
      heading: "7. Contact Information",
      blocks: [
        {
          type: "p",
          text: "Questions about these terms or requests for permission to use website content may be directed to:",
        },
        { type: "contact" },
      ],
    },
  ],
};

export const privacy: LegalDocument = {
  seoTitle: "Website Privacy Statement",
  seoDescription:
    "How Bingham Family Free Clinic in Orem, UT collects, uses, and protects information submitted through its website forms, plus your choices and requests.",
  heading: "Website Privacy Statement",
  lastUpdated: "October 12, 2026",
  sections: [
    {
      heading: "1. Our Commitment to Privacy",
      blocks: [
        {
          type: "p",
          text: "Bingham Family Free Clinic (the “Clinic”) respects the privacy and dignity of everyone who visits its website, seeks care, volunteers, or donates. Protecting personal information is part of the Clinic’s mission.",
        },
        {
          type: "p",
          text: "This statement explains what information the Clinic collects through its website, how it is used, who may receive it, and what choices you have. It applies to https://www.binghamfamilyclinic.org and its online forms.",
        },
      ],
    },
    {
      heading: "2. Information We Collect",
      blocks: [
        {
          type: "p",
          text: "The website currently offers four forms: an appointment request, a general volunteer application, a provider application, and a donation form. Depending on the form, the Clinic may collect:",
        },
        {
          type: "ul",
          items: [
            {
              label: "Contact information:",
              text: "Name, email address, phone number, and mailing address.",
            },
            {
              label: "Appointment information:",
              text: "Details needed to schedule care, such as date of birth.",
            },
            {
              label: "Volunteer and provider information:",
              text: "Skills, talents, qualifications, résumé, and statement of interest.",
            },
            {
              label: "Donation information:",
              text: "Payment-related and contact details provided when donating.",
            },
          ],
        },
        {
          type: "p",
          text: "The information requested may change, and the Clinic asks only for what is reasonably needed for each form.",
        },
        {
          type: "p",
          text: "Website usage: The Clinic uses Vercel Analytics to understand website usage. It records page views, general location, and device type.",
        },
      ],
    },
    {
      heading: "3. How We Collect Information",
      blocks: [
        {
          type: "p",
          text: "The Clinic collects information when you submit one of its online forms. Volunteer and provider applications are collected only when formally submitted. Website usage information is collected automatically through Vercel Analytics.",
        },
      ],
    },
    {
      heading: "4. How We Use Information",
      blocks: [
        { type: "p", text: "The Clinic uses the information it collects to:" },
        {
          type: "ul",
          items: [
            { text: "Schedule appointments and connect patients with clinic services." },
            { text: "Review and coordinate volunteer and provider applications." },
            { text: "Process and acknowledge donations." },
            { text: "Respond to questions and requests." },
            { text: "Maintain and improve the website." },
            { text: "Meet legal, financial, and administrative obligations." },
          ],
        },
        {
          type: "p",
          text: "The Clinic may share aggregate and de-identified information, such as volunteer trends, with third parties, including university partners, for planning and analysis. The Clinic does not sell personal information or use it for advertising.",
        },
      ],
    },
    {
      heading: "5. Service Providers",
      blocks: [
        {
          type: "p",
          text: "The Clinic uses third-party services to operate its website and support its activities. These services receive only the information needed to perform their services:",
        },
        {
          type: "ul",
          items: [
            { label: "Website hosting:", text: "Vercel." },
            {
              label: "Appointment requests and provider applications:",
              text: "Microsoft Forms.",
            },
            {
              label: "Volunteer applications:",
              text: "The Clinic’s volunteer management platform.",
            },
            { label: "Website analytics:", text: "Vercel Analytics." },
            {
              label: "Donations:",
              text: "Clover and Venmo are available through the website. A Microsoft form is used to arrange wire transfers.",
            },
          ],
        },
        {
          type: "p",
          text: "Clover and Venmo have their own privacy and security practices. The Clinic may also disclose information if required by law, to protect system security, or as otherwise permitted by law.",
        },
      ],
    },
    {
      heading: "6. Access to Information",
      blocks: [
        {
          type: "p",
          text: "Only Clinic staff and volunteers who need the information for their roles can access information submitted through the website.",
        },
      ],
    },
    {
      heading: "7. Security and Retention",
      blocks: [
        {
          type: "p",
          text: "The Clinic uses reasonable administrative, technical, and organizational measures to protect information against unauthorized access, disclosure, alteration, or loss. However, no online system is completely secure, and the Clinic cannot guarantee absolute security.",
        },
        {
          type: "p",
          text: "Information is kept until you ask the Clinic to delete it. Some records may need to be retained longer when required by law.",
        },
      ],
    },
    {
      heading: "8. Your Choices and Requests",
      blocks: [
        {
          type: "p",
          text: "You may request access to, correction of, or deletion of information you submitted through the website. The Clinic may need to verify your identity before fulfilling a request. Some records, including health-related records, may need to be retained as required by law.",
        },
        {
          type: "p",
          text: "To make a request, email info@binghamfamilyclinic.org.",
        },
      ],
    },
    {
      heading: "9. External Websites",
      blocks: [
        {
          type: "p",
          text: "The website may link to external organizations or resources. The Clinic is not responsible for their content, privacy, or security practices. Once you leave the website, the external website’s policies apply. The Clinic encourages you to review those policies before sharing information.",
        },
      ],
    },
    {
      heading: "10. Changes to This Statement",
      blocks: [
        {
          type: "p",
          text: "The Clinic may update this statement as its website, practices, or applicable laws change. Updates will be published with a revised date.",
        },
      ],
    },
    {
      heading: "11. Contact Information",
      blocks: [
        {
          type: "p",
          text: "Questions or requests about this statement or your information may be directed to:",
        },
        { type: "contact" },
      ],
    },
  ],
};