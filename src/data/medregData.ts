import { USA_SERVICES_DETAIL } from '@/data/usaServices';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName?: string;
  category: 'india' | 'europe' | 'usa' | 'global';
  badge?: string;
  keyPoints?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company?: string;
  role?: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export const COMPANY_INFO = {
  name: "MedReg Consultancy LLP",
  shortName: "MedReg",
  tagline: "Let's Decode The Regulations",
  subTagline: "Medical Device Regulatory Consulting Platform",
  // India Standard Time is shown next to phone numbers for international visitors (brief §14).
  // Official calling hours have not been supplied yet; add them here (e.g. "Mon–Sat, 10:00–18:30 IST") when confirmed.
  timezone: { short: 'IST, UTC+05:30', label: 'India Standard Time (IST, UTC+05:30)', callingHours: '' },
  address: {
    line1: "11th Floor Block C – 1105, 1106 Titanium Business Park",
    line2: "Behind Divya Bhaskar Press, Near Makarba Railway Crossing",
    area: "Makarba",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380051",
    country: "India",
    full: "11th Floor Block C – 1105, 1106 Titanium Business Park, Behind Divya Bhaskar Press, Near Makarba Railway Crossing, Makarba, Ahmedabad, Gujarat, 380051, India."
  },
  phones: [
    { display: "+91 88664 61989", value: "+918866461989" },
    { display: "+91 63523 88194", value: "+916352388194" }
  ],
  emails: [
    { display: "info@medreg.in", value: "info@medreg.in", type: "General Inquiries" }
  ],
};

export const STATS: StatItem[] = [
  { value: "2k+", label: "Complete Projects", icon: "/assets/complete-project.png" },
  { value: "20+", label: "Countries Served", icon: "/assets/countries-served.png" },
  { value: "950+", label: "Clients Served", icon: "/assets/clients-served.png" },
  { value: "250+", label: "Service Offerings", icon: "/assets/service-offerings.png" }
];

export const CERTIFICATIONS = [
  { name: "CE Mark (EU MDR / IVDR)", image: "/assets/certificate1.png", jurisdiction: "European Union" },
  { name: "CDSCO Central Drugs Standard Control Organisation", image: "/assets/certificate2.png", jurisdiction: "India" },
  { name: "MDSAP Medical Device Single Audit Program", image: "/assets/certificate3.png", jurisdiction: "Global (US, CA, BR, JP, AU)" },
  { name: "ISO 13485:2016 Medical Devices QMS", image: "/assets/certificate4.png", jurisdiction: "International" },
  { name: "US FDA 510(k) Premarket Notification", image: "/assets/certificate6.png", jurisdiction: "United States" }
];

export const CLIENT_LOGOS = [
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-1.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-2.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-3.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-4.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-5.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-6.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-7.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-10.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-15.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-8.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-9.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-11.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-12.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-13.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-14.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-16.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-17.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-18.png"
  },
  {
    "name": "MedReg client",
    "image": "/assets/Mask-group-19.png"
  }
];

export const OFFICE_GALLERY = [
  {
    "title": "MedReg Office",
    "image": "/assets/office-01.png",
    "caption": "Titanium Business Park, Ahmedabad"
  },
  {
    "title": "MedReg Office",
    "image": "/assets/office-02.png",
    "caption": "Titanium Business Park, Ahmedabad"
  },
  {
    "title": "MedReg Office",
    "image": "/assets/office-03.png",
    "caption": "Titanium Business Park, Ahmedabad"
  },
  {
    "title": "MedReg Office",
    "image": "/assets/office-04.png",
    "caption": "Titanium Business Park, Ahmedabad"
  },
  {
    "title": "MedReg Office",
    "image": "/assets/office-05.png",
    "caption": "Titanium Business Park, Ahmedabad"
  },
  {
    "title": "MedReg Office",
    "image": "/assets/office-06.png",
    "caption": "Titanium Business Park, Ahmedabad"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    "quote": "MedReg Consultancy demonstrated exceptional expertise throughout our collaboration. The team is professional, dedicated, and consistently focused on delivering results. Their guidance and execution exceeded our expectations. We strongly endorse their services.",
    "author": "John Snow"
  },
  {
    "quote": "MedReg Consultancy has been exceptional in helping us address a wide range of regulatory queries. Their expertise and in-depth regulatory knowledge place them alongside the world’s leading regulatory consultants.",
    "author": "Sophia Jackson"
  },
  {
    "quote": "Our experience working with MedReg Consultancy has been excellent. The team is highly experienced, knowledgeable, results-oriented, and professional in both training and project execution. We strongly recommend their services for all medical device regulatory needs.",
    "author": "Jordan Vance"
  }
];

