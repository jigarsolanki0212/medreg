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
  name: "Medreg Consultancy LLP",
  shortName: "MedReg",
  tagline: "Let's Decode The Regulations",
  subTagline: "Medical Device Regulatory Consulting Platform",
  establishedYear: 2011,
  yearsOfExperience: "15+",
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
    { display: "info@medreg.in", value: "info@medreg.in", type: "General Inquiries" },
    { display: "bdm@medreg.in", value: "bdm@medreg.in", type: "Business Development" }
  ],
  workingHours: "Monday – Saturday: 9:30 AM – 6:30 PM IST",
  socials: {
    linkedin: "https://www.linkedin.com/company/medreg-consultancy-llp/",
    twitter: "https://twitter.com/medreg_in",
    facebook: "https://www.facebook.com/medregconsultancy",
    instagram: "https://www.instagram.com/medreg_consultancy"
  }
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
  { name: "AOSYS", image: "/assets/Mask-group-1.png" },
  { name: "Centroid Meditech", image: "/assets/Mask-group-2.png" },
  { name: "Dusons", image: "/assets/Mask-group-3.png" },
  { name: "Griportho", image: "/assets/Mask-group-4.png" },
  { name: "Solco Life & Science", image: "/assets/Mask-group-5.png" },
  { name: "Vissco", image: "/assets/Mask-group-6.png" },
  { name: "Kohinoor", image: "/assets/Mask-group-7.png" },
  { name: "WeHear", image: "/assets/Mask-group-10.png" },
  { name: "KMS", image: "/assets/Mask-group-15.png" },
  { name: "MedTech Partner", image: "/assets/Mask-group-8.png" },
  { name: "Careline Systems", image: "/assets/Mask-group-9.png" },
  { name: "BioHealth Global", image: "/assets/Mask-group-11.png" },
  { name: "OrthoCraft", image: "/assets/Mask-group-12.png" },
  { name: "Apex Surgical", image: "/assets/Mask-group-13.png" },
  { name: "TheraMed", image: "/assets/Mask-group-14.png" },
  { name: "InnoMed", image: "/assets/Mask-group-16.png" },
  { name: "SurgiCare", image: "/assets/Mask-group-17.png" },
  { name: "NovaMed", image: "/assets/Mask-group-18.png" },
  { name: "QualiCare", image: "/assets/Mask-group-19.png" }
];

