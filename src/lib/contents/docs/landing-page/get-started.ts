// @ts-nocheck
import docsSvelte from "$lib/components/svgs/docs/docs.svelte";
import quickstartSvelte from "$lib/components/svgs/docs/quickstart.svelte";
import videoSvelte from "$lib/components/svgs/docs/video.svelte";
import type { GetStartedItem } from "$lib/types/get-started.type";

export const getStartedItems: GetStartedItem[] = [
  {
    buttonLabel: "Start reading",
    description: "Learn about Gitpod by reading our docs.",
    icon: docsSvelte,
    path: "/docs/getting-started",
    title: "Read docs",
  },
  {
    buttonLabel: "Start watching",
    description: "Learn about Gitpod by watching our screencasts.",
    // icon: {
    //   path: "/svg/docs/landing-page/video.svg",
    //   transform: "scale(1)",
    // },
    icon: videoSvelte,
    path: "/screencasts",
    title: "Watch video",
  },
  {
    buttonLabel: "Start exploring",
    description: "Learn about Gitpod by opening a template",
    icon: quickstartSvelte,
    path: "/docs/quickstart",
    title: "Use Quickstart",
  },
];