export const WHY_CHOOSE_MEDREG = [
  {
    title: "Focused on Your Goals",
    description: "Your challenges guide our approach. By actively listening, we design focused strategies that deliver measurable, result-driven outcomes.",
    icon: "target"
  },
  {
    title: "Simplifying Complexity",
    description: "We decode Complex regulatory requirements and define a clear, actionable pathway, to ensure your projects move forward efficiently and compliantly.",
    icon: "zap"
  },
  {
    title: "Comprehensive Understanding",
    description: "We dive deep into your requirements, identifying all critical factors to ensure our solutions address every aspect of your regulatory needs.",
    icon: "layers"
  },
  {
    title: "Documentation You Can Trust",
    description: "As experts, we provide clear, accurate, and accessible documentation, keeping you informed at every stage of your project.",
    icon: "file-check"
  }
];

export const INDIA_SERVICES: ServiceItem[] = [
  {
    "id": "manufacturing-license",
    "title": "Manufacturing License",
    "shortDesc": "Obtaining a manufacturing license in India is essential for medical device companies seeking compliance and market access.",
    "fullDesc": "Obtaining a manufacturing license in India is essential for medical device companies seeking compliance and market access. At MedReg Consultancy, we streamline the entire process, from documentation and regulatory submissions to audits and approvals, helping to secure licenses quickly and confidently.",
    "category": "india"
  },
  {
    "id": "import-license",
    "title": "Import License",
    "shortDesc": "An import license is mandatory for bringing medical devices into the Indian market, ensuring compliance with CDSCO regulations.",
    "fullDesc": "An import license is mandatory for bringing medical devices into the Indian market, ensuring compliance with CDSCO regulations. At MedReg Consultancy, we simplify the process by managing documentation, regulatory submissions, and approvals, enabling manufacturers to access India’s market efficiently and without delays.",
    "category": "india"
  },
  {
    "id": "clinical-trials",
    "title": "Clinical Trials",
    "shortDesc": "Clinical trials are a crucial step in demonstrating the safety and effectiveness of medical devices before market approval.",
    "fullDesc": "Clinical trials are a crucial step in demonstrating the safety and effectiveness of medical devices before market approval. At MedReg Consultancy, we assist in end-to-end trial management, protocol design, regulatory approvals, site selection, monitoring, and reporting, ensuring compliance with Indian and global standards.",
    "category": "india"
  },
  {
    "id": "free-sale-certificate",
    "title": "Free Sale Certificate",
    "shortDesc": "A Free Sale Certificate (FSC) is an essential document that confirms medical devices are legally sold and freely available in the Indian market, making it a prerequisite for exports.",
    "fullDesc": "A Free Sale Certificate (FSC) is an essential document that confirms medical devices are legally sold and freely available in the Indian market, making it a prerequisite for exports. At MedReg Consultancy, we assist manufacturers in obtaining FSCs by managing the complete application and documentation process, ensuring smooth and timely approvals for global market access.",
    "category": "india"
  },
  {
    "id": "product-endorsement",
    "title": "Product Endorsement",
    "shortDesc": "Product endorsement from regulatory authorities validates the safety, quality, and compliance of your medical device, building trust and credibility in the market.",
    "fullDesc": "Product endorsement from regulatory authorities validates the safety, quality, and compliance of your medical device, building trust and credibility in the market. At MedReg Consultancy, we support you through the endorsement process with precise documentation, regulatory submissions, and expert guidance to help your product gain approval seamlessly.",
    "category": "india"
  },
  {
    "id": "retention-of-license",
    "title": "Retention of License",
    "shortDesc": "Retention of a license is a mandatory requirement to keep your medical device manufacturing or import license valid in India.",
    "fullDesc": "Retention of a license is a mandatory requirement to keep your medical device manufacturing or import license valid in India. At MedReg Consultancy, we manage the entire retention process, tracking deadlines, preparing documentation, and handling submissions, ensuring uninterrupted compliance and seamless market access for your business.",
    "category": "india"
  },
  {
    "id": "market-standing-certificate",
    "title": "Market Standing Certificate",
    "shortDesc": "A Market Standing Certificate (MSC) demonstrates that your medical device has been legally sold and is in good standing in the Indian market, enhancing credibility for exports and regulatory approvals.",
    "fullDesc": "A Market Standing Certificate (MSC) demonstrates that your medical device has been legally sold and is in good standing in the Indian market, enhancing credibility for exports and regulatory approvals. At MedReg Consultancy, we assist with the complete MSC process, from documentation to submission, ensuring smooth and timely certification.",
    "category": "india"
  },
  {
    "id": "non-conviction-certificate",
    "title": "Non-conviction Certificate",
    "shortDesc": "A Non-Conviction Certificate (NCC) confirms that a medical device manufacturer or importer has a clean compliance record with no regulatory violations and is often required for licenses and approvals.",
    "fullDesc": "A Non-Conviction Certificate (NCC) confirms that a medical device manufacturer or importer has a clean compliance record with no regulatory violations and is often required for licenses and approvals. At MedReg Consultancy, we guide you through the entire NCC process, preparing documentation, coordinating with authorities, and ensuring timely issuance for seamless regulatory compliance.",
    "category": "india"
  },
  {
    "id": "labeling-review",
    "title": "Labeling Review",
    "shortDesc": "Accurate and compliant labelling is critical for medical devices to meet regulatory standards and ensure patient safety.",
    "fullDesc": "Accurate and compliant labelling is critical for medical devices to meet regulatory standards and ensure patient safety. At MedReg Consultancy, we review and validate your product labels, including content, language, symbols, and regulatory requirements, helping you achieve full compliance and market readiness.",
    "category": "india"
  },
  {
    "id": "product-development",
    "title": "Product Development",
    "shortDesc": "Successful medical device product development requires regulatory compliance at every stage.",
    "fullDesc": "Successful medical device product development requires regulatory compliance at every stage. At MedReg Consultancy, we support you from concept to launch, assisting with design, documentation, risk assessment, and regulatory approvals, to ensure your product meets all Indian and international standards efficiently and safely.",
    "category": "india"
  },
  {
    "id": "authorized-agent",
    "title": "Authorized Agent",
    "shortDesc": "An Authorised Agent acts as a regulatory liaison between medical device manufacturers and Indian authorities, ensuring compliance and smooth approvals.",
    "fullDesc": "An Authorised Agent acts as a regulatory liaison between medical device manufacturers and Indian authorities, ensuring compliance and smooth approvals. At MedReg Consultancy, we serve as your trusted Authorised Agent, managing submissions, correspondence, and regulatory requirements to streamline your market entry and ensure ongoing compliance in India.",
    "category": "india"
  },
  {
    "id": "wholesale-license",
    "title": "Wholesale License",
    "shortDesc": "A wholesale license is mandatory for distributing medical devices across India, ensuring compliance with CDSCO regulations and legal standards.",
    "fullDesc": "A wholesale license is mandatory for distributing medical devices across India, ensuring compliance with CDSCO regulations and legal standards. At MedReg Consultancy, we guide you through the entire licensing process, from documentation and submissions to approvals, helping you start or expand your distribution network seamlessly and compliantly.",
    "category": "india"
  },
  {
    "id": "sterilization-validation",
    "title": "Sterilization Process Validation",
    "shortDesc": "Sterilisation process validation ensures that medical devices are safely and effectively sterilised, meeting all regulatory and quality standards.",
    "fullDesc": "Sterilisation process validation ensures that medical devices are safely and effectively sterilised, meeting all regulatory and quality standards. At MedReg Consultancy, we assist you with validation planning, execution, documentation, and regulatory compliance, ensuring your devices are safe, reliable, and market-ready.",
    "category": "india"
  },
  {
    "id": "qms-documentation",
    "title": "QMS Documentation",
    "shortDesc": "A robust Quality Management System (QMS) is essential for regulatory compliance and consistent product quality.",
    "fullDesc": "A robust Quality Management System (QMS) is essential for regulatory compliance and consistent product quality. At MedReg Consultancy, we help medical device manufacturers develop, organise, and maintain QMS documentation, including SOPs, manuals, and records, ensuring full compliance with ISO 13485 and other regulatory standards.",
    "category": "india"
  },
  {
    "id": "amc-services",
    "title": "AMC – Annual Maintenance Contract Services for Documentation",
    "shortDesc": "Our Annual Maintenance Contract (AMC) services ensure your regulatory documentation remains up-to-date, compliant, and audit-ready throughout the year.",
    "fullDesc": "Our Annual Maintenance Contract (AMC) services ensure your regulatory documentation remains up-to-date, compliant, and audit-ready throughout the year. At MedReg Consultancy, we manage regular updates, reviews, and regulatory changes, helping you maintain seamless compliance without interruptions.",
    "category": "india"
  },
  {
    "id": "device-master-file",
    "title": "Device Master File Preparation",
    "shortDesc": "A Device Master File (DMF) is essential for documenting the design, manufacturing, and quality processes of a medical device.",
    "fullDesc": "A Device Master File (DMF) is essential for documenting the design, manufacturing, and quality processes of a medical device. At MedReg Consultancy, we assist in preparing comprehensive DMFs that cover all technical and regulatory requirements, ensuring smooth approvals and regulatory compliance in India and abroad.",
    "category": "india"
  },
  {
    "id": "voluntary-registration",
    "title": "Voluntary Registration",
    "shortDesc": "Voluntary registration allows medical device manufacturers to proactively align with regulatory standards, demonstrating product safety and quality.",
    "fullDesc": "Voluntary registration allows medical device manufacturers to proactively align with regulatory standards, demonstrating product safety and quality. At MedReg Consultancy, we assist you throughout the registration process, preparing documentation, submitting applications, and ensuring compliance, helping you gain credibility and market confidence in India.",
    "category": "india"
  },
  {
    "id": "neutral-code",
    "title": "Neutral Code",
    "shortDesc": "A Neutral Code is a unique identifier assigned to medical devices for regulatory tracking and compliance purposes.",
    "fullDesc": "A Neutral Code is a unique identifier assigned to medical devices for regulatory tracking and compliance purposes. At MedReg Consultancy, we assist manufacturers in obtaining and managing Neutral Codes, ensuring accurate product identification and smooth regulatory approvals in India.",
    "category": "india"
  },
  {
    "id": "internal-audit",
    "title": "Internal Audit",
    "shortDesc": "Internal audits are essential for assessing compliance, identifying gaps, and ensuring your quality management system meets regulatory standards.",
    "fullDesc": "Internal audits are essential for assessing compliance, identifying gaps, and ensuring your quality management system meets regulatory standards. At MedReg Consultancy, we conduct thorough internal audits for medical device manufacturers, providing actionable insights and guidance to strengthen processes and maintain full compliance.",
    "category": "india"
  }
];