export const OFFICE_GALLERY = [
  { title: "Consulting Workstations", image: "/assets/office-01.png", caption: "Spacious collaborative workstations for regulatory teams" },
  { title: "Executive Boardroom", image: "/assets/office-02.png", caption: "High-tech conference suite for client strategy and audit reviews" },
  { title: "Reception & Client Welcome", image: "/assets/office-03.png", caption: "Welcoming reception at Titanium Business Park, Ahmedabad" },
  { title: "Regulatory Documentation Wing", image: "/assets/office-04.png", caption: "Dedicated technical dossier preparation and compliance desk" },
  { title: "Audit & Analysis Lab", image: "/assets/office-05.png", caption: "Focused space for ISO 13485 and gap analysis consultations" },
  { title: "Client Strategy Lounge", image: "/assets/office-06.png", caption: "Private executive meeting rooms for confidential dossier discussions" }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "MedReg Consultancy demonstrated exceptional expertise throughout our collaboration. The team is professional, dedicated, and consistently focused on delivering results. Their guidance and execution exceeded our expectations. We strongly endorse their services.",
    author: "John Snow",
    role: "Director of Regulatory Affairs",
    company: "Global MedTech Corp"
  },
  {
    quote: "MedReg Consultancy has been exceptional in helping us address a wide range of regulatory queries. Their expertise and in-depth regulatory knowledge place them alongside the world’s leading regulatory consultants.",
    author: "Sophia Jackson",
    role: "VP Quality & Compliance",
    company: "Surgical Innovations Ltd"
  },
  {
    quote: "Our experience working with MedReg Consultancy has been excellent. The team is highly experienced, knowledgeable, results-oriented, and professional in both training and project execution. We strongly recommend their services for all medical device regulatory needs.",
    author: "Jordan Vance",
    role: "Head of Global Operations",
    company: "Healthcare Diagnostics International"
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
    id: "manufacturing-license",
    title: "Manufacturing License",
    shortDesc: "End-to-end support for obtaining Class A, B, C, & D medical device manufacturing licenses in India under MDR 2017.",
    fullDesc: "Obtaining a manufacturing license in India is essential for medical device companies seeking compliance and market access. Under the Medical Device Rules (MDR) 2017, we manage documentation, quality audit preparations, State Licensing Authority (Form MD-5 / MD-6) and Central Licensing Authority (Form MD-7 / MD-8 / MD-9) applications to secure quick approvals without inspection delays.",
    category: "india",
    badge: "Form MD-5 / MD-7 / MD-9",
    keyPoints: ["Site master file and technical dossier preparation", "Fifth Schedule QMS implementation", "Liaison with State and Central Licensing Authorities (CDSCO)", "Pre-inspection audit readiness"]
  },
  {
    id: "import-license",
    title: "Import License",
    shortDesc: "Form MD-14 application and Form MD-15 import license clearance for overseas medical device manufacturers.",
    fullDesc: "An import license is mandatory for bringing medical devices into the Indian market, ensuring compliance with CDSCO regulations. At MedReg Consultancy, we simplify the process by managing documentation, regulatory submissions, and approvals, enabling manufacturers to access India’s market efficiently and without delays.",
    category: "india",
    badge: "Form MD-14 / MD-15",
    keyPoints: ["Authorized Agent representation coordination", "Device Master File (DMF) & Plant Master File (PMF) review", "SUGAM portal electronic filing", "Fast-track query resolution"]
  },
  {
    id: "clinical-trials",
    title: "Clinical Trials (BEP & BER)",
    shortDesc: "Clinical trial protocol design, Ethics Committee approvals, and Clinical Investigation regulatory clearances.",
    fullDesc: "Clinical trials are a crucial step in demonstrating the safety and effectiveness of medical devices before market approval. At MedReg Consultancy, we assist in end-to-end trial management: protocol design, regulatory approvals, site selection, monitoring, and reporting, ensuring compliance with Indian and global standards.",
    category: "india",
    badge: "GCP & CDSCO Approvals",
    keyPoints: ["Clinical trial protocol and investigator brochure development", "Subject Expert Committee (SEC) presentations", "Institutional Ethics Committee approvals", "Clinical Evaluation Report (CER) compilation"]
  },
  {
    id: "free-sale-certificate",
    title: "Free Sale Certificate (FSC)",
    shortDesc: "Procurement of Free Sale Certificates from State and Central Licensing Authorities for global exports.",
    fullDesc: "A Free Sale Certificate (FSC) is an essential document that confirms medical devices are legally sold and freely available in the Indian market, making it a prerequisite for exports. At MedReg Consultancy, we assist manufacturers in obtaining FSCs by managing the complete application and documentation process, ensuring smooth and timely approvals for global market access.",
    category: "india",
    badge: "Export Compliance",
    keyPoints: ["Application preparation under Form MD-18 / State SLA", "Verification of market standing and valid license", "Apostille and embassy legalization coordination", "Speedy turnaround for tender and export compliance"]
  },
  {
    id: "product-endorsement",
    title: "Product Endorsement",
    shortDesc: "Adding new device models, accessories, or shelf-life extensions to existing manufacturing and import licenses.",
    fullDesc: "Product endorsement from regulatory authorities validates the safety, quality, and compliance of your medical devices, building trust and credibility in the market. At MedReg Consultancy, we support you through the endorsement process with precise documentation, regulatory submissions, and expert guidance to help your product gain approval seamlessly.",
    category: "india",
    badge: "License Amendment",
    keyPoints: ["Form MD-16 / SLA amendment filings", "Equivalence rationale and risk assessment updates", "Grouping rationale for device family additions", "Updated labeling and packaging sign-off"]
  },
  {
    id: "retention-of-license",
    title: "Retention of License",
    shortDesc: "Timely license retention fee submissions and ongoing compliance maintenance under MDR 2017.",
    fullDesc: "Retention of a license is a mandatory requirement to keep your medical device manufacturing or import license valid in India. At MedReg Consultancy, we manage the entire retention process, tracking deadlines, preparing documentation, and handling submissions, ensuring uninterrupted compliance and seamless market access for your business.",
    category: "india",
    badge: "License Continuity",
    keyPoints: ["Deadline tracking to prevent license lapse or penalty", "Retention fee calculation and challan submission", "Documentation audit for ongoing compliance", "Confirmation certificate retrieval from CDSCO / SLA"]
  },
  {
    id: "market-standing-certificate",
    title: "Market Standing Certificate (MSC)",
    shortDesc: "Official documentation proving continuous marketing and supply history for government tenders.",
    fullDesc: "A Market Standing Certificate (MSC) demonstrates that your medical device has been legally sold and is in good standing in the Indian market, enhancing credibility for exports and regulatory approvals. At MedReg Consultancy, we assist with the complete MSC process, from documentation to submission, ensuring smooth and timely certification.",
    category: "india",
    badge: "Tender Credibility",
    keyPoints: ["Sales data verification and batch reconciliation", "Preparation of non-recall declarations", "Submission to SLA / CDSCO authorities", "Certified reports for international tenders"]
  },
  {
    id: "non-conviction-certificate",
    title: "Non-Conviction Certificate (NCC)",
    shortDesc: "Official certificate verifying a clean compliance record with zero violations of Drugs & Cosmetics Act.",
    fullDesc: "A Non-Conviction Certificate (NCC) confirms that a medical device manufacturer or importer has a clean compliance record with no regulatory violations and is often required for licenses and approvals. At MedReg Consultancy, we guide you through the entire NCC process, preparing documentation, coordinating with authorities, and ensuring timely issuance for seamless regulatory compliance.",
    category: "india",
    badge: "Regulatory Clean Record",
    keyPoints: ["Affidavit and declaration drafting", "Application submission to licensing authority", "Follow-up and official endorsement", "Essential prerequisite for global market registrations"]
  },
  {
    id: "labeling-review",
    title: "Labeling Review",
    shortDesc: "Comprehensive labeling, IFU, and symbol compliance audit per Rule 44 of Medical Device Rules 2017.",
    fullDesc: "Accurate and compliant labelling is critical for medical devices to meet regulatory standards and ensure patient safety. At MedReg Consultancy, we review and validate your product labels, including content, language, symbols, and regulatory requirements, helping you achieve full compliance and market readiness.",
    category: "india",
    badge: "Rule 44 Compliance",
    keyPoints: ["Verification of MRP, Batch, Mfg Date, Expiry, and License numbers", "Standardized ISO 15223-1 symbol validation", "Instructions for Use (IFU) & Patient Information Leaflet (PIL) check", "Unique Device Identification (UDI) barcoding readiness"]
  },
  {
    id: "product-development",
    title: "Product Development Regulatory Support",
    shortDesc: "Design control, risk management, and regulatory de-risking from proof-of-concept to commercial scale.",
    fullDesc: "Successful medical device product development requires regulatory compliance at every stage. At MedReg Consultancy, we support you from concept to launch, assisting with design, documentation, risk assessment, and regulatory approvals, to ensure your product meets all Indian and international standards efficiently and safely.",
    category: "india",
    badge: "Design Controls",
    keyPoints: ["Design History File (DHF) structuring per ISO 13485", "Risk management planning per ISO 14971", "Bench testing and biocompatibility test planning", "Fast-track design verification to approval"]
  },
  {
    id: "authorized-agent",
    title: "Indian Authorized Agent (IAR) Services",
    shortDesc: "Official in-country regulatory representation for foreign manufacturers without an Indian entity.",
    fullDesc: "An Authorised Agent acts as a regulatory liaison between medical device manufacturers and Indian authorities, ensuring compliance and smooth approvals. At MedReg Consultancy, we serve as your trusted Authorised Agent, managing submissions, correspondence, and regulatory requirements to streamline your market entry and ensure ongoing compliance in India.",
    category: "india",
    badge: "In-Country Representative",
    keyPoints: ["Holding import licenses on behalf of manufacturer", "Direct communication channel with CDSCO", "Post-market vigilance and adverse event reporting", "Full regulatory power of attorney protection"]
  },
  {
    id: "wholesale-license",
    title: "Wholesale License (MD-41 / MD-42)",
    shortDesc: "Licensing support for distributors, wholesalers, and stockists distributing medical devices in India.",
    fullDesc: "A wholesale license is mandatory for distributing medical devices across India, ensuring compliance with CDSCO regulations and legal standards. At MedReg Consultancy, we guide you through the entire licensing process, from documentation and submissions to approvals, helping you start or expand your distribution network seamlessly and compliantly.",
    category: "india",
    badge: "Distribution Compliance",
    keyPoints: ["Form MD-41 / MD-42 registration on SUGAM", "Competent technical person qualification verification", "Storage premises compliance (cold chain, climate control)", "Ongoing distribution record compliance"]
  },
  {
    id: "sterilization-validation",
    title: "Sterilization Process Validation",
    shortDesc: "Validation protocols and reports for Ethylene Oxide (EO), Gamma Irradiation, and Moist Heat Steam processes.",
    fullDesc: "Sterilisation process validation ensures that medical devices are safely and effectively sterilised, meeting all regulatory and quality standards. At MedReg Consultancy, we assist you with validation planning, execution, documentation, and regulatory compliance, ensuring your devices are safe, reliable, and market-ready.",
    category: "india",
    badge: "ISO 11135 / 11137",
    keyPoints: ["Bioburden determination and sterility testing protocols", "Sub-lethal and fractional cycle validation", "Aeration and residual EO/ECH dissipation studies", "Periodic re-validation and change control"]
  },
  {
    id: "qms-documentation",
    title: "QMS Documentation",
    shortDesc: "Full Quality Management System development aligned with ISO 13485:2016 and MDR 2017 Fifth Schedule.",
    fullDesc: "A robust Quality Management System (QMS) is essential for regulatory compliance and consistent product quality. At MedReg Consultancy, we help medical device manufacturers develop, organise, and maintain QMS documentation, including SOPs, manuals, and records, ensuring full compliance with ISO 13485 and other regulatory standards.",
    category: "india",
    badge: "Fifth Schedule & ISO 13485",
    keyPoints: ["Quality manual and standard operating procedures (SOPs)", "Document control, CAPA, and internal audit procedures", "Management review meeting workflows", "Regulatory audit defense and auditor training"]
  },
  {
    id: "amc-services",
    title: "AMC – Annual Maintenance Contract for Documentation",
    shortDesc: "Dedicated annual regulatory retainer to keep dossiers, licenses, and quality systems perpetually updated.",
    fullDesc: "Our Annual Maintenance Contract (AMC) services ensure your regulatory documentation remains up-to-date, compliant, and audit-ready throughout the year. At MedReg Consultancy, we manage regular updates, reviews, and regulatory changes, helping you maintain seamless compliance without interruptions.",
    category: "india",
    badge: "Continuous Retainer",
    keyPoints: ["Continuous monitoring of CDSCO gazette notifications", "Routine dossier revisions and version control", "Quarterly audit readiness inspections", "Dedicated regulatory account manager on call"]
  },
  {
    id: "device-master-file",
    title: "Device Master File (DMF) Preparation",
    shortDesc: "Comprehensive technical dossiers structured in accordance with CDSCO Fourth Schedule requirements.",
    fullDesc: "A Device Master File (DMF) is essential for documenting the design, manufacturing, and quality processes of a medical device. At MedReg Consultancy, we assist in preparing comprehensive DMFs, that cover all technical and regulatory requirements, ensuring smooth approvals and regulatory compliance in India and abroad.",
    category: "india",
    badge: "Technical Dossier",
    keyPoints: ["Complete device description, materials, and specifications", "Design verification and validation test reports", "Risk management summary and clinical data synthesis", "Plant Master File (PMF) cross-referencing"]
  },
  {
    id: "voluntary-registration",
    title: "Voluntary Registration Support",
    shortDesc: "Timely registration of legacy medical devices and compliance transition under SUGAM portal.",
    fullDesc: "Voluntary registration allows medical device manufacturers to proactively align with regulatory standards, demonstrating product safety and quality. At MedReg Consultancy, we assist you throughout the registration process, preparing documentation, submitting applications, and ensuring compliance, helping you gain credibility and market confidence in India.",
    category: "india",
    badge: "SUGAM Portal",
    keyPoints: ["Device classification check per CDSCO orders", "Initial registration filing and generation of registration number", "Transition pathway to full manufacturing/import license", "Compliance assurance during notification phases"]
  },
  {
    id: "neutral-code",
    title: "Neutral Code Application",
    shortDesc: "Approval for neutral code allocation on labels for contract manufacturers and private label exporters.",
    fullDesc: "A Neutral Code is a unique identifier assigned to medical devices for regulatory tracking and compliance purposes. At MedReg Consultancy, we assist manufacturers in obtaining and managing Neutral Codes, ensuring accurate product identification and smooth regulatory approvals in India.",
    category: "india",
    badge: "Confidential Contract Mfg",
    keyPoints: ["Application to Licensing Authority under Drug Rules", "Confidentiality protection for contract manufacturers", "Standardized coding on secondary and tertiary packaging", "Regulatory validation for international client contracts"]
  },
  {
    id: "internal-audit",
    title: "Internal Audit & Mock Inspections",
    shortDesc: "Rigorous pre-CDSCO mock audits and compliance health checks conducted by certified Lead Auditors.",
    fullDesc: "Internal audits are essential for assessing compliance, identifying gaps, and ensuring your quality management system meets regulatory standards. At MedReg Consultancy, we conduct thorough internal audits for medical device manufacturers, providing actionable insights and guidance to strengthen processes and maintain full compliance.",
    category: "india",
    badge: "Audit Readiness",
    keyPoints: ["Comprehensive checklist covering Fifth Schedule and ISO 13485", "Non-conformance root cause analysis and CAPA support", "Staff training and interview coaching for CDSCO inspector visits", "Audit summary report with corrective action priorities"]
  }
];

