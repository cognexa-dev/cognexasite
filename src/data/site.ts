export const siteConfig = {
  cognexa: {
    name: "CogNexa",
    tagline: "Secure, Automate, and Scale Your Digital Operations",
    domain: "https://cognexa.in",
    phone: "+91 98989 31509",
    phoneRaw: "+919898931509",
    whatsapp: "https://wa.me/919898931509",
    email: "sales@cognexa.in",
    address: "India",
    gtmId: "",
    ga4Id: "G-94WKX6TQQF",
  },
  surakshitam: {
    name: "Surakshitam",
    tagline: "Complete Cybersecurity Defense for Your Business",
    domain: "https://surakshitam.com",
    phone: "+91 98989 31509",
    phoneRaw: "+919898931509",
    whatsapp: "https://wa.me/919898931509",
    email: "sales@cognexa.in",
    address: "India",
    gtmId: "",
    ga4Id: "",
    parentBrand: "CogNexa",
    parentDomain: "https://cognexa.in",
  },
} as const;

export type SiteBrand = keyof typeof siteConfig;
