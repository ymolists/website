import type {
  ComparisonTable,
  ComparisonTooltip,
} from "../types/comparison-table";
import type { TableData } from "../types/table-data.type";

const tooltips: ComparisonTooltip[] = [
  { text: "Pricing (Hosted)" },
  { text: "Free Tier" },
  { text: "License" },
  { text: "Availability" },
  {
    path: "/svg/github.svg",
    text: "GitHub Integration",
  },
  {
    path: "/svg/gitlab.svg",
    text: "GitLab Integration",
  },
  {
    path: "/svg/bitbucket.svg",
    text: "Bitbucket Integration",
  },
  {
    path: "/svg/brands/gcp.svg",
    text: "Self-Host on GKE",
  },
  {
    path: "/svg/brands/aws.svg",
    text: "Self-Host on EKS",
  },
  {
    path: "/svg/brands/azure.svg",
    text: "Self-Host on AKS",
  },
  {
    path: "/svg/brands/kubernetes.svg",
    text: "Self-Host on Kubernetes",
  },
  { text: "Prebuilds" },
  { text: "Snapshots" },
  { text: "VS Code Extensions" },
  { text: "iPad Support" },
  { text: "Virtual Desktop (VNC)" },
  { text: "Desktop VS Code" },
  { text: "Multi-IDE Support" },
];

const gitpodData: TableData = {
  image: {
    src: "/svg/media-kit/logo-mark.svg",
    alt: "Gitpod",
    class: "",
  },
  isHighlighted: true,
  details: [
    {
      term: "Pricing (Hosted)",
      text: "Free for Open-Source",
    },
    {
      term: "Free Tier",
      text: "50h per month",
    },
    {
      term: "License",
      text: "Open Source",
    },
    {
      term: "Availability",
      text: "Everyone",
    },
    {
      term: "GitHub Integration",
      availibility: true,
    },
    {
      term: "GitLab Integration",
      availibility: true,
    },
    {
      term: "Bitbucket Integration",
      availibility: true,
    },
    {
      term: "Self-Host on GKE",
      availibility: true,
    },
    {
      term: "Self-Host on EKS",
      availibility: true,
    },
    {
      term: "Self-Host on AKS",
      availibility: true,
    },
    {
      term: "Self-Host on Kubernetes",
      availibility: true,
    },
    {
      term: "Prebuilds",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "VS Code Extensions",
      availibility: true,
    },
    {
      term: "iPad Support",
      availibility: true,
    },
    {
      term: "Virtual Desktop (VNC)",
      availibility: true,
    },
    {
      term: "Desktop VS Code",
      availibility: true,
    },
    {
      term: "Multi-IDE Support",
      availibility: true,
    },
  ],
};

const codespacesData: TableData = {
  title: "Github Codespaces",
  isHighlighted: false,
  details: [
    {
      term: "Pricing (Hosted)",
      text: "$$$",
    },
    {
      term: "Free Tier",
      availibility: false,
    },
    {
      term: "License",
      text: "Proprietary",
    },
    {
      term: "Availability",
      text: "Teams, Enterprise",
    },
    {
      term: "GitHub Integration",
      availibility: true,
    },
    {
      term: "GitLab Integration",
      availibility: false,
    },
    {
      term: "Bitbucket Integration",
      availibility: false,
    },
    {
      term: "Self-Host on GKE",
      availibility: false,
    },
    {
      term: "Self-Host on EKS",
      availibility: false,
    },
    {
      term: "Self-Host on AKS",
      availibility: false,
    },
    {
      term: "Self-Host on Kubernetes",
      availibility: false,
    },
    {
      term: "Prebuilds",
      availibility: false,
    },
    {
      term: "Snapshots",
      availibility: false,
    },
    {
      term: "VS Code Extensions",
      availibility: true,
    },
    {
      term: "iPad Support",
      availibility: true,
    },
    {
      term: "Virtual Desktop (VNC)",
      availibility: true,
    },
    {
      term: "Desktop VS Code",
      availibility: true,
    },
    {
      term: "Multi-IDE Support",
      availibility: false,
    },
  ],
};

export const codeSpacesComparisonTable: ComparisonTable = {
  dataSets: [gitpodData, codespacesData],
  tooltips,
};