export const EUROPE_SERVICES: ServiceItem[] = [
  {
    id: "ce-mark",
    title: "CE Mark Certification (EU MDR & IVDR)",
    shortDesc: "Comprehensive pathway to obtaining CE mark certification under Regulation (EU) 2017/745 (MDR) and 2017/746 (IVDR).",
    fullDesc: "Obtaining CE Mark certification is essential for medical device companies seeking compliance and market access in Europe. At MedReg Consultancy, we streamline the entire process, from regulatory assessment and technical file preparation to audits and approvals, helping you achieve CE certification efficiently and confidently.",
    category: "europe",
    badge: "EU MDR 2017/745",
    keyPoints: ["MDR / IVDR conformity assessment route selection", "Notified Body application and liaison", "Technical documentation compilation", "Audit preparation and non-conformity resolution"]
  },
  {
    id: "technical-master-file-eu",
    title: "Technical Master File Preparation",
    shortDesc: "Annex II and Annex III compliant technical documentation ready for Notified Body submission.",
    fullDesc: "Preparing a comprehensive Technical Master File is crucial for medical device companies to demonstrate compliance with European regulations. At MedReg Consultancy, we manage the entire process, from compiling technical documentation and risk assessments to ensuring alignment with CE requirements, helping you maintain accuracy and regulatory readiness with confidence.",
    category: "europe",
    badge: "Annex II & III MDR",
    keyPoints: ["Device description and specifications", "Design and manufacturing information", "General Safety & Performance Requirements (GSPR) synthesis", "Benefit-risk analysis and clinical evaluation integration"]
  },
  {
    id: "gap-analysis-eu",
    title: "Gap Analysis (MDD to MDR Transition)",
    shortDesc: "Rigorous gap assessment comparing existing documentation against the stringent requirements of EU MDR 2017/745.",
    fullDesc: "Conducting a gap analysis is vital for medical device companies to identify regulatory compliance gaps and streamline market entry in Europe. At MedReg Consultancy, we evaluate your existing processes and documentation against EU requirements, providing clear recommendations to bridge gaps and ensure your products meet all regulatory standards efficiently and confidently.",
    category: "europe",
    badge: "MDR Transition",
    keyPoints: ["Detailed clause-by-clause checklist review", "Clinical data gap evaluation", "QMS upgrade mapping (ISO 13485 to MDR Article 10)", "Actionable roadmap with prioritized remediation steps"]
  },
  {
    id: "clinical-evaluation-eu",
    title: "Clinical Evaluation (CER & CEP)",
    shortDesc: "Preparation of Clinical Evaluation Plans (CEP) and Reports (CER) per MEDDEV 2.7/1 rev 4 and MDCG guidelines.",
    fullDesc: "Performing a clinical evaluation is essential for medical device companies to demonstrate safety and performance compliance in Europe. At MedReg Consultancy, we manage the entire process, from reviewing clinical data and literature to preparing evaluation reports in line with EU regulations, helping you achieve regulatory approval efficiently and confidently.",
    category: "europe",
    badge: "MDCG & MEDDEV",
    keyPoints: ["Systematic scientific literature search protocols", "State-of-the-Art (SOTA) analysis", "Equivalence justification under strict MDR criteria", "Clinical Evaluation Report (CER) compilation by medical experts"]
  },
  {
    id: "gspr-checklist",
    title: "General Safety And Performance Requirements (GSPR)",
    shortDesc: "Exhaustive Annex I GSPR checklist mapping device evidence to harmonized European standards.",
    fullDesc: "Meeting the General Safety and Performance Requirements is crucial for medical device companies to ensure compliance and market readiness in Europe. At MedReg Consultancy, we assess your products against GSPR standards, prepare necessary documentation, and provide guidance to help you achieve regulatory approval efficiently and confidently.",
    category: "europe",
    badge: "Annex I MDR",
    keyPoints: ["Identification of applicable and non-applicable requirements", "Direct cross-referencing to test reports and clinical data", "Harmonized standards and Common Specifications (CS) compliance", "Complete evidence matrix for Notified Body review"]
  },
  {
    id: "post-market-surveillance-eu",
    title: "Post Market Surveillance (PMS & PSUR)",
    shortDesc: "PMS Plan, Periodic Safety Update Report (PSUR), and Post-Market Clinical Follow-up (PMCF) plans.",
    fullDesc: "Preparing a Post-Market Surveillance (PMS) report is essential for medical device companies to monitor product safety and compliance in Europe. At MedReg Consultancy, we guide you through data collection, analysis, and report preparation, helping you maintain regulatory adherence and ensure continuous product safety with confidence.",
    category: "europe",
    badge: "PMS / PSUR / PMCF",
    keyPoints: ["PMS Plan per Article 84 and Annex III", "PSUR preparation for Class IIa, IIb, and III devices", "PMCF plan and evaluation report authoring", "Vigilance and incident reporting procedures"]
  },
  {
    id: "risk-analysis-iso14971",
    title: "Risk Analysis as per EN ISO 14971",
    shortDesc: "Comprehensive risk management file development aligned with EN ISO 14971:2019 and MDR Annex I.",
    fullDesc: "Conducting a risk analysis as per EN ISO 14971 is critical for medical device companies to ensure product safety and regulatory compliance in Europe. At MedReg Consultancy, we assess potential risks, implement mitigation strategies, and prepare detailed reports, helping you meet EU requirements efficiently and confidently.",
    category: "europe",
    badge: "EN ISO 14971:2019",
    keyPoints: ["Hazard identification, fault tree, and FMEA analyses", "Risk control measure implementation and verification", "Overall residual risk evaluation", "Benefit-risk ratio documentation"]
  },
  {
    id: "prrc-support",
    title: "Person Responsible for Regulatory Compliance (PRRC)",
    shortDesc: "Expert advisory and support for appointing and training your PRRC in accordance with Article 15 of EU MDR.",
    fullDesc: "Designating a Person Responsible for Regulatory Compliance (PRRC) is mandatory for medical device companies under EU regulations. At MedReg Consultancy, we assist in identifying, training, and supporting the PRRC, ensuring all regulatory obligations are met efficiently and with full confidence.",
    category: "europe",
    badge: "Article 15 MDR",
    keyPoints: ["Qualification and expertise evaluation per Article 15", "PRRC responsibilities SOP and charter formulation", "Outsourced PRRC support for micro and small enterprises", "Continuous regulatory training and guidance"]
  },
  {
    id: "device-classification-eu",
    title: "Medical Device Classification",
    shortDesc: "Accurate classification under Annex VIII of EU MDR and IVDR with robust rule-by-rule justification.",
    fullDesc: "Accurate medical device classification is essential for compliance with European regulations and determining the appropriate regulatory pathway. At MedReg Consultancy, we assess your products against GSPR EU rules, and guide you through the necessary compliance requirements, ensuring a smooth and confident European market entry.",
    category: "europe",
    badge: "Annex VIII Classification",
    keyPoints: ["Rule 1 to 22 analysis under MDR 2017/745", "Invasive, active, and implantable device scrutiny", "Conformity assessment route mapping", "Classification defense document for Notified Bodies"]
  },
  {
    id: "sterilization-validation-eu",
    title: "Sterilization Validation (ISO 11135 / 11137 / 17665)",
    shortDesc: "European standards compliant sterilization validation for EO, radiation, and steam sterilization.",
    fullDesc: "Sterilisation validation is critical for medical device companies to ensure product safety and compliance with European regulations. At MedReg Consultancy, we plan, execute, and document sterilisation validation processes, helping you meet EU standards efficiently and with complete confidence.",
    category: "europe",
    badge: "EN ISO Standards",
    keyPoints: ["Sterility Assurance Level (SAL 10^-6) verification", "Packaging validation per ISO 11607-1/2", "Accelerated and real-time aging studies", "Routine monitoring and revalidation schedules"]
  },
  {
    id: "cleaning-disinfection-validation",
    title: "Cleaning & Disinfection Validation",
    shortDesc: "Validation of reprocessing procedures for reusable medical devices per ISO 17664.",
    fullDesc: "Cleaning and disinfection validation is essential for medical device companies to ensure safety, effectiveness, and compliance with European regulations. At MedReg Consultancy, we design, execute, and document validation processes, helping you achieve regulatory adherence efficiently and with full confidence.",
    category: "europe",
    badge: "ISO 17664 Reusable Devices",
    keyPoints: ["Soil marker selection and inoculation testing", "Manual and automated washing protocol validation", "Disinfection efficacy and residue testing", "Validated cleaning and sterilization IFU instructions"]
  },
  {
    id: "amc-services-eu",
    title: "AMC – Annual Maintenance Contract for EU Documentation",
    shortDesc: "Annual maintenance retainer to ensure ongoing conformity, annual PSUR updates, and Notified Body surveillance readiness.",
    fullDesc: "Maintaining up-to-date regulatory documentation is crucial for ongoing compliance in the European market. At MedReg Consultancy, we offer Annual Maintenance Contract (AMC) services to manage, update, and audit your documentation regularly, ensuring your medical devices remain fully compliant with EU regulations.",
    category: "europe",
    badge: "Annual Retainer",
    keyPoints: ["Periodic PSUR updates and Notified Body submissions", "MDCG guidance updates tracking and implementation", "Surveillance audit preparation and mock drills", "EUDAMED database record maintenance"]
  },
  {
    id: "authorized-rep-eu",
    title: "European Authorized Representative (EC REP)",
    shortDesc: "Professional EC REP representation through our verified European channel partners.",
    fullDesc: "Having a reliable Authorised Agent is essential for medical device companies to meet European regulatory requirements. At MedReg Consultancy, we provide Authorised Agent services through our active channel partners, ensuring smooth regulatory communication, compliance, and market access across Europe.",
    category: "europe",
    badge: "EC REP Partnership",
    keyPoints: ["Article 11 mandate agreement and representation", "Official address for European labeling and packaging", "Liaison with Competent Authorities across EU member states", "EUDAMED actor registration and single registration number (SRN)"]
  }
];