export const EUROPE_SERVICES: ServiceItem[] = [
  {
    "id": "ce-mark",
    "title": "CE mark",
    "shortDesc": "Obtaining the CE mark is essential for medical device companies seeking compliance and market access in Europe.",
    "fullDesc": "Obtaining the CE mark is essential for medical device companies seeking compliance and market access in Europe. At MedReg Consultancy, we streamline the entire process, from regulatory assessment and technical file preparation to audits and approvals, helping you achieve CE marking efficiently and confidently.",
    "category": "europe"
  },
  {
    "id": "technical-master-file-preparation",
    "title": "Technical Master File Preparation",
    "shortDesc": "Preparing a comprehensive Technical Master File is crucial for medical device companies to demonstrate compliance with European regulations.",
    "fullDesc": "Preparing a comprehensive Technical Master File is crucial for medical device companies to demonstrate compliance with European regulations. At MedReg Consultancy, we manage the entire process, from compiling technical documentation and risk assessments to ensuring alignment with CE requirements, helping you maintain accuracy and regulatory readiness with confidence.",
    "category": "europe"
  },
  {
    "id": "gap-analysis",
    "title": "Gap Analysis",
    "shortDesc": "Conducting a gap analysis is vital for medical device companies to identify regulatory compliance gaps and streamline market entry in Europe.",
    "fullDesc": "Conducting a gap analysis is vital for medical device companies to identify regulatory compliance gaps and streamline market entry in Europe. At MedReg Consultancy, we evaluate your existing processes and documentation against EU requirements, providing clear recommendations to bridge gaps and ensure your products meet all regulatory standards efficiently and confidently.",
    "category": "europe"
  },
  {
    "id": "clinical-evaluation",
    "title": "Clinical Evaluation",
    "shortDesc": "Performing a clinical evaluation is essential for medical device companies to demonstrate safety and performance compliance in Europe.",
    "fullDesc": "Performing a clinical evaluation is essential for medical device companies to demonstrate safety and performance compliance in Europe. At MedReg Consultancy, we manage the entire process, from reviewing clinical data and literature to preparing evaluation reports in line with EU regulations, helping you achieve regulatory approval efficiently and confidently.",
    "category": "europe"
  },
  {
    "id": "general-safety-and-performance-requirement",
    "title": "General Safety And Performance Requirement",
    "shortDesc": "Meeting the General Safety and Performance Requirements is crucial for medical device companies to ensure compliance with European regulations.",
    "fullDesc": "Meeting the General Safety and Performance Requirements is crucial for medical device companies to ensure compliance with European regulations. At MedReg Consultancy, we assess your products against GSPR standards, prepare necessary documentation, and provide guidance to help you achieve regulatory approval efficiently and confidently.",
    "category": "europe"
  },
  {
    "id": "post-market-surveillance-report",
    "title": "Post Market Surveillance Report",
    "shortDesc": "Preparing a Post-Market Surveillance (PMS) report is essential for medical device companies to monitor product safety and compliance in Europe.",
    "fullDesc": "Preparing a Post-Market Surveillance (PMS) report is essential for medical device companies to monitor product safety and compliance in Europe. At MedReg Consultancy, we guide you through data collection, analysis, and report preparation, helping you maintain regulatory adherence and ensure continuous product safety with confidence.",
    "category": "europe"
  },
  {
    "id": "risk-analysis-as-per-en-iso-14971",
    "title": "Risk Analysis as per EN ISO 14971",
    "shortDesc": "Conducting a risk analysis as per EN ISO 14971 is critical for medical device companies to ensure product safety and regulatory compliance in Europe.",
    "fullDesc": "Conducting a risk analysis as per EN ISO 14971 is critical for medical device companies to ensure product safety and regulatory compliance in Europe. At MedReg Consultancy, we assess potential risks, implement mitigation strategies, and prepare detailed reports, helping you meet EU requirements efficiently and confidently.",
    "category": "europe"
  },
  {
    "id": "person-responsible-for-regulatory-compliance",
    "title": "Person Responsible for Regulatory Compliance",
    "shortDesc": "Designating a Person Responsible for Regulatory Compliance (PRRC) is mandatory for medical device companies under EU regulations.",
    "fullDesc": "Designating a Person Responsible for Regulatory Compliance (PRRC) is mandatory for medical device companies under EU regulations. At MedReg Consultancy, we assist in identifying, training, and supporting the PRRC, ensuring all regulatory obligations are met efficiently and with full confidence.",
    "category": "europe"
  },
  {
    "id": "medical-device-classification",
    "title": "Medical Device Classification",
    "shortDesc": "Accurate medical device classification is essential for compliance with European regulations and determining the appropriate regulatory pathway.",
    "fullDesc": "Accurate medical device classification is essential for compliance with European regulations and determining the appropriate regulatory pathway. At MedReg Consultancy, we assess your products, classify them according to EU rules, and guide you through the necessary compliance requirements, ensuring a smooth and confident market entry.",
    "category": "europe"
  },
  {
    "id": "sterilization-validation",
    "title": "Sterilization Validation",
    "shortDesc": "Sterilisation validation is critical for medical device companies to ensure product safety and compliance with European regulations.",
    "fullDesc": "Sterilisation validation is critical for medical device companies to ensure product safety and compliance with European regulations. At MedReg Consultancy, we plan, execute, and document sterilisation validation processes, helping you meet EU standards efficiently and with complete confidence.",
    "category": "europe"
  },
  {
    "id": "cleaning-disinfection-validation",
    "title": "Cleaning & Disinfection Validation",
    "shortDesc": "Cleaning and disinfection validation is essential for medical device companies to ensure safety, effectiveness, and compliance with European regulations.",
    "fullDesc": "Cleaning and disinfection validation is essential for medical device companies to ensure safety, effectiveness, and compliance with European regulations. At MedReg Consultancy, we design, execute, and document validation processes, helping you achieve regulatory adherence efficiently and with full confidence.",
    "category": "europe"
  },
  {
    "id": "amc-annual-maintenance-contract-services-for-doc",
    "title": "AMC – Annual Maintenance Contract Services for Documentation",
    "shortDesc": "Maintaining up-to-date regulatory documentation is crucial for ongoing compliance in the European market.",
    "fullDesc": "Maintaining up-to-date regulatory documentation is crucial for ongoing compliance in the European market. At MedReg Consultancy, we offer Annual Maintenance Contract (AMC) services to manage, update, and audit your documentation regularly, ensuring your medical devices remain fully compliant with EU regulations.",
    "category": "europe"
  },
  {
    "id": "authorized-agent-service-through-active-channel-",
    "title": "Authorized Agent Service through Active Channel Partner",
    "shortDesc": "Having a reliable Authorised Agent is essential for medical device companies to meet European regulatory requirements.",
    "fullDesc": "Having a reliable Authorised Agent is essential for medical device companies to meet European regulatory requirements. At MedReg Consultancy, we provide Authorised Agent services through our active channel partners, ensuring smooth regulatory communication, compliance, and market access across Europe.",
    "category": "europe"
  }
];

