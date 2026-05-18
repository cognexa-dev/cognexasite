export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export const cognexaNav: NavItem[] = [
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Cybersecurity", href: "/services/cybersecurity/" },
      { label: "Data Management", href: "/services/data-management/" },
      { label: "AI & Automation", href: "/services/ai-automation/" },
      {
        label: "Custom Development",
        href: "/services/custom-software-development/",
      },
      { label: "IT Consulting", href: "/services/it-consulting/" },
    ],
  },
  {
    label: "Vidya AI",
    href: "/services/vidya-ai/",
  },
  {
    label: "Industries",
    href: "/industries/",
    children: [
      { label: "Education", href: "/industries/education/" },
      { label: "Healthcare", href: "/industries/healthcare/" },
      { label: "Manufacturing", href: "/industries/manufacturing/" },
      { label: "Government", href: "/industries/government/" },
      { label: "Hospitality", href: "/industries/hospitality/" },
    ],
  },
  {
    label: "Surakshitam",
    href: "https://surakshitam.com",
    external: true,
  },
  {
    label: "About",
    href: "/about/",
  },
  {
    label: "Contact",
    href: "/contact/",
  },
];

export const cognexaCta = {
  label: "Get Free Consultation",
  href: "/contact/",
};