export const USA_SERVICES: ServiceItem[] = [
  {
    id: "establishment-listing",
    title: "Establishment Registration & Device Listing",
    shortDesc: "Annual FDA FURLS registration and medical device listing for domestic and foreign establishments.",
    fullDesc: "Establishing and listing your medical device company is essential for compliance and market access in the US. At MedReg Consultancy, we streamline the entire process, from FDA establishment registration and device listing to documentation and submission management, helping you achieve full regulatory compliance efficiently and confidently.",
    category: "usa",
    badge: "FDA FURLS",
    keyPoints: ["Owner/Operator identification and user fee payment coordination", "Device listing with appropriate product code and regulation number", "Annual renewal tracking (Oct 1 - Dec 31)", "Proprietary name and labeler code integration"]
  },
  {
    id: "gudid-submission",
    title: "GUDID Submission (UDI Compliance)",
    shortDesc: "Preparation and electronic submission of Unique Device Identification data to FDA's GUDID database.",
    fullDesc: "Submitting your device information to the FDA’s GUDID database is essential for US market compliance. At MedReg Consultancy, we manage the entire GUDID submission process, from data preparation to validation and reporting, helping you ensure accurate registration and seamless regulatory adherence with confidence.",
    category: "usa",
    badge: "FDA UDI / GUDID",
    keyPoints: ["DI (Device Identifier) attributes compilation", "HL7 SPL and ESG portal submission", "GS1 / HIBCC barcoding format validation", "Public GUDID confirmation and maintenance"]
  },
  {
    id: "qms-qmsr-implementation",
    title: "QMS Implementation – QMSR (21 CFR 820)",
    shortDesc: "Transition and implementation of FDA's updated Quality Management System Regulation (QMSR) harmonized with ISO 13485.",
    fullDesc: "Implementing a robust Quality Management System (QMS) is critical for USFDA compliance. At MedReg Consultancy, we guide medical device companies through QMS implementation and QMSR processes, from documentation and training to audits, helping you achieve regulatory readiness and maintain ongoing compliance with confidence.",
    category: "usa",
    badge: "21 CFR Part 820",
    keyPoints: ["Quality System manual updating to QMSR standards", "Design controls (21 CFR 820.30) & risk management harmonization", "Document control, purchasing controls, and CAPA procedures", "QSIT inspection methodology readiness"]
  },
  {
    id: "premarket-510k",
    title: "Premarket Notification – 510(k)",
    shortDesc: "Full preparation, testing gap closure, and submission of Traditional, Special, and Abbreviated 510(k) dossiers.",
    fullDesc: "Submitting a 510(k) premarket notification is essential for medical device companies seeking US market entry. At MedReg Consultancy, we streamline the entire 510(k) submission process, from preparing required documentation and risk assessments to interacting with the FDA, helping you achieve timely regulatory clearance with confidence.",
    category: "usa",
    badge: "510(k) Clearance",
    keyPoints: ["Substantial Equivalence (SE) determination and predicate selection", "eSTAR electronic submission compilation", "Biocompatibility, sterility, software, and EMC test report gap closure", "Refuse-to-Accept (RTA) checklist pre-validation"]
  },
  {
    id: "q-submission",
    title: "Q-Submission (Pre-Sub Program)",
    shortDesc: "Structured FDA Pre-Submission meetings and liaison to obtain early, written regulatory feedback.",
    fullDesc: "A Q-Submission is a vital tool for engaging with the FDA and clarifying regulatory requirements before submitting your medical device. At MedReg Consultancy, we manage the entire Q-Submission process, from preparing briefing documents to coordinating interactive discussions, helping you obtain clear guidance and ensure a smooth path to compliance with confidence.",
    category: "usa",
    badge: "Pre-Sub Liaison",
    keyPoints: ["Formulation of specific, targeted regulatory and testing questions", "Comprehensive briefing package authoring", "Coordination of teleconference or written response", "Strategic incorporation of FDA feedback into 510(k) file"]
  },
  {
    id: "small-business-documentation",
    title: "Small Business Documentation (SBD)",
    shortDesc: "Preparation and submission of FDA Small Business Qualification to reduce official user fees by up to 75%.",
    fullDesc: "Proper documentation is crucial for small medical device businesses to ensure FDA compliance and smooth market entry. At MedReg Consultancy, we assist in preparing and organizing all required regulatory documents, guiding you through submissions and maintaining compliance efficiently and confidently.",
    category: "usa",
    badge: "Fee Reduction (-75%)",
    keyPoints: ["Form FDA 3602 / 3602A compilation", "Tax return documentation and revenue verification (< $100M)", "Timely submission before FDA annual fiscal cycle", "Significant savings on 510(k), PMA, and De Novo user fees"]
  },
  {
    id: "interactive-fda-discussion",
    title: "Interactive Discussion With FDA After Submission",
    shortDesc: "Direct lead consultant advocacy during substantive review and interactive feedback rounds.",
    fullDesc: "Engaging in an interactive discussion with the FDA after submission is essential for clarifying regulatory requirements and addressing questions. At MedReg Consultancy, we guide medical device companies through the entire process, from preparing discussion materials to coordinating meetings, helping you obtain clear feedback and ensuring a smooth path to compliance with confidence.",
    category: "usa",
    badge: "FDA Advocacy",
    keyPoints: ["Direct communication with FDA Lead Reviewer", "Rapid response within 10-day review windows", "Scientific justification and testing data clarifications", "Preventing formal Hold or Deficiency status"]
  },
  {
    id: "responding-to-additional-info",
    title: "Responding to Additional Information (AI Requests)",
    shortDesc: "Thorough, scientific responses to FDA AI hold letters within tight statutory deadlines.",
    fullDesc: "Responding to FDA requests for Additional Information is critical to keep your medical device submission on track. At MedReg Consultancy, we assist in preparing and organizing accurate responses to submitting them promptly, ensuring your regulatory review progresses smoothly and confidently.",
    category: "usa",
    badge: "AI Response",
    keyPoints: ["In-depth analysis of FDA deficiency letter points", "Coordinating supplementary bench testing or documentation", "Point-by-point formal response packet authoring", "Submission via eSTAR to reset review clock"]
  },
  {
    id: "us-agent-service",
    title: "US Agent Service",
    shortDesc: "Official in-country US Agent representation required by FDA for foreign establishments.",
    fullDesc: "Having a designated US Agent is essential for medical device companies to meet FDA requirements and maintain regulatory compliance. At MedReg Consultancy, we provide reliable US Agent services, managing communication with the FDA, handling submissions, and ensuring your company stays fully compliant with confidence.",
    category: "usa",
    badge: "Official US Agent",
    keyPoints: ["Official point of contact for FDA communications and inspections", "Assistance in answering questions on imported devices", "Receiving official FDA notices and correspondence", "Secure, confidential corporate representation"]
  },
  {
    id: "fda-483-response",
    title: "FDA Form 483 Response and Warning Letter Remediation",
    shortDesc: "Rapid 15-day formal responses, root cause analysis, and corrective action plans following FDA inspections.",
    fullDesc: "Responding to FDA Form 483 observations is critical for maintaining compliance and avoiding regulatory delays. At MedReg Consultancy, we guide medical device companies through the entire process, from analyzing inspection findings to preparing and submitting detailed responses, ensuring timely resolution and regulatory confidence.",
    category: "usa",
    badge: "15-Day Inspection Response",
    keyPoints: ["Rigorous root cause analysis (5-Whys, Fishbone)", "Comprehensive Corrective and Preventive Action (CAPA) plan", "15-day formal response authoring and submission", "Warning Letter and Import Alert prevention"]
  },
  {
    id: "complaint-file-submission",
    title: "Complaint File Submission & MDR (21 CFR 803)",
    shortDesc: "Post-market Medical Device Reporting (MDR), complaint handling, and recall management per FDA regulations.",
    fullDesc: "Proper complaint file submission is essential for maintaining USFDA compliance and ensuring patient safety. At MedReg Consultancy, we help medical device companies manage the entire process, from documenting complaints to submitting reports, ensuring regulatory adherence and efficient handling of product issues with confidence.",
    category: "usa",
    badge: "21 CFR 803 / 820.198",
    keyPoints: ["Medical Device Reporting (MDR) eMDR gateway setup", "Form FDA 3500A adverse event reporting", "Complaint investigation and root cause workflows", "Health Hazard Evaluation (HHE) and recall support"]
  },
  {
    id: "ecopy-estar-guidance",
    title: "e-Copy & eSTAR Guidance",
    shortDesc: "Expert technical formatting, XML validation, and electronic submission through FDA eSTAR and ESG systems.",
    fullDesc: "Submitting an accurate electronic copy (e-Copy) is essential for FDA compliance and smooth regulatory review. At MedReg Consultancy, we guide medical device companies through preparing, formatting, and submitting e-Copies, ensuring your documentation meets FDA requirements efficiently and with confidence.",
    category: "usa",
    badge: "FDA eSTAR Submissions",
    keyPoints: ["Validation with latest FDA eSTAR templates", "Electronic PDF bookmarking and hyperlinking rules", "FDA Electronic Submissions Gateway (ESG) transmission", "Zero technical rejections at intake"]
  },
  {
    id: "gmp-compliance-inspection",
    title: "GMP Compliance for USFDA Inspection (QSIT)",
    shortDesc: "On-site and remote mock audits simulating FDA Quality System Inspection Technique (QSIT).",
    fullDesc: "Ensuring GMP compliance is critical for a successful USFDA inspection. At MedReg Consultancy, we help medical device companies prepare for inspections by reviewing processes, implementing best practices, and guiding documentation, ensuring your facility meets FDA standards efficiently and confidently.",
    category: "usa",
    badge: "QSIT Mock Audits",
    keyPoints: ["QSIT subsystem auditing (Management, Design, CAPA, Production)", "Front-room / back-room logistics training", "Mock interviews with key personnel and management", "Post-inspection response and remediation protocols"]
  }
];

