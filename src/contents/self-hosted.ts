import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helpers";

export const pricingPlans: Pricing[] = [
  {
    title: "Community",
    price: "$0",
    duration: "Open Source",
    features: [
      "Unlimited Users",
      "Public & Private Repos",
      "GitLab, GitHub and Bitbucket",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "community",
  },
  {
    title: "Free",
    price: "$0",
    duration: "For the first 10 users",
    features: [
      "Public & Private Repos",
      "GitLab, GitHub and Bitbucket",
      "+ Prebuilds",
      "+ Shared Workspaces",
      "+ Snapshots",
      "+ Admin Dashboard",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "free",
  },
  {
    title: "Professional",
    price: isEurope() ? "€29" : "$35",
    duration: "Per User/Month",
    features: [
      "Starts after the 11th user",
      "Everything From Free",
      "+ Standard Support",
    ],
    btnText: "Register and Install now",
    btnHref: "/enterprise-license",
    spiced: true,
    trackingName: "professional",
  },
];
