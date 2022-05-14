import type { GetStartedItem } from "$lib/types/get-started.type";

export const getStartedItems: GetStartedItem[] = [
  {
    buttonLabel: "Start reading",
    description: "Learn about Gitpod by reading our docs.",
    icon: {
      src: "/svg/icons/file.svg",
      alt: "Page",
    },
    path: "/docs/getting-started",
    title: "Read docs",
  },
  {
    buttonLabel: "Start watching",
    description: "Learn about Gitpod by watching our screencasts.",
    icon: {
      src: "/svg/icons/play.svg",
      alt: "Video",
    },
    path: "/screencasts",
    title: "Watch video",
  },
  {
    buttonLabel: "Start exploring",
    description: "Learn about Gitpod by opening a template",
    icon: {
      src: "/svg/icons/chat.svg",
      alt: "Chat",
    },
    path: "/docs/quickstart",
    title: "Use Quickstart",
  },
];