export const GLOBAL_SERVICES: ServiceItem[] = [
  {
    id: "technical-file-imdrf",
    title: "Technical File / Dossier Preparation (IMDRF & GHTF)",
    shortDesc: "Standardized Technical Documentation (STED) and dossiers aligned with IMDRF and GHTF international guidelines.",
    fullDesc: "MedReg Consultancy streamlines Technical File and Dossier preparation, ensuring IMDRF/GHTF compliance and country-specific alignment for faster approvals and smooth market entry across global markets including LATAM, APAC, and the Middle East.",
    category: "global",
    badge: "IMDRF / GHTF STED",
    keyPoints: ["Common submission format for multi-country registrations", "Modular dossier construction saving duplicate effort", "Pre-clinical and clinical evaluation synthesis", "Fast-track national adaptations"]
  },
  {
    id: "qms-iso13485",
    title: "ISO 13485:2016 Certification & QMS Documentation",
    shortDesc: "Turnkey development, implementation, and certification support for ISO 13485:2016 Quality Management Systems.",
    fullDesc: "MedReg Consultancy simplifies QMS documentation with ISO 13485:2016 and QMSR-aligned SOPs, manuals, and records, ensuring audit-ready, compliant, and approval-focused systems recognized by registrars and notified bodies worldwide.",
    category: "global",
    badge: "ISO 13485:2016",
    keyPoints: ["Complete quality manual and procedure suite", "Staff training and implementation coaching", "Internal audit and management review execution", "Registrar selection and Stage 1 / Stage 2 audit support"]
  },
  {
    id: "mdsap-support",
    title: "MDSAP – Medical Device Single Audit Program",
    shortDesc: "Comprehensive preparation and audit readiness for the unified audit covering USA, Canada, Brazil, Japan, and Australia.",
    fullDesc: "Complete MDSAP support—from documentation and gap analysis to mock audits and non-conformance closure. Enables medical device manufacturers to satisfy the quality system requirements of multiple jurisdictions in a single regulatory audit.",
    category: "global",
    badge: "5 Jurisdictions in 1 Audit",
    keyPoints: ["MDSAP Audit Model task-by-task gap analysis", "Country-specific regulatory requirement integration (e.g., ANVISA RDC, Health Canada CMDR)", "Comprehensive mock audit simulating MDSAP Auditing Organizations (AO)", "Non-conformance grading and rapid response resolution"]
  },
  {
    id: "country-registrations",
    title: "Country Registrations (LATAM, APAC, Middle East)",
    shortDesc: "Product registrations across ANVISA (Brazil), TGA (Australia), Health Canada, SFDA (Saudi Arabia), and SAHPRA (South Africa).",
    fullDesc: "Global healthcare regulatory solutions tailored to your licensing and certification needs. We navigate local regulatory authorities including ANVISA (Brazil), TGA (Australia), Health Canada, SFDA (Saudi Arabia / Middle East), and Southeast Asian jurisdictions.",
    category: "global",
    badge: "Multi-Market Access",
    keyPoints: ["Local regulatory intelligence and pathway definition", "Dossier translation and localization", "In-country authorized representative coordination", "Import license and market authorization acquisition"]
  },
  {
    id: "internal-audit-global",
    title: "Internal Audit & Gap Assessments",
    shortDesc: "Independent, rigorous quality audits conducted by certified Lead Auditors to ensure ongoing compliance with international standards.",
    fullDesc: "Internal audits are vital for maintaining regulatory compliance. At MedReg Consultancy, we evaluate your quality management system, identify gaps, and provide guidance on corrective actions to strengthen compliance and ensure inspection readiness with confidence.",
    category: "global",
    badge: "Lead Auditor Certified",
    keyPoints: ["Multi-standard audit scopes (ISO 13485, MDSAP, GMP)", "Identification of systemic risks and procedural vulnerabilities", "Actionable root cause and CAPA roadmaps", "Detailed executive audit report for leadership"]
  },
  {
    id: "supplier-development",
    title: "Supplier Development, Inspection & Evaluation",
    shortDesc: "Critical supplier qualification, quality agreements, and on-site vendor audits to safeguard your supply chain.",
    fullDesc: "Reliable suppliers are key to quality and compliance. At MedReg Consultancy, we handle supplier development, audits, and performance monitoring to ensure a strong, compliant supply chain and smooth market access.",
    category: "global",
    badge: "Supply Chain Assurance",
    keyPoints: ["Critical component supplier risk categorization", "Quality Technical Agreement (QTA) drafting", "On-site and remote supplier quality audits", "Incoming inspection and supplier rating systems"]
  },
  {
    id: "process-validation-global",
    title: "Process Validation (IQ, OQ, PQ)",
    shortDesc: "Installation, Operational, and Performance Qualification for critical manufacturing, cleanroom, and packaging processes.",
    fullDesc: "Process validation ensures consistent product quality and regulatory compliance. At MedReg Consultancy, we plan, execute, and document validation activities to help you minimize risks and achieve smooth approvals with confidence.",
    category: "global",
    badge: "IQ / OQ / PQ Protocols",
    keyPoints: ["Validation Master Plan (VMP) formulation", "Installation Qualification (IQ), Operational Qualification (OQ), Performance Qualification (PQ)", "Cleanroom qualification per ISO 14644", "Packaging sealing and barrier validation per ISO 11607"]
  },
  {
    id: "bep-ber-biological",
    title: "Biological Evaluation (BEP & BER - ISO 10993)",
    shortDesc: "Biological Evaluation Plans (BEP) and Reports (BER) with strategic test waivers to cut costs and speed approvals.",
    fullDesc: "BEP & BER biological safety package with test waiver reports to cut testing costs, speed approvals, and shorten submission timelines. Fully compliant with ISO 10993-1, chemical characterization (ISO 10993-18), and toxicological risk assessments (ISO 10993-17).",
    category: "global",
    badge: "ISO 10993 Safety Package",
    keyPoints: ["Chemical characterization data evaluation", "Test waiver justification reports saving thousands in lab costs", "Toxicological risk assessment (TRA)", "Complete Biological Evaluation Report (BER) sign-off"]
  }
];