// USA services are defined in usaServices.ts (client content, Oct 2026) and mapped here for shared cards and menus.
export const USA_SERVICES: ServiceItem[] = USA_SERVICES_DETAIL.map((s) => ({
  id: s.slug,
  title: s.title,
  shortDesc: s.summary,
  fullDesc: s.summary,
  category: 'usa',
}));

export const GLOBAL_SERVICES: ServiceItem[] = [
  {
    "id": "technical-file-dossier-preparation-as-per-imdrf-",
    "title": "Technical File / Dossier Preparation as per IMDRF and GHTF guideline",
    "shortDesc": "MedReg Consultancy streamlines Technical File and Dossier preparation, ensuring IMDRF/GHTF compliance and country-specific alignment for faster approvals and smooth market entry across global markets.",
    "fullDesc": "MedReg Consultancy streamlines Technical File and Dossier preparation, ensuring IMDRF/GHTF compliance and country-specific alignment for faster approvals and smooth market entry across global markets.",
    "category": "global"
  },
  {
    "id": "qms-iso13485",
    "title": "QMS Documentation",
    "shortDesc": "MedReg Consultancy simplifies QMS documentation with ISO 13485:2016 and QMSR-aligned SOPs, manuals, and records, ensuring audit-ready, compliant, and approval-focused systems.",
    "fullDesc": "MedReg Consultancy simplifies QMS documentation with ISO 13485:2016 and QMSR-aligned SOPs, manuals, and records, ensuring audit-ready, compliant, and approval-focused systems.",
    "category": "global"
  },
  {
    "id": "internal-audit",
    "title": "Internal Audit",
    "shortDesc": "Internal audits are vital for maintaining regulatory compliance.",
    "fullDesc": "Internal audits are vital for maintaining regulatory compliance. At MedReg Consultancy, we evaluate your quality management system, identify gaps, and provide guidance on corrective actions to strengthen compliance and ensure inspection readiness with confidence.",
    "category": "global"
  },
  {
    "id": "supplier-development-inspection-evaluation",
    "title": "Supplier Development, Inspection, Evaluation",
    "shortDesc": "Reliable suppliers are key to quality and compliance.",
    "fullDesc": "Reliable suppliers are key to quality and compliance. At MedReg Consultancy, we handle supplier development, audits, and performance monitoring to ensure a strong, compliant supply chain and smooth market access.",
    "category": "global"
  },
  {
    "id": "process-validation",
    "title": "Process Validation",
    "shortDesc": "Process validation ensures consistent product quality and regulatory compliance.",
    "fullDesc": "Process validation ensures consistent product quality and regulatory compliance. At MedReg Consultancy, we plan, execute, and document validation activities to help you minimize risks and achieve smooth approvals with confidence.",
    "category": "global"
  }
];

