// @ts-nocheck
import type { ContactAction } from "$lib/types/contact-action.type";
import docsSvelte from "$lib/components/svgs/docs/docs.svelte";
import quickstartSvelte from "$lib/components/svgs/docs/quickstart.svelte";
import communitySvelte from "$lib/components/svgs/community.svelte";
import salesSvelte from "$lib/components/svgs/sales.svelte";

export const contactActions: ContactAction[] = [
  {
    icon: quickstartSvelte,
    transform: "scale(1.05)",
    title: "Support",
    text: "Get help with any question or issue.",
    link: {
      text: "Get Support",
      href: "/support",
    },
  },
  {
    icon: salesSvelte,
    title: "Sales",
    text: "We’d love to talk about how we can work together.",
    transform: "scale(.9)",
    link: {
      text: "Contact Sales",
      href: "/contact/sales",
    },
  },
  {
    icon: communitySvelte,
    transform: "translateY(-1rem) scale(.95)",
    title: "Community",
    text: "Connect with the community to get help for common requests.",
    link: {
      text: "Open community",
      href: "/community",
    },
  },
  {
    icon: docsSvelte,
    transform: "scale(1.1)",
    title: "Docs",
    text: "Learn more about how to become always ready to code.",
    link: {
      text: "Open documentation",
      href: "/docs",
    },
  },
];

export const noOfEngineers = [
  "1-10",
  "11-50",
  "51-250",
  "251-500",
  "501-1000",
  "+1000",
];