export const ALL_SERVICES = [
  ...INDIA_SERVICES,
  ...EUROPE_SERVICES,
  ...USA_SERVICES,
  ...GLOBAL_SERVICES
];

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "What services does MedReg Consultancy provide?",
    answer: "We provide end-to-end regulatory solutions for medical device and IVD manufacturers, including CDSCO licensing in India, CE Mark certification under EU MDR/IVDR, US FDA 510(k) and establishment registrations, MDSAP implementation, ISO 13485:2016 quality systems, technical file preparation, clinical evaluations, and international country registrations across over 20 nations."
  },
  {
    question: "Which certifications and licenses can MedReg help with?",
    answer: "Our core expertise covers CDSCO manufacturing (MD-5, MD-9) and import (MD-15) licenses in India; CE Marking (EU MDR 2017/745 and IVDR 2017/746) in Europe; US FDA 510(k), PMA, Q-Submissions, and US Agent representation; ISO 13485:2016 certification; MDSAP across five global jurisdictions; UKCA marking; and country registrations across ANVISA (Brazil), TGA (Australia), Health Canada, and SFDA (Saudi Arabia)."
  },
  {
    question: "Can you assist both startups and established global manufacturers?",
    answer: "Yes. Since 2011, we have partnered with over 950 clients—ranging from early-stage MedTech startups requiring initial classification, design controls, and FDA Small Business fee reductions, to multinational enterprise manufacturers managing multi-product global technical dossiers, annual maintenance contracts, and complex Notified Body audits."
  },
  {
    question: "How experienced is your team in medical device regulations?",
    answer: "MedReg brings over 15 years of dedicated regulatory consulting experience. Our multidisciplinary team combines biomedical engineers, quality auditors, clinical evaluators, and former regulatory professionals with hands-on experience across more than 2,000 successful projects spanning surgical disposables, orthopaedic implants, sutures, diagnostic consumables, and active medical devices."
  }
];

