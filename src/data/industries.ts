export interface Industry {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  cognexa: { serviceSlug: string; label: string }[];
  surakshitam: { productSlug: string; label: string }[];
}

export const industries: Industry[] = [
  {
    slug: "education",
    name: "Education",
    summary:
      "Schools, colleges, and universities managing student data, guest Wi-Fi, and compliance requirements.",
    challenges: [
      "Uncontrolled student and visitor Wi-Fi access",
      "Ransomware targeting educational institutions",
      "Student and staff data protection requirements",
      "IT teams stretched thin across campuses",
    ],
    cognexa: [
      { serviceSlug: "cybersecurity", label: "Cybersecurity Solutions" },
      { serviceSlug: "data-management", label: "Student Data Management" },
      { serviceSlug: "vidya-ai", label: "Vidya AI for Policy & SOP Access" },
      { serviceSlug: "it-consulting", label: "Campus IT Infrastructure" },
    ],
    surakshitam: [
      { productSlug: "kavach-managed-firewall", label: "Campus Firewall" },
      { productSlug: "pravesh-captive-portal", label: "Student Wi-Fi Portal" },
      { productSlug: "setu-enterprise-vpn", label: "Staff Remote Access" },
      { productSlug: "netra-network-monitoring", label: "Network Monitoring" },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Hospitals, clinics, and healthcare providers protecting patient data and maintaining uptime.",
    challenges: [
      "Patient data privacy and HIPAA-equivalent compliance",
      "Medical device and network security",
      "Ransomware and downtime risk",
      "Visitor and staff Wi-Fi segmentation",
    ],
    cognexa: [
      { serviceSlug: "cybersecurity", label: "Healthcare Cybersecurity" },
      { serviceSlug: "data-management", label: "Patient Data Management" },
      {
        serviceSlug: "ai-automation",
        label: "Process Automation for Healthcare",
      },
    ],
    surakshitam: [
      {
        productSlug: "kavach-managed-firewall",
        label: "Hospital Network Firewall",
      },
      {
        productSlug: "raksha-web-application-firewall",
        label: "Patient Portal WAF",
      },
      { productSlug: "setu-enterprise-vpn", label: "Staff Remote Access" },
      {
        productSlug: "pravesh-captive-portal",
        label: "Patient & Visitor Wi-Fi",
      },
      {
        productSlug: "durg-vulnerability-scanner",
        label: "Security Assessment",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Manufacturing plants securing OT networks, ERP data, and multi-site connectivity.",
    challenges: [
      "OT and IT network segmentation",
      "ERP data quality and duplication",
      "Multi-plant network connectivity",
      "Supply chain partner access control",
    ],
    cognexa: [
      { serviceSlug: "cybersecurity", label: "OT/IT Security" },
      { serviceSlug: "data-management", label: "ERP Data Cleansing" },
      {
        serviceSlug: "ai-automation",
        label: "Production Process Automation",
      },
      { serviceSlug: "it-consulting", label: "Multi-plant IT Infrastructure" },
    ],
    surakshitam: [
      {
        productSlug: "kavach-managed-firewall",
        label: "Plant Network Firewall",
      },
      {
        productSlug: "durg-vulnerability-scanner",
        label: "OT Vulnerability Assessment",
      },
      { productSlug: "setu-enterprise-vpn", label: "Inter-plant VPN" },
      {
        productSlug: "netra-network-monitoring",
        label: "OT Network Monitoring",
      },
    ],
  },
  {
    slug: "government",
    name: "Government & PSUs",
    summary:
      "Government departments and public sector units meeting compliance and data security mandates.",
    challenges: [
      "CERT-In compliance and reporting requirements",
      "Secure inter-department connectivity",
      "Public-facing portal security",
      "Citizen data protection",
    ],
    cognexa: [
      { serviceSlug: "cybersecurity", label: "Government Cybersecurity" },
      { serviceSlug: "data-management", label: "Citizen Data Management" },
      {
        serviceSlug: "custom-software-development",
        label: "Custom Government Portals",
      },
    ],
    surakshitam: [
      {
        productSlug: "kavach-managed-firewall",
        label: "Department Firewall",
      },
      {
        productSlug: "shastra-penetration-testing",
        label: "Mandatory Pen Testing",
      },
      {
        productSlug: "raksha-web-application-firewall",
        label: "Citizen Portal WAF",
      },
      {
        productSlug: "durg-vulnerability-scanner",
        label: "Compliance Vulnerability Scan",
      },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    summary:
      "Hotels, resorts, and hospitality businesses managing guest Wi-Fi, POS security, and payment compliance.",
    challenges: [
      "Guest Wi-Fi abuse and legal liability",
      "POS and payment system security",
      "PCI-DSS compliance requirements",
      "Multiple properties and network isolation",
    ],
    cognexa: [
      { serviceSlug: "cybersecurity", label: "Hospitality Cybersecurity" },
      { serviceSlug: "it-consulting", label: "Property IT Management" },
    ],
    surakshitam: [
      { productSlug: "kavach-managed-firewall", label: "Hotel Firewall" },
      {
        productSlug: "pravesh-captive-portal",
        label: "Branded Guest Wi-Fi Portal",
      },
      {
        productSlug: "raksha-web-application-firewall",
        label: "Booking Portal WAF",
      },
      {
        productSlug: "durg-vulnerability-scanner",
        label: "PCI-DSS Security Scan",
      },
    ],
  },
];
