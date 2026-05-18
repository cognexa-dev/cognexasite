export interface FAQ {
  question: string;
  answer: string;
}

export const cognexaFaqs: FAQ[] = [
  {
    question: "What industries does CogNexa serve?",
    answer:
      "CogNexa serves SMEs, enterprises, government departments, educational institutions, hospitals, manufacturing companies, and hospitality businesses across India.",
  },
  {
    question: "Do you offer managed services or just one-time projects?",
    answer:
      "We offer both. Many clients start with a one-time assessment or project and move to ongoing managed services for firewall, monitoring, data quality, or IT support.",
  },
  {
    question: "Can you work with our existing IT team?",
    answer:
      "Yes. We are designed to supplement or support existing IT teams — not replace them. We handle specialist areas like cybersecurity and data management so your team can focus on day-to-day operations.",
  },
  {
    question: "How quickly can you start after we reach out?",
    answer:
      "Initial consultation can typically be arranged within 24–48 hours. Project timelines depend on scope, but most assessments begin within a week of engagement.",
  },
  {
    question: "What is Vidya AI and is it safe to use internally?",
    answer:
      "Vidya AI is a local LLM-based knowledge management tool that runs entirely on your own servers. Your documents and data never leave your infrastructure, making it safe for confidential business use.",
  },
];

export const cybersecurityFaqs: FAQ[] = [
  {
    question: "What is Surakshitam?",
    answer:
      "Surakshitam is CogNexa's cybersecurity product suite, covering managed firewall (Kavach), vulnerability assessment (Durg), penetration testing (Shastra), WAF (Raksha), VPN (Setu), captive portal (Pravesh), and network monitoring (Netra).",
  },
  {
    question: "Do I need all seven products?",
    answer:
      "No. Most organizations start with firewall and vulnerability assessment, then add products as their security maturity grows. We help you choose what's right for your current risk profile and budget.",
  },
  {
    question: "Is penetration testing the same as vulnerability scanning?",
    answer:
      "No. Vulnerability scanning (Durg) is automated and identifies known weaknesses. Penetration testing (Shastra) is manual — security professionals actively try to exploit vulnerabilities to see how far an attacker could go.",
  },
];

export const dataManagementFaqs: FAQ[] = [
  {
    question: "What is master data management?",
    answer:
      "Master data management (MDM) is the process of creating a single, accurate, and consistent version of your key business data — customers, vendors, products, employees — across all your systems.",
  },
  {
    question: "How long does a data cleansing project take?",
    answer:
      "It depends on data volume and complexity. A focused data cleansing project typically runs 4–12 weeks. We start with a free data quality assessment to give you an accurate timeline and scope.",
  },
  {
    question: "Will our ERP data be affected during cleansing?",
    answer:
      "We work on copies of your data first, validate results, then apply changes to production — typically during planned maintenance windows to avoid disruption.",
  },
];

export const kavachFaqs: FAQ[] = [
  {
    question: "What is OPNsense and why do you use it?",
    answer:
      "OPNsense is a professional-grade open-source firewall platform used by enterprises worldwide. It provides enterprise firewall features without expensive licensing fees, and CogNexa manages it fully on your behalf.",
  },
  {
    question: "Do I need to manage the firewall myself?",
    answer:
      "No. Kavach is a managed firewall service. CogNexa handles deployment, configuration, rule management, updates, and monitoring. You receive regular reports and alerts.",
  },
  {
    question: "Can Kavach replace our existing firewall?",
    answer:
      "Yes. We assess your current firewall, plan the migration, and deploy Kavach with minimal downtime. We can run both in parallel during transition.",
  },
];

export const durgFaqs: FAQ[] = [
  {
    question: "How often should we run vulnerability scans?",
    answer:
      "Best practice is quarterly scans for most organizations, with additional scans after major changes (new servers, applications, or network changes). High-risk environments may need monthly scans.",
  },
  {
    question: "What does a vulnerability assessment report include?",
    answer:
      "Our reports include a risk-prioritized list of findings, CVE references, severity ratings, affected systems, and specific remediation steps for each finding.",
  },
  {
    question: "Do you fix the vulnerabilities found?",
    answer:
      "Our assessment service identifies and reports vulnerabilities. Remediation can be handled by your team or we can provide guided remediation support as an add-on.",
  },
];

export const shastraFaqs: FAQ[] = [
  {
    question: "How is penetration testing different from a vulnerability scan?",
    answer:
      "A vulnerability scan is automated and finds known weaknesses. Penetration testing is manual — our security professionals actively try to exploit vulnerabilities, chain them together, and escalate access just like a real attacker would.",
  },
  {
    question: "Will penetration testing disrupt our systems?",
    answer:
      "We agree on scope and rules of engagement before starting. Testing is conducted carefully to avoid unplanned disruptions. We can also schedule testing during low-activity periods.",
  },
  {
    question: "Who should commission a penetration test?",
    answer:
      "Organizations handling sensitive data, running web applications, meeting compliance requirements (ISO 27001, PCI-DSS, CERT-In), or wanting to validate their security posture before an incident happens.",
  },
];
