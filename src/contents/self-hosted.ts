import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helper";

export const pricingPlans: Pricing[] = [
  {
    title: "Open Source",
    price: "Free",
    features: [
      "10 Registered Users",
      "Public & Private Repos",
      "GitLab, GitHub and Bitbucket",
      "Unlimited Prebuilds",
      "Shared Workspaces",
      "Snapshots",
      "Admin Dashboard",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "free",
  },
  {
    title: "Professional",
    price: isEurope() ? "€29" : "$35",
    duration: "Per User/Month",
    features: ["Everything in Free", "Starts with the 11th user"],
    btnText: "Contact Sales",
    btnHref: "/enterprise-license",
    spiced: true,
    trackingName: "professional",
  },
];