export const ALL_SERVICES = [
  ...EUROPE_SERVICES,
  ...USA_SERVICES,
  ...GLOBAL_SERVICES,
  ...INDIA_SERVICES
];

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    "question": "What services does MedReg Consultancy provide?",
    "answer": "MedReg is a medical device regulatory consultancy. We provide end-to-end regulatory support for the medical device industry, including regulatory strategy, documentation, submissions, and support in obtaining approvals, certificates and licences across Europe, the USA, other global markets and India."
  },
  {
    "question": "Which certifications, approvals and licenses can you help us obtain?",
    "answer": "We help you prepare for and obtain a wide range of certificates, approvals and licences, including ISO 13485 certification, CE marking, US FDA 510(k) clearance and registration, CDSCO licences and other country registrations. These are issued by the relevant authorities, Notified Bodies or certification bodies; MedReg provides the consultancy and documentation support."
  },
  {
    "question": "Can you assist startups in the medical device sector?",
    "answer": "Absolutely. We work with startups and established manufacturers alike, providing guidance on regulatory pathways, documentation, and strategies to ensure smooth approvals and market entry."
  },
  {
    "question": "How experienced is your team in medical device regulations?",
    "answer": "Our team consists of 100+ specialists with extensive knowledge and experience in global and local medical device regulatory requirements, ensuring expert guidance for every project."
  }
];