export const INDIA_FAQS: FaqItem[] = [
  {
    question: "What does MedReg Consultancy do for Indian medical device compliance?",
    answer: "We provide end-to-end regulatory solutions for medical device manufacturers in India, including manufacturing licenses (Form MD-5, MD-9), import licenses (Form MD-15), clinical trial approvals, QMS implementation per Fifth Schedule, Device Master File (DMF) preparation, labeling reviews per Rule 44, and internal mock audits."
  },
  {
    question: "Which licenses and certifications do you help with in India?",
    answer: "We cover all CDSCO licenses under Medical Device Rules 2017: Manufacturing licenses for Class A & B (State Licensing Authority) and Class C & D (Central Licensing Authority); Import licenses (MD-14/MD-15); Wholesale distribution licenses (MD-41/MD-42); Free Sale Certificates (FSC); Market Standing Certificates; Non-Conviction Certificates; and Indian Authorized Agent (IAR) representation."
  },
  {
    question: "Can you help startups and global manufacturers alike enter the Indian market?",
    answer: "Yes, we tailor regulatory roadmaps for domestic startups establishing new manufacturing facilities as well as multinational corporations seeking to import devices into India through our Authorized Agent services and SUGAM portal management."
  },
  {
    question: "How does MedReg Consultancy assist with manufacturing and import licenses?",
    answer: "We prepare all technical files, site master files, and plant master files, review test reports, submit applications via the CDSCO SUGAM portal, liaise with licensing authorities, and coordinate audit readiness to ensure prompt issuance without inspection delays."
  },
  {
    question: "Do you support clinical trials for medical devices in India?",
    answer: "Yes, we assist with clinical investigation protocol development, Subject Expert Committee (SEC) presentations, Institutional Ethics Committee approvals, and GCP compliance monitoring for innovative or high-risk medical devices."
  }
];

