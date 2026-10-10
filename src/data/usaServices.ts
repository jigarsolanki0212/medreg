/**
 * USA (US FDA) service content.
 *
 * Source: client document "Website Content.docx" (Megreg data/), supplied after the client review.
 * Wording is kept as close to the client text as possible. Where the client text conflicted with the
 * current regulation or the official FDA source, the official source was followed; those places are
 * marked `// verified:` with the source checked.
 */
import type { FaqItem } from '@/data/medregData';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'list'; items: (string | { label: string; text: string })[]; ordered?: boolean; columns?: boolean }
  | { type: 'table'; caption?: string; headers: string[]; rows: string[][]; note?: string; source?: { label: string; href: string } }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'timeline'; items: { when: string; title: string; text: string }[]; note?: string }
  | { type: 'cards'; items: { title: string; text?: string; items?: string[] }[] }
  | { type: 'callout'; text: string; tone?: 'info' | 'expert'; more?: { label: string; href: string } }
  | { type: 'links'; title?: string; items: { label: string; href: string }[] };

export interface UsaSection {
  heading: string;
  blocks: Block[];
}

export interface UsaService {
  slug: string;
  title: string;
  /** One-line card description. */
  summary: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: UsaSection[];
  faqs?: FaqItem[];
  related: string[];
}

export const FDA_LINKS = {
  classification: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpcd/classification.cfm',
  guidance: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents',
  standards: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfStandards/search.cfm',
  accessGudid: 'https://accessgudid.nlm.nih.gov/',
  maude: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfmaude/search.cfm',
  tplc: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfTPLC/tplc.cfm',
  whoMustRegister: 'https://www.fda.gov/medical-devices/device-registration-and-listing/who-must-register-list-and-pay-fee',
  hlAssociates: 'https://hl-associates.in/',
  /** Biotox page URL to be supplied by the client; until then "Biotox" shows as plain text. */
  biotox: '',
};

/** Overview shown on the USA landing page ("U.S. Medical Device Regulations"). */
export const USA_REGULATIONS_OVERVIEW = {
  intro:
    'The U.S. Food and Drug Administration (FDA) oversees medical devices to ensure they meet applicable safety and performance requirements before and after entering the U.S. market. The regulatory obligations for a device are determined by factors such as its intended use, risk classification, technological characteristics, and the applicable regulatory pathway.',
  points: [
    {
      title: 'Medical Device Classification',
      text: 'The FDA categorizes medical devices into three classes according to their associated risks:',
      items: [
        'Class I: Generally considered lower-risk devices, primarily subject to general controls.',
        'Class II: Devices with moderate risk that are subject to general controls and, where applicable, special controls. Many require Premarket Notification (510(k)).',
        'Class III: Generally high-risk devices that typically require Premarket Approval (PMA), supported by evidence demonstrating safety and effectiveness.',
      ],
    },
    {
      title: 'Premarket Submissions',
      text: 'Depending on their classification and regulatory requirements, medical devices may need FDA clearance or approval before they can be marketed. The 510(k) pathway requires manufacturers to demonstrate substantial equivalence to a legally marketed predicate device. Available submission formats include Traditional, Special, and Abbreviated 510(k). Class III devices generally follow the PMA pathway, which requires sufficient evidence of safety and effectiveness. Through the FDA Q-Submission Program, manufacturers can also seek feedback on regulatory, scientific, clinical, and nonclinical matters before submitting an application.',
    },
    {
      title: 'Establishment Registration and Device Listing',
      text: 'Establishments covered by FDA requirements must complete the applicable registration and device-listing procedures. Foreign manufacturers must also comply with U.S. Agent requirements. However, completing registration and listing does not mean that a device has received FDA clearance or approval.',
    },
    {
      title: 'Quality Management and Design Controls',
      text: "The FDA's Quality Management System Regulation (QMSR), established under 21 CFR Part 820, incorporates ISO 13485:2016 by reference alongside additional FDA-specific provisions. Manufacturers subject to these requirements must implement and maintain appropriate quality management processes covering areas such as design and development, documentation and recordkeeping, labelling and packaging, and traceability, as applicable.",
    },
    {
      title: 'Labelling, UDI, and GUDID',
      text: 'Medical device labels and accompanying labelling must comply with applicable provisions of 21 CFR Part 801. These requirements may address device identification, intended use, instructions for use, warnings, and manufacturer details. The FDA’s Unique Device Identification (UDI) system facilitates consistent device identification and traceability. Where required, device identification information must be submitted to the Global Unique Device Identification Database (GUDID).',
    },
    {
      title: 'Biological Safety and Technical Documentation',
      text: "Manufacturers must evaluate biological safety, performance, and other relevant technical requirements according to the device's nature, materials, and intended use. The ISO 10993 series provides guidance for biological evaluation, including biological risk assessment, chemical characterization, and appropriate biocompatibility testing. Supporting technical documentation may include a Biological Evaluation Plan (BEP), Biological Evaluation Report (BER), test reports, and scientifically justified assessments.",
    },
    {
      title: 'Post-Market Reporting and Compliance',
      text: "Regulatory responsibilities continue throughout a device's market life. Under 21 CFR Part 803, applicable manufacturers, importers, and user facilities must report specified device-related adverse events and maintain the required records. Manufacturers must also retain relevant quality documentation, address identified compliance issues, and monitor applicable regulatory changes.",
    },
  ],
  closing:
    "A clear understanding of U.S. medical device regulations enables manufacturers to determine the appropriate submission pathway, compile the required technical documentation, implement suitable quality management systems, and sustain regulatory compliance throughout the device's market life.",
};

const BIOCOMPAT_EXPERT =
  'MedReg has an expert, Dr. Bipinchandra Trada (ERT, DABT, FASc(AW)), who can help you with biocompatibility evaluation, toxicological risk assessment, biological evaluation strategy, the Biological Evaluation Plan (BEP) and the Biological Evaluation Report (BER).';

const DESIGN_CONTROL_CLASS_I_TABLE: Block = {
  type: 'table',
  caption: 'Class I devices subject to design and development requirements (21 CFR 820.10(c))',
  headers: ['Sr. No.', 'Section', 'Device'],
  rows: [
    ['1', '868.6810', 'Catheter, Tracheobronchial Suction'],
    ['2', '878.4460', "Glove, Non-powdered Surgeon's"],
    ['3', '880.6760', 'Restraint, Protective'],
    ['4', '892.5650', 'System, Applicator, Radionuclide, Manual'],
    ['5', '892.5740', 'Source, Radionuclide Teletherapy'],
  ],
  note: 'Class I devices automated with computer software are also subject to these requirements.',
};