export const INDIA_FAQS: FaqItem[] = [
  {
    "question": "What does MedReg Consultancy do?",
    "answer": "We provide end-to-end regulatory solutions for medical device manufacturers in India, including licensing, certifications, documentation, audits, and compliance support enabling access to both domestic and international market access."
  },
  {
    "question": "Which licenses and certifications do you help with?",
    "answer": "Our services cover CDSCO licenses (MD-5, MD-6, MD-9, MD-10, MD-15), ISO 13485:2016, ICMED, Free Sale Certificates, Manufacturing and Import Licenses, Product Endorsements, Market Standing Certificates, Non-Conviction Certificates, and more."
  },
  {
    "question": "Can you help startups and global manufacturers alike?",
    "answer": "Yes! We work with both emerging startups and established global manufacturers, providing tailored regulatory guidance and strategies to ensure smooth compliance and faster approvals."
  },
  {
    "question": "How does MedReg Consultancy assist with manufacturing and import licenses?",
    "answer": "We manage the complete process, from documentation and submissions to audits and approvals, helping you obtain licenses efficiently and remain compliant with Indian regulations."
  },
  {
    "question": "Do you support clinical trials for medical devices?",
    "answer": "Yes! We handle end-to-end clinical trial management, including protocol design, regulatory approvals, site selection, monitoring, and reporting, from documentation and submissions to audits and approvals with Indian and global standards."
  }
];

