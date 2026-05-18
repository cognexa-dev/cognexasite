export interface Service {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  primaryKeyword: string;
  cta: string;
  ctaHref: string;
  icon: string;
  benefits: string[];
  audiences: string[];
}

export const cognexaServices: Service[] = [
  {
    slug: "cybersecurity",
    name: "Cybersecurity Solutions",
    shortName: "Cybersecurity",
    summary:
      "Protect your business with managed firewall, vulnerability assessment, penetration testing, WAF, VPN, and 24/7 security monitoring.",
    description:
      "CogNexa delivers comprehensive cybersecurity through the Surakshitam product suite — covering managed firewall, vulnerability scanning, penetration testing, web application firewall, enterprise VPN, captive portal, and network monitoring.",
    primaryKeyword: "cybersecurity services in India",
    cta: "Get Free Security Assessment",
    ctaHref: "/contact/",
    icon: "shield",
    benefits: [
      "Proactive threat detection and response",
      "Compliance-ready security controls",
      "Managed and monitored 24/7",
      "Designed for SMEs and enterprises",
    ],
    audiences: ["CISOs", "IT Managers", "Business Owners", "Compliance Teams"],
  },
  {
    slug: "data-management",
    name: "Data Management",
    shortName: "Data Management",
    summary:
      "Clean, consolidate, and manage your critical business data — master data management, data cleansing, item code consolidation, and data enrichment.",
    description:
      "Poor data quality costs organizations time and money every day. CogNexa helps businesses clean duplicate records, standardize item codes, enrich missing fields, and build reliable master data foundations for ERP, CRM, and reporting systems.",
    primaryKeyword: "enterprise data management services India",
    cta: "Get Free Data Assessment",
    ctaHref: "/contact/",
    icon: "database",
    benefits: [
      "Eliminate duplicate and inconsistent records",
      "Faster ERP migrations and go-lives",
      "Reliable reporting and dashboards",
      "Ongoing data quality monitoring",
    ],
    audiences: ["Data Teams", "ERP Managers", "Operations Teams", "CFOs"],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    shortName: "AI & Automation",
    summary:
      "Automate repetitive business processes, deploy local LLMs, and build AI-powered workflows that reduce cost and improve speed.",
    description:
      "CogNexa helps organizations identify automation opportunities and deploy AI solutions — from document intelligence and workflow automation to local LLM deployments for private, on-premise knowledge management.",
    primaryKeyword: "AI automation services India",
    cta: "Book AI Consultation",
    ctaHref: "/contact/",
    icon: "cpu",
    benefits: [
      "Reduce manual workload by up to 60%",
      "Deploy AI on your own infrastructure",
      "Private, secure, no cloud dependency",
      "Practical automation for real business problems",
    ],
    audiences: [
      "Operations Managers",
      "IT Teams",
      "HR Teams",
      "Business Owners",
    ],
  },
  {
    slug: "vidya-ai",
    name: "Vidya AI",
    shortName: "Vidya AI",
    summary:
      "A local LLM-powered knowledge base for enterprises — train AI on your own documents, SOPs, and policies. Private, fast, and offline-capable.",
    description:
      "Vidya AI is CogNexa's local knowledge management product. It allows organizations to deploy an AI assistant trained on their own internal documents — policy manuals, SOPs, product catalogues, HR guides — without sending data to external cloud services.",
    primaryKeyword: "local LLM enterprise knowledge base India",
    cta: "Request Vidya AI Demo",
    ctaHref: "/contact/",
    icon: "brain",
    benefits: [
      "100% private — runs on your own servers",
      "Train on your SOPs, manuals, and policies",
      "Fast answers for staff and support teams",
      "No recurring cloud AI subscription fees",
    ],
    audiences: [
      "Enterprises",
      "Educational Institutions",
      "Hospitals",
      "Government Departments",
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    shortName: "Custom Development",
    summary:
      "Purpose-built software for your business — dashboards, portals, automation tools, mobile apps, and integrations.",
    description:
      "CogNexa builds custom software solutions tailored to specific business workflows — internal dashboards, customer portals, reporting tools, mobile applications, and API integrations that connect your existing systems.",
    primaryKeyword: "custom software development India",
    cta: "Discuss Your Project",
    ctaHref: "/contact/",
    icon: "code",
    benefits: [
      "Built exactly for your workflow",
      "Integrates with existing ERP and CRM",
      "Scalable and maintainable",
      "Fixed-scope or agile delivery",
    ],
    audiences: ["SMEs", "Enterprises", "Startups", "Operations Teams"],
  },
  {
    slug: "it-consulting",
    name: "IT Consulting & Infrastructure",
    shortName: "IT Consulting",
    summary:
      "Strategic IT consulting, infrastructure planning, managed services, and technology roadmap support for growing businesses.",
    description:
      "CogNexa provides practical IT consulting — from infrastructure audits and technology assessments to managed IT services and long-term technology planning for businesses scaling their operations.",
    primaryKeyword: "IT consulting services India",
    cta: "Get IT Assessment",
    ctaHref: "/contact/",
    icon: "server",
    benefits: [
      "Vendor-neutral, practical advice",
      "Infrastructure audit and gap analysis",
      "Managed IT support options",
      "Technology roadmap planning",
    ],
    audiences: [
      "SME Business Owners",
      "IT Managers",
      "CFOs",
      "Operations Directors",
    ],
  },
];