export const USA_SERVICES_DETAIL: UsaService[] = [
  // 1 ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'fda-device-classification',
    title: 'Classification Services as per FDA Risk-Based Classification',
    summary: 'Determine your device class, product code, applicable regulation and the right FDA pathway.',
    icon: '/assets/Medical-Device-Classification.png',
    metaTitle: 'FDA Medical Device Classification Services',
    metaDescription:
      'MedReg determines your FDA device class (I, II or III), product code, regulation, predicate and applicable guidance to define the right US regulatory pathway.',
    intro: [
      // verified: the client text says "Authentic Classification Database"; FDA's official tool is the Product Classification Database.
      "At MedReg, we help you determine the appropriate FDA classification for your medical device using FDA's official Product Classification Database. Our regulatory experts guide you through identifying the applicable regulatory pathway by decoding the FDA regulation requirements, associated product code, risk class, predicate, and applicable FDA guidance (product performance and safety, process requirements, material standards, technology requirements and submission standards).",
      'Whether your device falls under Class I, Class II, or Class III, we support you in navigating the relevant regulatory requirements, including 510(k) submissions and Premarket Approval (PMA), as applicable.',
    ],
    sections: [
      {
        heading: 'How MedReg supports each device class',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                // verified: client text said "low to moderate risk"; FDA defines Class I as lower risk (matches the client's own overview).
                title: 'Class I (low risk): general controls',
                text: 'MedReg can help you determine the requirements for design controls, GMP controls (QMSR), device listing and establishment registration. We also provide U.S. Agent services. Most Class I medical devices are 510(k) exempt, which needs to be verified in the FDA database. We also help with 510(k) documentation where it is required.',
              },
              {
                // verified: client text said "moderate to high risk"; FDA defines Class II as moderate risk.
                title: 'Class II (moderate risk): general and special controls',
                text: 'MedReg can help you determine the requirements for design controls, GMP controls (QMSR), device listing and establishment registration. We also provide U.S. Agent services. Very few Class II medical devices are 510(k) exempt, which needs to be verified in the FDA database; most Class II devices require Premarket Notification (510(k)).',
              },
              {
                title: 'Class III (high risk)',
                text: 'Class III devices generally follow the Premarket Approval (PMA) pathway, which requires sufficient evidence of safety and effectiveness. We help you identify the applicable requirements and plan the submission.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Class II 510(k) support',
        blocks: [
          { type: 'p', text: 'For Class II devices that require a 510(k), MedReg can help you with:' },
          {
            type: 'list',
            columns: true,
            items: [
              '510(k) documentation',
              'Predicate search',
              'Substantial equivalence demonstration',
              'Executive summary',
              'Labelling requirements (immediate label, Instructions for Use (IFU), surgical technique, packaging labels (secondary / tertiary))',
              'Biocompatibility evaluation',
              'Performance and safety assessment',
              'Small business qualification',
              'MDUFA fees',
              'eCopy / eSTAR preparation and submission',
              'Interactive discussion with the FDA reviewer',
              'Responding to additional information requests',
              'Deciding when to submit a new 510(k) for changes to an FDA-cleared device, using a regulatory change assessment methodology',
            ],
          },
          { type: 'callout', tone: 'expert', text: BIOCOMPAT_EXPERT, more: { label: 'Biotox', href: FDA_LINKS.biotox } },
        ],
      },
      {
        heading: 'Official reference',
        blocks: [
          { type: 'links', items: [{ label: 'FDA Product Classification Database', href: FDA_LINKS.classification }] },
        ],
      },
    ],
    faqs: [
      {
        question: 'Are all Class I devices exempt from 510(k)?',
        answer: 'No. Most Class I devices are 510(k) exempt, but the exemption must be verified for your specific device in the FDA database.',
      },
      {
        question: 'Do Class II devices need a 510(k)?',
        answer: 'Most Class II devices require Premarket Notification (510(k)). Very few are exempt, and any exemption must be verified in the FDA database.',
      },
    ],
    related: ['510k-premarket-notification', 'establishment-registration-device-listing', 'us-agent-services'],
  },

  // 2 ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'establishment-registration-device-listing',
    title: 'FDA Establishment Registration & Device Listing Services',
    summary: 'FURLS account set-up, DFUF fee payment, establishment registration and device listing.',
    icon: '/assets/Establishment-and-Listing.png',
    metaTitle: 'FDA Establishment Registration & Device Listing',
    metaDescription:
      'MedReg handles FDA establishment registration and device listing: applicability, FURLS account, DFUF annual fee payment and submission. See who must register.',
    intro: [
      'At MedReg, we support you in navigating the FDA establishment registration and device listing requirements for the US market.',
      'Our regulatory team guides you through the entire process, including determining applicable registration requirements, obtaining the necessary information, setting up a FURLS account, facilitating annual registration fee payment through the Device Facility User Fee (DFUF) system, and submitting establishment registration and device listing information.',
      'We provide end-to-end regulatory support to help ensure that your establishment registration and device listing are completed in accordance with applicable FDA requirements.',
    ],
    sections: [
      {
        heading: 'Our process',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Applicability', text: 'Determine the registration and listing requirements that apply to your establishment and activities.' },
              { title: 'Information gathering', text: 'Obtain the necessary establishment and device information.' },
              { title: 'FURLS account', text: 'Set up your FDA Unified Registration and Listing System (FURLS) account.' },
              { title: 'Annual fee', text: 'Facilitate annual registration fee payment through the Device Facility User Fee (DFUF) system.' },
              { title: 'Submission', text: 'Submit establishment registration and device listing information.' },
            ],
          },
          {
            type: 'callout',
            text: 'Completing registration and listing does not mean that a device has received FDA clearance or approval.',
          },
        ],
      },
      {
        heading: 'Who must register and list',
        blocks: [
          // verified: rows checked against FDA "Who Must Register, List and Pay the Fee". Where the client table
          // differed (domestic initial importer, domestic accessories manufacturer, domestic remanufacturer,
          // foreign IDE device, foreign component manufacturer) the FDA values are used.
          {
            type: 'table',
            caption: 'Domestic establishments',
            headers: ['Activity', 'Register', 'List'],
            rows: [
              ['Contract manufacturer (including contract packagers)', 'YES 807.20(a)(2)', 'YES 807.20(a)(2)'],
              ['Contract sterilizer', 'YES 807.20(a)(2)', 'YES 807.20(a)(2)'],
              ['Device being investigated under IDE', 'NO', 'NO 807.40(c)'],
              ['Domestic distributor that does not import devices', 'NO 807.20(c)(3)', 'NO'],
              ['Any establishment located in a foreign trade zone involved with the manufacture, preparation, propagation, compounding, assembly, or processing of a device intended for commercial distribution in the United States', 'YES', 'YES'],
              ['Import agent, broker, and other parties who do not take first possession of a device imported into the United States', 'NO', 'NO'],
              ['Initial importer', 'YES 807.40(a)', 'NO — identify manufacturers per 807.20(a)(5)'],
              ['Maintains complaint files as required under 21 CFR 820.198', 'YES', 'YES'],
              ['Manufacturer of accessories or components that are packaged or labeled for commercial distribution for health-related purposes to an end user', 'YES 807.20(a)(6)', 'YES 807.20(a)(6)'],
              ['Manufacturer of components that are not otherwise classified as a finished device, that are distributed only to a finished device manufacturer', 'NO 807.65(a)', 'NO'],
              ['Manufacturer (including kit assemblers)', 'YES 807.20(a)', 'YES 807.20(a)'],
              ['Manufactures a custom device', 'YES 807.20(a)(2)', 'YES 807.20(a)(2)'],
              ['Refurbishers or remarketers of used devices already in commercial distribution in the United States', 'NO', 'NO'],
              ['Relabeler or repackager', 'YES 807.20(a)(3)', 'YES 807.20(a)(3)'],
              ['Remanufacturer', 'YES', 'YES'],
              ['Reprocessor of single-use devices', 'YES 807.20', 'YES 807.20'],
              ['Specification consultant only', 'NO', 'NO'],
              ['Specification developer', 'YES 807.20(a)(1)', 'YES 807.20(a)(1)'],
              ['U.S. manufacturer of export-only devices', 'YES 807.20(a)(2)', 'YES 807.20(a)(2)'],
              ['Wholesale distributor that is not a manufacturer or importer', 'NO', 'NO'],
            ],
            source: { label: 'FDA: Who Must Register, List and Pay the Fee', href: FDA_LINKS.whoMustRegister },
          },
          {
            type: 'table',
            caption: 'Foreign establishments',
            headers: ['Activity', 'Register', 'List'],
            rows: [
              ['Contract manufacturer (including contract packagers)', 'YES 807.40(a)', 'YES 807.40(a)'],
              ['Contract sterilizer', 'YES 807.40(a)', 'YES 807.40(a)'],
              ['Custom device manufacturers', 'YES 807.20(a)(2)', 'YES 807.20(a)(2)'],
              ['Device being investigated under IDE', 'NO 812.1(a)', 'NO 812.1(a), 807.40(c)'],
              ['Foreign exporter of devices located in a foreign country', 'YES 807.40(a)', 'YES 807.40(a)'],
              ['Foreign manufacturers (including kit assemblers)', 'YES 807.40(a)', 'YES 807.40(a)'],
              ['Maintains complaint files as required under 21 CFR 820.198', 'YES', 'YES'],
              ['Manufacturer of accessories or components that are packaged or labeled for commercial distribution for health-related purposes to an end user', 'YES 807.20(a)(5)', 'YES 807.20(a)(5)'],
              ['Manufacturer of components that are distributed only to a finished device manufacturer', 'NO 807.65(a)', 'NO'],
              ['Relabeler or repackager', 'YES 807.20(a)(3)', 'YES 807.20(a)(3)'],
              ['Remanufacturer', 'YES', 'YES'],
              ['Reprocessor of single-use devices', 'YES 807.20(a)', 'YES 807.20(a)'],
              ['Specification developer', 'YES', 'YES'],
            ],
            source: { label: 'FDA: Who Must Register, List and Pay the Fee', href: FDA_LINKS.whoMustRegister },
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Does FDA registration and listing mean my device is cleared or approved?',
        answer: 'No. Completing establishment registration and device listing does not mean that a device has received FDA clearance or approval.',
      },
      {
        question: 'Do foreign manufacturers need a U.S. Agent?',
        answer: 'Yes. Foreign manufacturers must also comply with U.S. Agent requirements. MedReg provides U.S. Agent services.',
      },
    ],
    related: ['us-agent-services', 'fda-device-classification', 'small-business-determination'],
  },

  // 3 ─────────────────────────────────────────────────────────────────────────
  {
    slug: '510k-premarket-notification',
    title: 'Premarket Notification (PMN) / 510(k) Application Services',
    summary: 'End-to-end 510(k): pathway, predicate, testing strategy, documentation and eSTAR submission.',
    icon: '/assets/Premarket-Submission.png',
    metaTitle: 'FDA 510(k) Premarket Notification Consultant',
    metaDescription:
      'End-to-end FDA 510(k) support: Traditional, Special or Abbreviated pathway, predicate search, testing strategy, submission documents and eSTAR filing.',
    intro: [
      'At MedReg, we provide end-to-end regulatory support for FDA 510(k) submissions, helping medical device manufacturers navigate the premarket clearance process and prepare a comprehensive submission in accordance with applicable FDA requirements.',
    ],
    sections: [
      {
        heading: 'Types of 510(k)',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Traditional 510(k)', text: 'May be used for any original 510(k) or for a change to a previously cleared device under 510(k).' },
              { title: 'Special 510(k)', text: 'Device manufacturers may choose to submit a Special 510(k) for changes to their own existing device.' },
              {
                title: 'Abbreviated 510(k)',
                text: 'Device manufacturers may choose to submit an Abbreviated 510(k) when the submission relies on:',
                items: ['FDA guidance document(s)', 'Demonstration of compliance with special control(s) for the device type', 'Voluntary consensus standard(s)'],
              },
            ],
          },
        ],
      },
      {
        heading: 'Our 510(k) process',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: '510(k) pathway determination',
                text: 'We assess the applicability of a 510(k) submission and guide you in selecting the appropriate pathway (Traditional, Special, or Abbreviated 510(k)) based on your device characteristics and applicable FDA requirements.',
              },
              {
                title: 'Regulatory guidance and standards identification',
                text: "We identify relevant FDA guidance documents (Guidance Document Database) and applicable FDA-recognized consensus standards (FDA Recognized Consensus Standards Database) to support your device's regulatory strategy and testing requirements.",
              },
              {
                title: 'Predicate device search and selection',
                text: 'We conduct a detailed predicate device search and help identify the most suitable predicate device(s) to support the substantial equivalence demonstration.',
              },
              {
                title: 'Testing strategy and standards compliance',
                text: 'We provide guidance on identifying applicable performance, safety and biocompatibility testing requirements in accordance with relevant FDA guidance documents and recognized consensus standards. We also help identify testing requirements for transport validation, packaging validation, sterilization validation and mechanical testing, where applicable.',
              },
              {
                title: 'Preparation of submission documentation',
                text: 'We prepare and review the technical and regulatory documents needed to support your 510(k) submission (see the list below).',
              },
              {
                title: 'eSTAR preparation',
                // verified: FDA requires eSTAR for 510(k)s submitted on or after 1 Oct 2023 unless exempted.
                text: 'We assist in completing the FDA electronic Submission Template and Resource (eSTAR), which is required for 510(k) submissions unless an exemption applies.',
              },
              {
                title: 'Electronic submission support',
                text: 'We support the finalization and electronic submission of the completed eSTAR package through the applicable FDA submission portal.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Submission documentation we prepare and review',
        blocks: [
          { type: 'p', text: 'Including, but not limited to:' },
          {
            type: 'list',
            columns: true,
            items: [
              'Cover letter',
              'Device description',
              'Device pictures / images',
              'List of system components',
              'Labelling (immediate label, Instructions for Use (IFU), surgical technique, packaging labels (secondary / tertiary))',
              'Substantial equivalence comparison',
              'Biocompatibility evaluation',
              'Performance testing documentation, as applicable',
              'Summaries of test reports (transport validation, sterilization validation, biocompatibility reports, etc.), as applicable',
              'Reprocessing documentation, where applicable',
              'Software documentation, as required',
              'Human factors and usability engineering evaluation, where applicable',
              'Executive summary',
            ],
          },
        ],
      },
      {
        heading: 'Guidance documents by critical aspect',
        blocks: [
          {
            type: 'table',
            headers: ['Critical aspect', 'Available guidance'],
            rows: [
              ['Biocompatibility', 'FDA guidance: Biological evaluation of medical devices'],
              ['IEC testing', 'Electromagnetic Compatibility Aspects of Medical Device Quality Systems'],
              ['EMC testing', 'Electromagnetic Compatibility (EMC) of Medical Devices'],
              ['Wireless connection', 'Radio Frequency Wireless Technology in Medical Devices'],
              [
                'Software',
                'Off-The-Shelf Software Use in Medical Devices\nContent of Premarket Submissions for Device Software Functions\nPolicy for Device Software Functions and Mobile Medical Applications\nDeciding When to Submit a 510(k) for a Software Change to an Existing Device\nGeneral Principles of Software Validation',
              ],
              ['Cybersecurity', 'Cybersecurity in Medical Devices\nPostmarket Management of Cybersecurity in Medical Devices'],
              ['Interoperability', 'Design Considerations and Pre-market Submission Recommendations for Interoperable Medical Devices'],
              ['Usability', 'Applying Human Factors and Usability Engineering to Medical Devices\nContent of Human Factors Information in Medical Device Marketing Submissions'],
              ['Performance testing', 'Recommended Content and Format of Non-Clinical Bench Performance Testing'],
              ['Clinical trial', 'Regulations: Good Clinical Practice and Clinical Trials'],
              ['Animal testing', 'General Considerations for Animal Studies Intended to Evaluate Medical Devices'],
              ['Shelf life', 'Shelf Life of Medical Devices'],
              ['Sterile device', 'Submission and Review of Sterility Information in Premarket Notification (510(k)) Submissions\nContainer and Closure System Integrity Testing in Lieu of Sterility Testing'],
              ['Sterilization validation', 'Sterilization Process Controls'],
              ['Reprocessing validation', 'Reprocessing Medical Devices in Health Care Settings: Validation Methods and Labeling'],
              ['Cleaning validation only', 'Reprocessing Medical Devices in Health Care Settings: Validation Methods and Labeling'],
              ['Disinfection validation only', 'Reprocessing Medical Devices in Health Care Settings: Validation Methods and Labeling'],
              ['Pyrogenic validation', 'FDA guidance: Pyrogen and Endotoxins Testing'],
              ['Sterility test method validation', 'Sterility Test – GMP'],
              [
                'Bioburden test method validation',
                'ICH Q12: Technical and Regulatory Considerations\nFDA: Microbiological Quality Considerations in Non-sterile Drug Manufacturing\nUSP <61> Microbiological Examination of Nonsterile Products: Microbial Enumeration Tests\nUSP <62> Microbiological Examination of Nonsterile Products: Tests for Specified Microorganisms\nFDA ORA Microbiology Manual',
              ],
              ['Mechanical testing', 'Product-specific guidance may be available.'],
              ['Product performance', '510(k) guidance documents. Product-specific guidance may be available.'],
            ],
            source: { label: 'Search FDA guidance documents', href: FDA_LINKS.guidance },
          },
          {
            type: 'table',
            caption: 'Applicable regulations',
            headers: ['Topic', 'Regulation'],
            rows: [
              ['General device labeling', '21 CFR Part 801'],
              ['Use of symbols', '21 CFR 801.15'],
              ['In vitro diagnostic products', '21 CFR Part 809'],
              ['Investigational device exemptions', '21 CFR Part 812'],
              ['Unique device identification', '21 CFR Part 830'],
              ['Good manufacturing practices (QMSR)', '21 CFR Part 820'],
              ['General electronic products', '21 CFR Part 1010'],
            ],
          },
          {
            type: 'links',
            title: 'Official databases',
            items: [
              { label: 'FDA Guidance Document Database', href: FDA_LINKS.guidance },
              { label: 'FDA Recognized Consensus Standards Database', href: FDA_LINKS.standards },
            ],
          },
        ],
      },
      {
        heading: '510(k) process timeline',
        blocks: [
          {
            type: 'timeline',
            items: [
              { when: 'Day 0', title: 'eSTAR submission', text: '510(k) submission via eSTAR.' },
              { when: 'Day 15', title: 'Acceptance review', text: 'Within 15 days of receipt of the submission, the submitter receives the results of the acceptance review.' },
              { when: 'Day 60', title: 'Substantive and interactive review', text: 'FDA conducts the substantive review and interactive review.' },
              { when: 'Day 90', title: 'FDA decision letter', text: 'FDA issues the decision letter to the submitter.' },
            ],
            // verified: MDUFA goals are counted in FDA days; the clock stops while FDA waits for an additional-information response.
            note: 'Days are FDA review days. The review clock stops while FDA waits for your response to an additional information request.',
          },
          {
            type: 'callout',
            text: 'FDA user fees: FDA charges a user fee for reviewing 510(k) submissions. These fees are updated annually, at the beginning of each fiscal year, which starts on 1 October. We guide you on the applicable fee category and payment requirements for your submission.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Is eSTAR mandatory for a 510(k)?',
        answer: 'Yes. FDA requires 510(k) submissions to be made using the electronic Submission Template and Resource (eSTAR), unless an exemption applies. MedReg prepares and submits the eSTAR package.',
      },
      {
        question: 'How long does FDA take to review a 510(k)?',
        answer: 'The acceptance review result comes within 15 days, substantive and interactive review by day 60, and the decision letter by day 90. These are FDA review days; the clock stops while FDA waits for answers to additional information requests.',
      },
      {
        question: 'Which type of 510(k) should I submit?',
        answer: 'A Traditional 510(k) can be used for any original 510(k) or a change to a cleared device; a Special 510(k) for changes to your own existing device; and an Abbreviated 510(k) when the submission relies on FDA guidance, special controls or voluntary consensus standards. We assess which applies to your device.',
      },
    ],
    related: ['q-submission-pre-submission', 'small-business-determination', 'biocompatibility-evaluation'],
  },

  // 4 ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'small-business-determination',
    title: 'FDA Small Business Determination Support',
    summary: 'Qualify for reduced or waived FDA user fees with a Small Business Determination request.',
    icon: '/assets/Small-Business-Documentation.png',
    metaTitle: 'FDA Small Business Determination (SBD) Support',
    metaDescription:
      'MedReg prepares your FDA Small Business Determination request so eligible device companies can access reduced or waived FDA user fees.',
    intro: [
      // verified: client text said "Form FDA 3602N"; FDA's forms are 3602 (U.S.) and 3602A (foreign).
      'At MedReg, we assist eligible medical device businesses in applying for FDA Small Business Determination to access applicable user fee reductions or waivers. Our support includes guidance on eligibility criteria, preparation of the Small Business Request (SBR), completion of Form FDA 3602 (businesses headquartered in the U.S.) or Form FDA 3602A (businesses headquartered outside the U.S.), and compilation of the required financial documentation, including information on affiliates, in accordance with FDA requirements.',
    ],
    sections: [
      {
        heading: 'Eligibility thresholds',
        blocks: [
          { type: 'p', text: 'The applicable threshold depends on the benefit being sought. Gross receipts or sales include those of the business and its affiliates.' },
          {
            type: 'table',
            headers: ['Gross receipts or sales', 'Benefit'],
            rows: [
              ['$100 million or less', 'Reduced application / report fees'],
              ['$30 million or less', 'First premarket application / report fee waiver'],
              // verified: FDA grants this waiver only where paying the fee would be a financial hardship (FDA MDUFA fees page).
              ['$1 million or less', 'Annual registration fee waiver, where paying the fee would be a financial hardship as determined by FDA'],
            ],
          },
        ],
      },
    ],
    related: ['510k-premarket-notification', 'establishment-registration-device-listing'],
  },

  // 5 ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'q-submission-pre-submission',
    title: 'Pre-Submission / Q-Submission',
    summary: 'Get FDA feedback on regulatory, scientific, clinical and nonclinical questions before you submit.',
    icon: '/assets/Q-Submission.png',
    metaTitle: 'FDA Pre-Submission (Q-Sub) Support',
    metaDescription:
      'MedReg prepares FDA Q-Submission requests (Pre-Sub, SIR, Study Risk Determination, Informational Meeting) and plans your meeting with FDA.',
    intro: [
      'At MedReg, we help medical device manufacturers prepare FDA Q-Submission requests to obtain feedback on regulatory, scientific, clinical, and nonclinical questions before a planned FDA submission.',
    ],
    sections: [
      {
        heading: 'What is a Q-Submission?',
        blocks: [
          {
            type: 'p',
            text: 'A Pre-Submission provides the opportunity for a submitter to obtain FDA feedback prior to an intended premarket submission. The request should include specific questions regarding review topics relevant to a planned marketing submission.',
          },
        ],
      },
      {
        heading: 'Types of Q-Submission and timeframes',
        blocks: [
          {
            type: 'table',
            headers: ['Q-Submission type', 'Feedback format', 'Timeframe'],
            rows: [
              ['Pre-Submission', 'Meeting with written feedback provided in advance', 'Written feedback: 70 days or 5 days before the scheduled meeting, whichever is sooner. Meeting: date by mutual agreement (typically day 60–75)'],
              ['Pre-Submission', 'Written feedback only', '70 days'],
              ['Submission Issue Request (SIR)', 'Meeting or written feedback', '21 days (as resources permit) if received within 60 days of the applicable FDA letter; 70 days (as resources permit) if received more than 60 days after'],
              ['Study Risk Determination', 'Formal letter', '90 days'],
              ['Informational Meeting', 'Meeting', '90 days'],
              ['PMA Day 100 Meeting', 'Meeting', '100 days from the PMA filing date'],
            ],
            // verified: FDA Q-Sub guidance says meeting dates 60–75 days after receipt are most feasible (client text said 70–75).
          },
        ],
      },
      {
        heading: 'Q-Submission process',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Submission content',
                text: 'A Q-Submission should be written in English. It includes a cover letter, device description, proposed indications for use, meeting information, method of feedback, regulatory history, etc.',
              },
              {
                title: 'FDA submission tracking',
                text: 'Q-Submissions are submitted to CDRH, whether original, supplement or amendment. CDRH assigns a number for tracking the submission.',
              },
              {
                title: 'Meeting information',
                text: "Meetings allow an open discussion and exchange of technical, scientific, and regulatory information that can help build a common understanding of FDA's views on clinical, nonclinical, or analytical studies related to an IDE, Accessory Classification Request, or marketing submission.",
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does FDA take to respond to a Pre-Submission?',
        answer: 'For written feedback only, 70 days. If a meeting is requested, written feedback is provided 70 days after receipt or 5 days before the scheduled meeting, whichever is sooner.',
      },
    ],
    related: ['510k-premarket-notification', 'fda-device-classification'],
  },

  // 6 ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'gudid-registration',
    title: 'GUDID Registration Services',
    summary: 'UDI requirements, GUDID data preparation, account set-up and submission (web or HL7 SPL).',
    icon: '/assets/GUDID-Submission.png',
    metaTitle: 'GUDID Registration & UDI Support',
    metaDescription:
      'MedReg supports UDI requirements and FDA GUDID submissions: data preparation, account set-up, web or HL7 SPL submission and record maintenance.',
    intro: [
      'The FDA Global Unique Device Identification Database (GUDID) stores device identification information to support the implementation of Unique Device Identification (UDI) requirements. MedReg provides complete guidance and support to obtain UDIs, which are needed for GUDID registration.',
      'A UDI is composed of two parts: the Device Identifier (DI) and the Production Identifier(s) (PI). GUDID contains Device Identifiers (DI) only; however, GUDID data indicates which PIs are on the device label. Registered GUDID data can be viewed in the AccessGUDID database.',
    ],
    sections: [
      {
        heading: 'Two ways to submit data to GUDID',
        blocks: [
          {
            type: 'table',
            headers: ['Option', 'Best for'],
            rows: [
              ['Option 1: GUDID web application (submit data online)', 'Best if you have a few records to submit to GUDID\nEasy to use\nRequires manual data entry'],
              ['Option 2: HL7 SPL file submission through the FDA Electronic Submissions Gateway (XML format)', 'Best if you have many records to submit to GUDID\nAllows bulk submission\nRequires some technical knowledge\nImportant to retain and organize record submission files'],
            ],
            note: 'Source: Official FDA site – Submit Data to GUDID.',
          },
        ],
      },
      {
        heading: 'The process',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'UDI requirements', text: 'Determine applicable UDI requirements and obtain UDIs through an FDA-accredited issuing agency, as applicable.' },
              { title: 'GUDID data preparation', text: 'Compile the required Device Identifier (DI) information, including device identification, labelling, and other applicable data elements.' },
              { title: 'Account and identifier setup', text: 'Establish the required GUDID account access and verify applicable business identification information.' },
              { title: 'Submission method selection', text: 'Choose manual data entry through the GUDID web application for individual records or HL7 SPL electronic submission for bulk data, as appropriate.' },
              { title: 'Data submission and maintenance', text: 'Review the accuracy of submitted information and establish procedures for updating GUDID records when required.' },
            ],
          },
          { type: 'p', text: 'MedReg supports you throughout this process, helping organize the required information and navigate applicable FDA UDI and GUDID requirements.' },
          { type: 'links', items: [{ label: 'AccessGUDID database', href: FDA_LINKS.accessGudid }] },
        ],
      },
    ],
    faqs: [
      {
        question: 'Does GUDID store the full UDI?',
        answer: 'No. GUDID contains Device Identifiers (DI) only, although the GUDID data indicates which Production Identifiers (PI) appear on the device label.',
      },
    ],
    related: ['medical-device-labelling', 'establishment-registration-device-listing'],
  },

  // 7 ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'us-agent-services',
    title: 'U.S. Agent Services',
    summary: 'Reliable U.S. Agent representation for foreign medical device and IVD establishments.',
    icon: '/assets/US-Agent-Service.png',
    metaTitle: 'US FDA Agent Services for Foreign Manufacturers',
    metaDescription:
      'MedReg provides U.S. Agent services for foreign medical device and IVD establishments: FDA communication, import questions and inspection scheduling.',
    intro: [
      // verified: 21 CFR 807.40(b) — the requirement applies to foreign establishments required to register.
      'Medical device and IVD establishments located outside the United States that are required to register with the US Food and Drug Administration (FDA) must designate a U.S. Agent. The U.S. Agent must reside in the United States or maintain a place of business there. Your U.S. Agent connects the FDA and your business.',
    ],
    sections: [
      {
        heading: 'What are the responsibilities of U.S. Agents?',
        blocks: [
          { type: 'p', text: 'The responsibilities of the U.S. Agent are limited and include:' },
          {
            type: 'list',
            items: [
              'Assisting FDA in communications with the foreign establishment.',
              "Responding to questions concerning the foreign establishment's devices that are imported or offered for import into the United States.",
              'Assisting FDA in scheduling inspections of the foreign establishment.',
              'If FDA is unable to contact the foreign establishment directly or expeditiously, FDA may provide information or documents to the U.S. Agent, and such an action is considered equivalent to providing the same information or documents to the foreign establishment.',
            ],
          },
          {
            type: 'p',
            text: 'Contact MedReg for U.S. Agent services for reliable regulatory representation, professional support, and seamless coordination with the US FDA to help meet your medical device regulatory obligations.',
          },
        ],
      },
    ],
    related: ['establishment-registration-device-listing', 'regulatory-reporting-mdr'],
  },

  // 8 ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'medical-device-labelling',
    title: 'Medical Device Labelling',
    summary: 'Labels, packaging and IFU reviewed and prepared against 21 CFR Part 801.',
    icon: '/assets/Labeling-Review.png',
    metaTitle: 'FDA Medical Device Labeling (21 CFR 801)',
    metaDescription:
      'MedReg reviews and prepares medical device labels, packaging and IFU to align with FDA labeling requirements under 21 CFR Part 801, including UDI.',
    intro: [
      'MedReg provides medical device labelling support to help manufacturers ensure that their device labels, packaging, and accompanying documentation align with applicable U.S. FDA labelling requirements under 21 CFR Part 801 and other relevant regulations.',
      'Our team assists manufacturers in reviewing, preparing, and updating medical device labelling to ensure that essential product information, intended use, instructions, and safety-related information are appropriately communicated to users.',
    ],
    sections: [
      {
        heading: 'What is medical device labelling?',
        blocks: [
          {
            type: 'p',
            text: 'Medical device labelling is an essential component of FDA regulatory compliance. Under 21 CFR Part 801, manufacturers and other responsible parties must ensure that applicable labelling requirements are met. Medical device labelling extends beyond the physical product label. It includes labels and other written, printed, or graphic information appearing on the device, its packaging, or accompanying materials.',
          },
          { type: 'p', text: '21 CFR Part 801 establishes the general and device-specific labelling requirements that medical devices must meet to be marketed in the United States. Key provisions include:' },
          // verified: subpart titles and ranges checked against 21 CFR Part 801. The client text described Subparts B and C
          // as OTC/prescription rules; Subpart B is UDI labeling, Subpart C is OTC, Subpart D covers exemptions including prescription devices.
          {
            type: 'table',
            headers: ['Provision', 'What it covers'],
            rows: [
              ['Section 801.1', 'Labelling must include the name and place of business of the manufacturer, packer, or distributor.'],
              ['Section 801.5', 'Directions for use must be adequate for the layperson or healthcare provider.'],
              ['Section 801.15', 'Required label statements must be prominent, legible and appropriately placed; also covers the use of symbols.'],
              ['Subpart B (801.20 – 801.57)', 'Labelling requirements for Unique Device Identification (UDI).'],
              ['Subpart C (801.60 – 801.63)', 'Labelling requirements for over-the-counter (OTC) devices.'],
              ['Subpart D (801.109 – 801.128)', 'Exemptions from adequate directions for use, including prescription devices (801.109).'],
            ],
          },
          {
            type: 'p',
            text: "The extent of labelling information required depends on the device's risk classification and intended purpose. For instance, Class III implantable devices generally require more comprehensive labelling than low-risk Class I accessories. Certain devices may be exempt from the requirement for adequate directions for use, subject to the applicable conditions: for example, prescription devices under 21 CFR 801.109, or devices for use in teaching, law enforcement, research and analysis under 21 CFR 801.125.",
          },
        ],
      },
      {
        heading: 'FDA-compliant medical device labels: general requirements',
        blocks: [
          { type: 'p', text: 'Medical device labels must contain adequate information to support the safe and effective use of the device. The essential labelling elements include:' },
          {
            type: 'list',
            items: [
              { label: 'Device identification and intended purpose', text: 'Clearly identify the medical device and specify its intended use.' },
              { label: 'Instructions for Use (IFU)', text: 'Provide step-by-step usage directions, including setup, maintenance, and disposal.' },
              { label: 'Indications, contraindications, and precautions', text: 'Specify the intended patient population, circumstances in which the device should not be used, and relevant precautions.' },
              { label: 'Warnings and cautions', text: 'Communicate potential hazards and safety measures necessary to prevent harm arising from improper use.' },
              { label: 'Manufacturer information', text: "Provide the manufacturer's name, address, and applicable contact details." },
              { label: 'Manufacture and expiration dates', text: 'Especially critical for sterile or time-sensitive products.' },
              { label: 'Lot or serial number', text: 'For device traceability.' },
              { label: 'Unique Device Identification (UDI)', text: 'Include the required UDI information in accordance with applicable FDA requirements under 21 CFR Part 801, including § 801.40, where applicable. Refer to FDA UDI labelling requirements for detailed specifications.' },
              { label: 'Standardized symbols', text: 'Recognized medical device symbols, such as those specified in ISO 15223-1, may be used in accordance with applicable FDA requirements. Symbols that are not adequately recognized or understood may require accompanying explanations or a glossary, as applicable.' },
            ],
          },
        ],
      },
    ],
    related: ['gudid-registration', '510k-premarket-notification'],
  },

  // 9 ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'qmsr-implementation',
    title: 'QMSR Implementation',
    summary: 'Build or transition your QMS to 21 CFR Part 820 (QMSR), which incorporates ISO 13485:2016.',
    icon: '/assets/QMS-Implementation.png',
    metaTitle: 'FDA QMSR (21 CFR 820) Implementation',
    metaDescription:
      'MedReg implements FDA QMSR (21 CFR Part 820, incorporating ISO 13485:2016): gap analysis, documentation updates, risk management, training and inspection readiness.',
    intro: [
      'We provide a full range of QMSR compliance services designed to help medical device companies understand and adhere to the new regulatory requirements, having assisted numerous businesses with QSR and ISO 13485:2016 compliance. Our services are tailored to the unique challenges presented by the QMSR, using our knowledge to enable a seamless transition.',
      'We help you allocate your resources more effectively so that your shift to QMSR compliance is finished on schedule, within budget, and without interfering with regular business operations. Every QMSR support engagement is customized to meet your specific needs and may involve, but is not restricted to, the support described below.',
    ],
    sections: [
      {
        heading: 'Development of the quality management system',
        blocks: [
          { type: 'p', text: 'We guide and assist you in developing a quality management system in accordance with 21 CFR Part 820 (QMSR).' },
          { type: 'h', text: '§ 820.10 — Requirements for a quality management system' },
          {
            type: 'list',
            items: [
              { label: '(a) Documented quality management system', text: 'Requirements of ISO 13485.' },
              {
                label: '(b) Applicable regulatory requirements',
                text: '(1) ISO 13485 Clause 7.5.8, Identification: Unique Device Identification (UDI) under 21 CFR Part 830. (2) ISO 13485 Clause 7.5.9.1, Traceability, general: 21 CFR Part 821, where applicable. (3) ISO 13485 Clause 8.2.3, Reporting to regulatory authorities: 21 CFR Part 803. (4) ISO 13485 Clauses 7.2.3, 8.2.3 and 8.3.3, Advisory notices: 21 CFR Part 806.',
              },
              {
                label: '(c) Design and development',
                text: 'Manufacturers of Class II, Class III, and some Class I devices must comply with the requirements in Design and Development, Clause 7.3 and its subclauses in ISO 13485. This covers (1) devices automated with computer software and (2) the Class I devices listed in the table below.',
              },
              { label: '(d) Devices that support or sustain life', text: 'Must comply with the requirements in Traceability for Implantable Devices, Clause 7.5.9.2 in ISO 13485.' },
              { label: '(e) Enforcement', text: 'Failure to comply renders a device adulterated under section 501(h) of the Federal Food, Drug, and Cosmetic Act.' },
            ],
          },
          DESIGN_CONTROL_CLASS_I_TABLE,
        ],
      },
      {
        heading: 'Subpart B — Supplemental provisions',
        blocks: [
          { type: 'h', text: '§ 820.35 — Control of records (in addition to Clause 4.2.5 of ISO 13485)' },
          {
            type: 'cards',
            items: [
              {
                title: '(a) Records of complaints',
                items: ['Device name', 'Date the complaint was received', 'UDI, UPC and other device identification', "Complainant's name, address and telephone number", 'Nature and details of the complaint', 'Correction or corrective action taken', 'Reply to the complainant'],
              },
              {
                title: '(b) Records of servicing activities',
                items: ['Device name', 'UDI, UPC and other device identification', 'Date of service', 'Individual(s) who serviced the device', 'Service performed', 'Test and inspection data'],
              },
              { title: '(c) Unique Device Identification', text: 'In addition to the requirements of Clauses 7.5.1, 7.5.8 and 7.5.9 in ISO 13485.' },
              { title: '(d) Confidentiality', text: 'Records marked confidential are handled under FDA’s public information regulations.' },
            ],
          },
          { type: 'h', text: '§ 820.45 — Device labelling and packaging controls' },
          {
            type: 'cards',
            items: [
              {
                title: '(a) Examination of labelling and packaging for accuracy',
                items: ['Correct UDI, UPC or other device identification', 'Expiration date', 'Storage instructions', 'Handling instructions', 'Additional processing instructions'],
              },
              { title: '(b) Documented release of labelling', text: 'In accordance with Clause 4.2.5 of ISO 13485.' },
              { title: '(c) Prevention of mix-ups', text: 'Prevention of labelling and packaging mix-ups, and documentation of inspection results in accordance with Clause 4.2.5 of ISO 13485.' },
            ],
          },
        ],
      },
      {
        heading: 'How we support your QMSR transition',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Analysis of regulatory gaps', text: 'We thoroughly examine your existing quality management system against the QMSR to find weaknesses and areas for improvement.' },
              { title: 'Tailored compliance approach', text: 'We create a customized plan to close the gaps found in the gap analysis, helping your systems meet QMSR requirements.' },
              { title: 'Integration of risk management', text: "To support the QMSR's emphasis on risk-based decision-making, we help you integrate risk management procedures across your quality management system." },
              { title: 'Updates to documentation', text: 'To meet the documentation requirements of the QMSR and ISO 13485:2016, we help you review and update your SOPs, quality manuals, and records.' },
              { title: 'Training and development for employees', text: 'We offer specialized training sessions so your team understands the QMSR changes and their roles and duties within the revised system.' },
              { title: 'Getting ready for FDA inspections', text: 'We use readiness assessments and simulation audits to prepare your team for FDA inspections under the QMSR.' },
            ],
          },
        ],
      },
    ],
    related: ['design-control-documentation', 'device-master-record', 'device-history-record'],
  },

  // 10 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'fda-regulatory-training',
    title: 'Training',
    summary: 'Practical training on FDA classification, 510(k), QMSR, UDI, labelling, biocompatibility and more.',
    icon: '/assets/Regulatory-Compliance.png',
    metaTitle: 'US FDA Medical Device Regulatory Training',
    metaDescription:
      'MedReg training on FDA classification, 510(k), registration and listing, UDI/GUDID, QMSR and ISO 13485, design controls, labelling, MDR reporting and more.',
    intro: [
      'MedReg offers specialized training programs designed to enhance regulatory knowledge and practical understanding of medical device compliance requirements. Our training covers key regulatory frameworks, submission pathways, quality management requirements, and technical documentation applicable to medical devices, with a focus on FDA regulations and other relevant international requirements.',
    ],
    sections: [
      {
        heading: 'Training topics',
        blocks: [
          {
            type: 'list',
            columns: true,
            items: [
              'FDA Medical Device Classification',
              'Premarket Notification (510(k)) Submissions',
              'FDA Establishment Registration and Device Listing',
              'UDI and GUDID Registration',
              'QMSR and ISO 13485 Compliance',
              'Design Control Documentation',
              'Medical Device Labelling',
              'Biocompatibility and Biological Safety Evaluation',
              'Risk Management and Technical Documentation',
              'Regulatory Reporting and Medical Device Reporting (MDR)',
              'FDA Q-Submission / Pre-Submission',
              'Device Master Record (DMR) and Device History Record (DHR)',
              'FDA Inspection Readiness',
              'Import and Export',
              'U.S. Agent Requirements',
            ],
          },
        ],
      },
      {
        heading: 'Who it is for',
        blocks: [
          {
            type: 'p',
            text: 'The programs are intended to help medical device manufacturers, regulatory affairs professionals, quality assurance teams, and other industry personnel understand applicable regulatory obligations and develop the skills needed to implement effective compliance practices.',
          },
          {
            type: 'p',
            text: 'Our training sessions address both the fundamental principles and practical aspects of regulatory compliance, helping participants understand device classification, regulatory pathway selection, premarket submission preparation, quality system implementation, labelling requirements, and biological safety evaluation.',
          },
        ],
      },
    ],
    related: ['qmsr-implementation', '510k-premarket-notification'],
  },

  // 11 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'regulatory-reporting-mdr',
    title: 'Regulatory Reporting',
    summary: '21 CFR Part 803 Medical Device Reporting: who reports, what, how fast and what records to keep.',
    icon: '/assets/Complaint-File-Submission.png',
    metaTitle: 'FDA Medical Device Reporting (21 CFR 803)',
    metaDescription:
      'Understand FDA Medical Device Reporting under 21 CFR Part 803: who must report, reporting timelines for user facilities, importers and manufacturers, and MAUDE.',
    intro: [
      'Under 21 CFR Part 803, FDA requires device user facilities, manufacturers, importers and distributors to report, or keep records of, device-related adverse events. These reports help FDA ensure that devices are not adulterated or misbranded and remain safe and effective for their intended use.',
      'Part 803 sets out who reports, what counts as reportable, how fast reports are due, what each report must contain, and what records must be kept.',
    ],
    sections: [
      {
        heading: 'Who must report, and what each role owes FDA',
        blocks: [
          {
            type: 'table',
            headers: ['Role', 'What they report', 'Records and procedures'],
            rows: [
              ['Device user facility (hospital, ambulatory surgical facility, nursing home, outpatient diagnostic or treatment facility)', 'Deaths and serious injuries, but not malfunctions', 'Keep adverse event files, maintain written MDR procedures and submit an annual report'],
              ['Manufacturer', 'Deaths, serious injuries and certain malfunctions', 'Keep MDR event files, maintain written MDR procedures and submit supplemental and follow-up reports'],
              ['Importer', 'Deaths and serious injuries to FDA and the manufacturer; certain malfunctions to the manufacturer', 'Keep MDR event files and maintain written MDR procedures'],
              ['Distributor', 'No reporting obligation', 'Must maintain device complaint (incident) records'],
            ],
          },
        ],
      },
      {
        heading: 'Reporting timelines at a glance',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                title: 'User facilities',
                items: [
                  'Death: report to FDA and the manufacturer, if known, within 10 work days.',
                  'Serious injury: report to the manufacturer within 10 work days, or to FDA if the manufacturer is unknown.',
                  'Annual report on Form FDA 3419: due to FDA by 1 January each year.',
                ],
              },
              {
                title: 'Importers',
                items: ['Death or serious injury: report to FDA and the manufacturer within 30 calendar days.', 'Malfunction: report to the manufacturer within 30 calendar days.'],
              },
              {
                title: 'Manufacturers',
                items: [
                  'Death, serious injury or reportable malfunction: report to FDA within 30 calendar days.',
                  'Event needing remedial action to prevent an unreasonable risk of substantial harm to public health, or an event FDA requests in writing (5-day report): report to FDA within 5 work days.',
                  'Supplemental or follow-up information not in the initial report: submit to FDA within 30 calendar days of receiving it.',
                ],
              },
            ],
          },
          {
            type: 'p',
            text: 'All reports must be in English (§ 803.13). Manufacturers and importers must file electronically unless FDA grants an exemption (§ 803.11, § 803.12).',
          },
        ],
      },
      {
        heading: 'Where MDR reports become public',
        blocks: [
          {
            type: 'p',
            text: "The reports FDA receives are housed in the public MAUDE database (Manufacturer and User Facility Device Experience), and FDA may disclose them after removing trade secret and personal information (§ 803.9). FDA's TPLC database (Total Product Life Cycle) then brings those adverse event reports together with premarket (PMA and 510(k)) and recall data by device product code, so a manufacturer's MDRs are visible to anyone researching its device type.",
          },
          {
            type: 'links',
            items: [
              { label: 'MAUDE database', href: FDA_LINKS.maude },
              { label: 'TPLC database', href: FDA_LINKS.tplc },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'How quickly must a manufacturer report a death or serious injury to FDA?',
        answer: 'Within 30 calendar days. Events that need remedial action to prevent an unreasonable risk of substantial harm to public health, or that FDA requests in writing, must be reported within 5 work days.',
      },
      {
        question: 'Do distributors have to file MDRs?',
        answer: 'No. Distributors have no reporting obligation under Part 803, but they must maintain device complaint (incident) records.',
      },
    ],
    related: ['qmsr-implementation', 'us-agent-services'],
  },

  // 12 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'design-control-documentation',
    title: 'Design Control Documentation',
    summary: 'Design and development documentation to ISO 13485 Clause 7.3, from planning to the design history file.',
    icon: '/assets/Product-Development.png',
    metaTitle: 'Design Control Documentation (ISO 13485 7.3)',
    metaDescription:
      'MedReg prepares design control documentation to ISO 13485 Clause 7.3 for Class II, Class III and specified Class I devices: inputs, outputs, verification, validation, DHF.',
    intro: [
      'We provide comprehensive design and development documentation support to medical device organizations for establishing effective design controls and demonstrating conformity with ISO 13485 requirements.',
      'Class II and Class III devices, and some Class I devices, must comply with the requirements in Design and Development, Clause 7.3 and its subclauses of ISO 13485. The Class I devices are listed below.',
    ],
    sections: [
      { heading: 'Class I devices subject to design controls', blocks: [DESIGN_CONTROL_CLASS_I_TABLE] },
      {
        heading: 'Deliverables',
        blocks: [
          {
            type: 'list',
            columns: true,
            items: [
              'Design and development planning',
              'Design input documentation',
              'Design review documentation',
              'Design output documentation',
              'Design verification',
              'Design validation',
              'Design transfer',
              'Design change management',
              'Design history files',
            ],
          },
        ],
      },
    ],
    related: ['qmsr-implementation', 'device-master-record'],
  },

  // 13 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'biocompatibility-evaluation',
    title: 'Biocompatibility Evaluation',
    summary: 'Risk-based biological evaluation per ISO 10993: BEP, BER, chemical characterization and test strategy.',
    icon: '/assets/Risk-Analysis.png',
    metaTitle: 'Biocompatibility Evaluation (ISO 10993) – BEP & BER',
    metaDescription:
      'Risk-based biological evaluation per ISO 10993: biological risk assessment, endpoint selection, chemical characterization, BEP, BER and waiver reports by a DABT toxicologist.',
    intro: [
      "Biological evaluation is a systematic, risk-based process used to determine the potential for an unacceptable adverse biological response resulting from direct or indirect contact between a medical device and the human body. It assesses the biological safety of the device's component materials in relation to its intended use, nature of body contact, and duration of contact.",
      'Refer to the FDA guidance document for further information: Use of International Standard ISO 10993-1, "Biological evaluation of medical devices – Part 1: Evaluation and testing within a risk management process".',
    ],
    sections: [
      {
        heading: 'ISO 10993 series: standards for biological evaluation',
        blocks: [
          {
            type: 'p',
            text: "The ISO 10993 series provides a framework for evaluating the biological safety of medical devices through risk assessment, chemical characterization, and the assessment of relevant biological effects. Each part addresses a specific aspect of the evaluation, supporting the selection of appropriate methods and endpoints based on the device's characteristics.",
          },
          {
            type: 'table',
            headers: ['Standard', 'Title / scope'],
            rows: [
              // verified: ISO 10993-1:2025 (6th edition) carries a new title; the FDA guidance above cites the earlier title.
              ['ISO 10993-1', 'Requirements and general principles for the evaluation of biological safety within a risk management process (2025 edition; earlier editions: Evaluation and testing within a risk management process)'],
              ['ISO 10993-2', 'Animal welfare requirements'],
              ['ISO 10993-3', 'Tests for genotoxicity, carcinogenicity and reproductive toxicity'],
              ['ISO 10993-4', 'Selection of tests for interactions with blood'],
              ['ISO 10993-5', 'Tests for in vitro cytotoxicity'],
              ['ISO 10993-6', 'Tests for local effects after implantation'],
              ['ISO 10993-7', 'Ethylene oxide sterilization residuals'],
              ['ISO 10993-9', 'Framework for identification and quantification of potential degradation products'],
              ['ISO 10993-10', 'Tests for skin sensitization'],
              ['ISO 10993-11', 'Tests for systemic toxicity'],
              ['ISO 10993-12', 'Sample preparation and reference materials'],
              ['ISO 10993-13', 'Identification and quantification of degradation products from polymeric medical devices'],
              ['ISO 10993-14', 'Identification and quantification of degradation products from ceramics'],
              ['ISO 10993-15', 'Identification and quantification of degradation products from metals and alloys'],
              ['ISO 10993-16', 'Toxicokinetic study design for degradation products and leachables'],
              // verified: ISO 10993-17:2023 title (client text used the 2002 title).
              ['ISO 10993-17', 'Toxicological risk assessment of medical device constituents (2023 edition; earlier edition: Establishment of allowable limits for leachable substances)'],
              ['ISO 10993-18', 'Chemical characterization of medical device materials within a risk management process'],
              ['ISO/TS 10993-19', 'Physico-chemical, morphological and topographical characterization of materials'],
              ['ISO/TS 10993-20', 'Principles and methods for immunotoxicology testing of medical devices'],
              ['ISO/TR 10993-22', 'Guidance on nanomaterials'],
              ['ISO 10993-23', 'Tests for irritation'],
              ['ISO/TR 10993-33', 'Guidance on tests to evaluate genotoxicity – Supplement to ISO 10993-3'],
            ],
          },
        ],
      },
      {
        heading: 'Key areas of biological evaluation',
        blocks: [
          { type: 'p', text: 'The ISO 10993 series provides guidance for assessing these endpoints and determining whether additional testing or supporting evidence is required. Key areas include:' },
          {
            type: 'steps',
            items: [
              { title: 'Biological risk assessment', text: 'Identification and evaluation of potential adverse biological responses associated with device materials and their intended use.' },
              { title: 'Biological endpoint selection', text: "Determination of relevant biological effects based on the device's contact category and duration of exposure." },
              { title: 'Chemical characterization', text: 'Assessment of device material composition and potential chemical constituents, including substances that may be released from the device.' },
              { title: 'Biocompatibility testing', text: 'Evaluation of relevant endpoints, such as cytotoxicity, sensitization, irritation, systemic toxicity, hemocompatibility, implantation effects, and other applicable biological effects.' },
              { title: 'Degradation assessment', text: 'Evaluation of degradation products and their potential biological implications, where relevant.' },
              { title: 'Documentation and reporting', text: 'Preparation and review of biological evaluation documentation and supporting evidence.' },
            ],
          },
        ],
      },
      {
        heading: 'Risk-based selection of biocompatibility tests',
        blocks: [
          {
            type: 'p',
            text: "Not every medical device requires every test within the ISO 10993 series. The appropriate evaluation strategy is determined by considering the device's intended use, nature and duration of body contact, material composition, manufacturing and sterilization processes, existing scientific evidence, and identified biological risks.",
          },
          {
            type: 'p',
            text: "Existing data, chemical characterization, and scientifically justified assessments may provide sufficient evidence for certain endpoints. Where additional testing is necessary, the selection and extent of testing should be justified based on the device's specific characteristics and applicable regulatory recommendations.",
          },
          { type: 'p', text: 'For modified devices, the evaluation should also determine whether the modification could affect the biological safety of components that directly or indirectly contact the human body.' },
        ],
      },
      {
        heading: 'Biological evaluation documentation and regulatory support',
        blocks: [
          { type: 'p', text: "The findings of the biological evaluation should be documented within the device's risk management process. Depending on the device and applicable regulatory requirements, the documentation may include:" },
          { type: 'list', columns: true, items: ['Biological Evaluation Plan (BEP)', 'Scientific justifications', 'Biological Evaluation Report (BER)', 'Waiver report'] },
          {
            type: 'cards',
            items: [
              {
                title: 'The 3R principles',
                text: 'The 3R principles promote the ethical use of animals in scientific research and in the evaluation of the biological safety of medical devices.',
                items: [
                  'Replace: where possible, alternative methods such as in vitro testing and computational models are used instead of animal testing.',
                  'Reduce: reduce the number of animals used without compromising scientific validity.',
                  'Refine: modify procedures to minimise pain, suffering and distress to animals.',
                ],
              },
            ],
          },
          { type: 'p', text: 'The 3Rs support ethical and risk-based biological evaluation in accordance with ISO 10993-1, promote alternatives to animal testing and help ensure patient safety.' },
          { type: 'callout', tone: 'expert', text: BIOCOMPAT_EXPERT, more: { label: 'Biotox', href: FDA_LINKS.biotox } },
        ],
      },
    ],
    faqs: [
      {
        question: 'Does every device need every ISO 10993 test?',
        answer: "No. The evaluation strategy is risk-based. Existing data, chemical characterization and scientifically justified assessments may provide sufficient evidence for certain endpoints; any additional testing should be justified by the device's characteristics.",
      },
    ],
    related: ['510k-premarket-notification', 'design-control-documentation'],
  },

  // 14 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'device-master-record',
    title: 'Device Master Record (DMR)',
    summary: 'Develop, review and maintain the DMR that defines how your device is made, tested, packaged and serviced.',
    icon: '/assets/device-master.png',
    metaTitle: 'Device Master Record (DMR) Development',
    metaDescription:
      'MedReg develops, reviews and maintains Device Master Records: device, process, QA, packaging, labelling and servicing specifications aligned with QMSR and ISO 13485.',
    intro: [
      'A Device Master Record (DMR) is a collection of documents and specifications that defines how a medical device is manufactured, inspected, tested, packaged, and serviced. It contains the information and instructions necessary to ensure that the device is consistently manufactured in accordance with its approved design and established quality requirements.',
    ],
    sections: [
      {
        heading: 'What information should a DMR include?',
        blocks: [
          { type: 'p', text: 'The contents of a DMR depend on the device, its manufacturing processes, and applicable regulatory and quality management requirements. Typical documentation includes:' },
          {
            type: 'cards',
            items: [
              { title: 'Device specifications', text: 'Drawings, material specifications, component details, formulations, software specifications, and other applicable design outputs.' },
              { title: 'Production process specifications', text: 'Manufacturing methods, work instructions, equipment requirements, process parameters, and environmental conditions, where applicable.' },
              { title: 'Quality assurance procedures', text: 'Inspection and testing procedures, acceptance criteria, sampling requirements, and specifications for quality assurance equipment.' },
              { title: 'Packaging and labelling specifications', text: 'Packaging configurations, labelling requirements, and the procedures used for packaging and labelling operations.' },
              { title: 'Installation, maintenance, and servicing procedures', text: 'Applicable instructions and methods for installation, maintenance, repair, and servicing of the device.' },
            ],
          },
          { type: 'p', text: "Additional supporting records and procedures may be necessary depending on the device type, manufacturing activities, and the manufacturer's quality management system." },
        ],
      },
      {
        heading: 'How MedReg can support your DMR requirements',
        blocks: [
          { type: 'p', text: 'MedReg supports medical device manufacturers in developing, reviewing, organizing, and maintaining Device Master Record documentation in line with applicable regulatory requirements and quality management system practices. Our support can include:' },
          {
            type: 'list',
            items: [
              { label: 'DMR development', text: 'Preparing and organizing manufacturing and quality documentation based on device specifications and manufacturing requirements.' },
              { label: 'Documentation gap assessment', text: 'Reviewing existing records to identify missing, incomplete, or inconsistent documentation.' },
              { label: 'Manufacturing and quality documentation', text: 'Supporting the preparation and review of manufacturing procedures, work instructions, inspection plans, testing procedures, and acceptance criteria.' },
              { label: 'Device specifications and traceability', text: 'Helping organize relevant drawings, component and material specifications, packaging requirements, and labelling documentation.' },
              { label: 'Document control and change management', text: 'Supporting controlled updates to DMR documents following approved design, process, or specification changes.' },
              { label: 'QMSR and ISO 13485 alignment', text: 'Helping manufacturers align applicable documentation practices with their quality management system and regulatory obligations.' },
              { label: 'DMR maintenance support', text: 'Assisting with periodic reviews and updates to help ensure that manufacturing documentation remains current and consistent with approved processes.' },
            ],
          },
          { type: 'p', text: 'A well-organized Device Master Record helps establish a reliable foundation for manufacturing consistency, quality assurance, and regulatory compliance. Contact MedReg to discuss your DMR development, documentation review, and quality management system support needs.' },
        ],
      },
    ],
    related: ['device-history-record', 'qmsr-implementation'],
  },

  // 15 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'device-history-record',
    title: 'Device History Record (DHR)',
    summary: 'Traceable production and quality records showing each unit, lot or batch was made to the DMR.',
    icon: '/assets/Technical-File.png',
    metaTitle: 'Device History Record (DHR) Support',
    metaDescription:
      'MedReg helps manufacturers prepare and maintain Device History Records that show each unit, lot or batch was manufactured to the Device Master Record.',
    intro: [
      'We assist medical device manufacturers in preparing and maintaining Device History Records (DHRs) to document the manufacturing history of each device unit, lot, or batch. Our support helps ensure that the relevant production and quality records demonstrate that the medical device is manufactured in accordance with the applicable Device Master Record (DMR) and approved specifications.',
    ],
    sections: [
      {
        heading: 'Components of a DHR',
        blocks: [
          {
            type: 'list',
            columns: true,
            items: [
              'Manufacturing date',
              'Quantity of devices manufactured',
              'Quantity released for distribution',
              'Label identification',
              'Acceptance criteria for each test',
              'Unique Device Identification (UDI), Universal Product Code (UPC) or any other identification and control number',
            ],
          },
          {
            type: 'p',
            text: 'Our objective is to help manufacturers develop a traceable Device History Record that facilitates root cause analysis, manufacturing compliance, efficient quality investigations, and corrective and preventive actions (CAPA).',
          },
        ],
      },
    ],
    related: ['device-master-record', 'qmsr-implementation'],
  },

  // 16 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'import-export',
    title: 'Import and Export',
    summary: 'Export coordination, documentation, logistics and destination-market requirements for medical devices.',
    icon: '/assets/import-licnece.png',
    metaTitle: 'Medical Device Import & Export Support',
    metaDescription:
      'MedReg coordinates medical device exports and imports: regulatory documentation, shipping and logistics, import requirements and destination-market access.',
    intro: [
      'MedReg supports medical device manufacturers, suppliers, and distributors in managing the import and export of medical devices across domestic and international markets. We can facilitate the export of medical devices on behalf of manufacturers and suppliers, helping them coordinate the processes involved in international product distribution.',
      'We can also help clients understand market-specific requirements and identify the documentation needed to support compliant cross-border movement of medical devices.',
    ],
    sections: [
      {
        heading: 'How MedReg can support you',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Export coordination', text: 'Facilitation of medical device exports on behalf of manufacturers and suppliers, subject to agreed commercial arrangements and applicable requirements.' },
              { title: 'Regulatory documentation support', text: 'Help with identifying and organizing relevant product documentation, certificates, and export-related records.' },
              { title: 'Shipping and logistics coordination', text: 'Coordination with appropriate logistics providers for shipment planning, transportation, and delivery arrangements.' },
              { title: 'Import support', text: 'Help in identifying applicable import requirements and coordinating relevant documentation for medical devices entering the target market.' },
              { title: 'International market access', text: 'Support in understanding destination-country regulatory requirements and coordinating with relevant local partners, importers, or distributors.' },
            ],
          },
        ],
      },
    ],
    related: ['indian-manufacturer-supplier-evaluation', 'establishment-registration-device-listing'],
  },

  // 17 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'indian-authorized-agent',
    title: 'Indian Authorized Agent Services',
    summary: 'For U.S. manufacturers who want to register their medical devices in India.',
    icon: '/assets/Authorized-Agent.png',
    metaTitle: 'Indian Authorized Agent for US Manufacturers',
    metaDescription:
      'MedReg helps U.S. and other manufacturers outside India register their medical devices in India.',
    intro: ['For medical device manufacturers outside India, MedReg will assist in registering the device in India.'],
    sections: [
      {
        heading: 'Learn more',
        blocks: [
          {
            type: 'links',
            items: [
              { label: 'India (CDSCO) regulatory services', href: '/india/' },
              { label: 'HL Associates', href: FDA_LINKS.hlAssociates },
            ],
          },
        ],
      },
    ],
    related: ['indian-manufacturer-supplier-evaluation', 'import-export'],
  },

  // 18 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'indian-manufacturer-supplier-evaluation',
    title: 'Indian Manufacturer / Supplier Evaluation',
    summary: 'Assess Indian manufacturers and suppliers against U.S. FDA requirements before export.',
    icon: '/assets/Supplier-Development.png',
    metaTitle: 'Indian Manufacturer Evaluation for US FDA Export',
    metaDescription:
      'MedReg evaluates Indian medical device manufacturers and suppliers against U.S. FDA requirements and identifies gaps before export to the United States.',
    intro: [
      'MedReg provides regulatory compliance assessment and evaluation services for Indian medical device manufacturers and suppliers seeking to export their products to the United States. Our objective is to assess whether the manufacturer, supplier, and relevant device documentation align with applicable U.S. FDA regulatory requirements and to identify potential gaps that may affect market entry.',
    ],
    sections: [
      {
        heading: 'How MedReg can support you',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Regulatory compliance assessment', text: "Evaluate applicable FDA requirements based on the device type, classification, intended use, and the manufacturer's or supplier's role in the supply chain." },
              { title: 'Establishment registration and device listing', text: 'Review applicable FDA registration and listing requirements and assist with the relevant registration and documentation processes.' },
              { title: 'Premarket regulatory requirements', text: 'Assess whether the device requires 510(k) clearance, Premarket Approval (PMA), or qualifies for an applicable exemption, and identify the necessary regulatory pathway.' },
              { title: 'Quality management system evaluation', text: 'Review relevant quality management system documentation and manufacturing controls against applicable FDA requirements, including the Quality Management System Regulation (QMSR), where applicable.' },
              { title: 'Technical documentation review', text: 'Assess the availability and adequacy of relevant device specifications, labelling, risk management documentation, performance testing, and biological safety information, as applicable.' },
              { title: 'Supplier and manufacturing controls', text: 'Review relevant supplier qualification records, material specifications, quality agreements, and purchasing controls to identify potential compliance gaps in the supply chain.' },
              { title: 'Compliance gap assessment and recommendations', text: 'Provide findings and recommendations to help manufacturers and suppliers address identified gaps and prepare for applicable U.S. regulatory requirements.' },
            ],
          },
        ],
      },
      {
        heading: 'Why choose MedReg?',
        blocks: [
          {
            type: 'p',
            text: 'With regulatory-focused evaluation and documentation support, MedReg helps Indian medical device manufacturers and suppliers better understand their U.S. market obligations, strengthen their compliance readiness, and prepare for export-related regulatory requirements.',
          },
        ],
      },
    ],
    related: ['import-export', 'qmsr-implementation', 'establishment-registration-device-listing'],
  },
];

export const USA_SERVICE_BY_SLUG = Object.fromEntries(USA_SERVICES_DETAIL.map((s) => [s.slug, s]));

export const usaServicePath = (slug: string) => `/usa/${slug}/`;