export const EUROPE_FAQS: FaqItem[] = [
  {
    "question": "What services does MedReg Consultancy offer for medical device compliance in Europe?",
    "answer": "We provide end-to-end regulatory solutions, including CE marking, technical master file preparation, gap analysis, clinical evaluation, risk analysis (EN ISO 14971), sterilisation and cleaning validation, post-market surveillance reports, and Authorised Agent services, helping your medical devices meet stringent EU requirements efficiently."
  },
  {
    "question": "How can MedReg help with CE marking for my medical device?",
    "answer": "Our team streamlines the entire CE marking process, from regulatory assessment and technical file preparation to audits and approvals, ensuring your devices comply with European standards and gain market access confidently."
  },
  {
    "question": "Do you support ongoing compliance after certification?",
    "answer": "Yes! We offer Annual Maintenance Contract (AMC) services for documentation updates, regulatory audits, and continuous monitoring, helping your devices maintain compliance and safety across the European market."
  },
  {
    "question": "What is the role of the Person Responsible for Regulatory Compliance (PRRC), and do you assist with it?",
    "answer": "Designating a PRRC is mandatory under EU regulations. At MedReg Consultancy, we help identify, train, and support the PRRC, ensuring all regulatory obligations are consistently met."
  },
  {
    "question": "Can MedReg assist with market entry and regulatory representation in Europe?",
    "answer": "Absolutely! Through our Authorised Agent services and active channel partners, we provide regulatory representation, country registration support, and free sale certificates, enabling smooth market access and compliance for your medical devices."
  }
];

// Answers are taken from the client USA content (usaServices.ts).
export const USA_FAQS: FaqItem[] = [
  {
    "question": "Which US FDA services does MedReg provide?",
    "answer": "FDA risk-based classification, establishment registration and device listing, 510(k) premarket notification, Small Business Determination, Pre-Submission / Q-Submission, GUDID registration, U.S. Agent services, medical device labelling, QMSR implementation, training, regulatory reporting, design control documentation, biocompatibility evaluation, Device Master Record and Device History Record, import and export support, Indian Authorized Agent services and Indian manufacturer / supplier evaluation."
  },
  {
    "question": "Does FDA establishment registration and device listing mean my device is cleared or approved?",
    "answer": "No. Completing registration and listing does not mean that a device has received FDA clearance or approval. Depending on its classification, a device may also need 510(k) clearance or Premarket Approval (PMA) before it can be marketed."
  },
  {
    "question": "Do manufacturers outside the US need a U.S. Agent?",
    "answer": "Yes. Establishments outside the United States that are required to register with FDA must designate a U.S. Agent who resides in, or maintains a place of business in, the United States. MedReg provides U.S. Agent services."
  },
  {
    "question": "Is eSTAR mandatory for 510(k) submissions?",
    "answer": "Yes. FDA requires 510(k) submissions to be made using the electronic Submission Template and Resource (eSTAR), unless an exemption applies. MedReg prepares the eSTAR and supports its electronic submission."
  },
  {
    "question": "Can small businesses pay lower FDA user fees?",
    "answer": "Yes. Through FDA Small Business Determination, businesses with gross receipts or sales of $100 million or less (including affiliates) can get reduced application fees, those at $30 million or less can get a waiver of the fee for their first premarket application, and those at $1 million or less may get an annual registration fee waiver where paying would be a financial hardship as determined by FDA."
  },
  {
    "question": "What is the FDA QMSR?",
    "answer": "The Quality Management System Regulation (QMSR) is 21 CFR Part 820. It incorporates ISO 13485:2016 by reference alongside additional FDA-specific requirements, for example on UDI, complaint and servicing records, and labelling and packaging controls. MedReg supports gap analysis, documentation updates, training and inspection readiness."
  }
];