export const EUROPE_FAQS: FaqItem[] = [
  {
    question: "What services does MedReg Consultancy offer for medical device compliance in Europe?",
    answer: "We provide end-to-end support for CE Marking under EU MDR 2017/745 and IVDR 2017/746, including Technical Master File compilation (Annex II & III), gap analysis, Clinical Evaluation Reports (CER), GSPR checklists, Post-Market Surveillance (PMS/PSUR), Risk Management per EN ISO 14971, PRRC advisory, and European Authorized Representative (EC REP) partnership."
  },
  {
    question: "How can MedReg help with CE Certification for my medical device?",
    answer: "We conduct an initial gap analysis, determine the correct classification under Annex VIII, compile all required technical documentation and test reports, liaise with your chosen Notified Body, and assist during on-site and technical audits to resolve any non-conformities swiftly."
  },
  {
    question: "Do you support ongoing compliance after certification in Europe?",
    answer: "Yes. Our Annual Maintenance Contract (AMC) services cover periodic PSUR updates, PMS data analysis, vigilance reporting, EUDAMED updates, and annual Notified Body surveillance audit preparations."
  },
  {
    question: "What is the role of the PRRC, and do you assist with it?",
    answer: "Under Article 15 of EU MDR, every manufacturer must have a Person Responsible for Regulatory Compliance (PRRC) who possesses requisite regulatory expertise. We help evaluate PRRC qualifications, draft responsibilities procedures, and offer specialized advisory support for micro and small enterprises."
  },
  {
    question: "Can MedReg assist with market entry and regulatory representation in Europe?",
    answer: "Yes. Through our established European channel partners, we provide official European Authorized Representative (EC REP) services, enabling non-EU manufacturers to place compliant devices on the European market."
  }
];

export const USA_FAQS: FaqItem[] = [
  {
    question: "What regulatory services does MedReg Consultancy offer for medical devices in the US?",
    answer: "We offer comprehensive US FDA consulting including 510(k) Premarket Notifications, Q-Submissions, FDA Establishment Registration & Device Listing (FURLS), GUDID/UDI submission, QMS implementation aligned with QMSR (21 CFR Part 820), official US Agent representation, and FDA Form 483 inspection responses."
  },
  {
    question: "How can MedReg help with USFDA premarket submissions like 510(k) or PMA?",
    answer: "We identify appropriate predicate devices, formulate substantial equivalence arguments, assemble electronic eSTAR submissions, identify necessary bench/biocompatibility/software testing gaps, and handle interactive review communications with FDA reviewers."
  },
  {
    question: "What support does MedReg provide for FDA inspections and compliance?",
    answer: "We prepare facilities for FDA inspections using Quality System Inspection Technique (QSIT) mock audits, train personnel for front-room and back-room management, and if an inspection occurs, draft formal 15-day responses to FDA Form 483 observations and CAPA plans."
  },
  {
    question: "How does MedReg assist with US Agent and GUDID requirements?",
    answer: "We act as your official in-country US Agent for foreign facilities registered with the FDA, and manage end-to-end data formatting, HL7 SPL packaging, and electronic submission to the FDA's Global UDI Database (GUDID)."
  },
  {
    question: "Can MedReg support small businesses entering the US MedTech market?",
    answer: "Yes. We help eligible businesses prepare and submit Small Business Qualification requests (Form FDA 3602/3602A), allowing qualifying manufacturers to save up to 75% on standard FDA 510(k) and PMA user fees."
  }
];

export const GLOBAL_FAQS: FaqItem[] = [
  {
    question: "Which international markets does MedReg Consultancy support for medical device approvals?",
    answer: "In addition to India, Europe, and the USA, we support registrations in Canada (Health Canada), Australia (TGA), Brazil (ANVISA), the United Kingdom (UKCA), Saudi Arabia (SFDA), South Africa (SAHPRA), and Southeast Asian markets."
  },
  {
    question: "What services does MedReg provide to ensure compliance with global regulatory standards?",
    answer: "We implement ISO 13485:2016 Quality Management Systems, guide manufacturers through the Medical Device Single Audit Program (MDSAP), prepare IMDRF/GHTF standardized technical files, and conduct process validations (IQ, OQ, PQ) and sterilization validations."
  },
  {
    question: "How does MedReg help with Technical File or Dossier preparation for international markets?",
    answer: "We create modular, standardized technical dossiers (STED) compliant with IMDRF guidance, allowing manufacturers to leverage a single core technical file across multiple national submissions with minimal regional adaptation."
  },
  {
    question: "Can MedReg assist with ongoing compliance and audits across global jurisdictions?",
    answer: "Yes. We provide mock MDSAP and ISO 13485 audits, critical supplier inspections, annual maintenance retainers, and ongoing post-market surveillance support."
  },
  {
    question: "Why should companies choose MedReg Consultancy for multi-market regulatory support?",
    answer: "With over 15 years in operation, 2,000+ completed projects, and a presence across 20+ countries, our cross-border regulatory expertise enables manufacturers to design an efficient, unified global submission strategy rather than addressing jurisdictions in costly isolation."
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
