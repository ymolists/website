import type { TableData } from "$lib/types/table-data.type";
import type { Pricing } from "$lib/types/pricing.type";
import { isEurope } from "$lib/utils/helpers";
import type { ComparisonTable } from "../types/comparison-table";

export const pricingPlans: Pricing[] = [
  {
    title: "Community",
    price: `${isEurope() ? "€" : "$"}0`,
    duration: "Open Source",
    features: [
      "Unlimited users",
      "Public & private repos",
      "GitLab, GitHub and Bitbucket",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "community",
  },
  {
    title: "Free",
    price: `${isEurope() ? "€" : "$"}0`,
    duration: "for the first 10 users",
    features: [
      "Public & private repos",
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
    duration: "per user/month",
    features: [
      "Starts after the 11th user",
      "Everything from Free",
      "+ Standard support",
    ],
    btnText: "Register and Install now",
    btnHref: "/enterprise-license",
    spiced: true,
    trackingName: "professional",
  },
];

export const freePlanTableData: TableData = {
  title: "Free",
  subtitle: `${isEurope() ? "€" : "$"}0 per user/month`,
  link: {
    text: "Install now",
    href: "/docs/self-hosted/latest",
  },
  details: [
    {
      term: "Public & Private Repos",
      availibility: true,
    },
    {
      term: "Team Limit",
      text: "<span class='font-bold'>10 registered users</span>",
    },
    {
      term: "Inactivity timeout",
      text: "unlimited",
    },
    {
      term: "timeout Boost",
      text: "unlimited",
    },
    {
      term: "Parallel Workspaces",
      text: "unlimited",
    },
    {
      term: "prebuilds",
      text: "unlimited",
    },
    {
      term: "Shared workspaces",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "Admin Dashboard",
      availibility: true,
    },
    {
      term: "Encrypted backups",
      availibility: true,
    },
    {
      term: "multi-ide support",
      availibility: true,
    },
    {
      term: "GitLab",
      availibility: true,
    },
    {
      term: "GitHub",
      availibility: true,
    },
    {
      term: "Bitbucket",
      availibility: true,
    },
  ],
};

export const professionalPlanTableData: TableData = {
  title: "Professional",
  subtitle: `${isEurope() ? "€29" : "$35"} per user/month`,
  link: {
    text: "Register and Install Now",
    href: "/enterprise-license",
  },
  details: [
    {
      term: "Public & Private Repos",
      availibility: true,
    },
    {
      term: "Team Limit",
      text: "<span class='font-bold'>unlimited</span>",
    },
    {
      term: "Inactivity timeout",
      text: "unlimited",
    },
    {
      term: "timeout Boost",
      text: "unlimited",
    },
    {
      term: "Parallel Workspaces",
      text: "unlimited",
    },
    {
      term: "prebuilds",
      text: "unlimited",
    },
    {
      term: "Shared workspaces",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "Admin Dashboard",
      availibility: true,
    },
    {
      term: "Encrypted backups",
      availibility: true,
    },
    {
      term: "multi-ide support",
      availibility: true,
    },
    {
      term: "GitLab",
      availibility: true,
    },
    {
      term: "GitHub",
      availibility: true,
    },
    {
      term: "Bitbucket",
      availibility: true,
    },
  ],
};

export const tableData: ComparisonTable = {
  tooltips: [
    {
      text: "Public & Private Repos",
    },
    {
      text: "Team Limit",
      tooltip: "Maximum number of users in the team.",
    },
    {
      text: "Inactivity timeout",
      tooltip: "Time after which workspaces are automatically stopped.",
    },
    {
      text: "timeout Boost",
      tooltip: "Extra workspace inactivity timeout boost.",
    },
    {
      text: "Parallel Workspaces",
      tooltip: "Run multiple workspaces at the same time.",
    },
    {
      text: "prebuilds",
      tooltip:
        "Enable prebuilds to continuously build your Git branches, so you and your team can always start coding right away.",
    },
    {
      text: "Shared workspaces",
      tooltip: "Pair program with your team by sharing running workspaces.",
    },
    {
      text: "Snapshots",
      tooltip:
        "create a copy of your workspace by sharing a snapshot with your team.",
    },
    {
      text: "Admin Dashboard",
      tooltip: "Access to exclusive stats of your team.",
    },
    {
      text: "Encrypted backups",
      tooltip:
        "Keeps your data safe. More on <a href='/security'>security</a>.",
    },
    {
      text: "multi-ide support",
      tooltip:
        "Connect Gitpod with your favourite IDE. View <a href='/docs/editors'>docs/IDE</a> to see all suported IDE’s.",
    },
    {
      path: "/svg/gitlab.svg",
      text: "GitLab",
    },
    {
      path: "/svg/github.svg",
      text: "GitHub",
    },
    {
      path: "/svg/bitbucket.svg",
      text: "Bitbucket",
    },
  ],
  dataSets: [freePlanTableData, professionalPlanTableData],
};