export const GLOBAL_FAQS: FaqItem[] = [
  {
    "question": "Which international markets does MedReg Consultancy support for medical device approvals?",
    "answer": "We help medical device manufacturers expand into markets including the Middle East, Southeast Asia, Brazil, Australia (TGA), and Canada, providing tailored regulatory strategies and end-to-end support for compliance and market access."
  },
  {
    "question": "What services does MedReg provide to ensure compliance with global regulatory standards?",
    "answer": "Our services include Technical File/Dossier preparation in accordance with IMDRF and GHTF guidelines, QMS documentation, internal audits, supplier development and evaluation, process validation, country registrations, support for CE marking, ISO 13485 certification and US FDA submissions, and post-market surveillance. We guide your products through all stages of regulatory approval."
  },
  {
    "question": "How does MedReg help with Technical File or Dossier preparation for international markets?",
    "answer": "We ensure full compliance with IMDRF and GHTF guidelines, managing documentation, data compilation, formatting, and submission. Our expertise helps you prepare robust, regulator-ready dossiers aligned with country-specific requirements for faster approvals and smooth market entry."
  },
  {
    "question": "Can MedReg assist with ongoing compliance and audits?",
    "answer": "Yes. We provide internal audit services, supplier audits, process validation, QMS maintenance, and corrective action guidance, ensuring your quality management system remains compliant, inspection-ready, and continuously improving across global markets."
  },
  {
    "question": "Why should companies choose MedReg Consultancy for multi-market regulatory support?",
    "answer": "MedReg offers expert consultants, deep regulatory insight, and a seamless approach to compliance. We simplify complex requirements, provide accurate documentation, and implement proactive strategies to reduce risks, ensuring your medical devices remain compliant and competitive worldwide."
  }
];

export const SEO_MIGRATION_MAP = [
  { oldUrl: "https://medreg.in/", newUrl: "/", status: 200, notes: "Homepage" },
  { oldUrl: "https://medreg.in/about-us/", newUrl: "/about-us", status: 200, notes: "About MedReg" },
  { oldUrl: "https://medreg.in/india/", newUrl: "/india", status: 200, notes: "India CDSCO Regulatory Services" },
  { oldUrl: "https://medreg.in/europe/", newUrl: "/europe", status: 200, notes: "Europe CE MDR / IVDR Services" },
  { oldUrl: "https://medreg.in/usa/", newUrl: "/usa", status: 200, notes: "USA FDA 510(k) & QMSR Services" },
  { oldUrl: "https://medreg.in/other-services/", newUrl: "/other-services", status: 200, notes: "Global MDSAP & ISO 13485 Services" },
  { oldUrl: "https://medreg.in/team/", newUrl: "/team", status: 200, notes: "Team & Leadership" },
  { oldUrl: "https://medreg.in/blogs/", newUrl: "/blogs", status: 200, notes: "Regulatory Knowledge & Insights Hub" },
  { oldUrl: "https://medreg.in/contact-us/", newUrl: "/contact-us", status: 200, notes: "Contact & Consultation" },
  { oldUrl: "https://medreg.in/landing-page/", newUrl: "/landing-page", status: 200, notes: "WHX Dubai Exhibition Landing Page" },
  { oldUrl: "https://medreg.in/llms-txt/", newUrl: "/llms-txt", status: 200, notes: "LLM Information Page" },
  { oldUrl: "https://medreg.in/llms.txt", newUrl: "/llms.txt", status: 200, notes: "Direct AI Search / Agent Text Endpoint" }
];
