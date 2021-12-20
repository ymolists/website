import type { Feature } from "../types/feature.type";
import type { Quote } from "../types/quote.type";
// @ts-ignore
import Workspaces from "../components/workspaces.svelte";
import { linuxSource } from "./terminal";
import type { Card } from "../types/card.type";
import type { ExploreSection } from "../types/explore-section.type";
import {
  codeAnywhereFeature,
  multiTrackDevelopmentFeature,
} from "./home/features";

export const quotes: Quote[] = [
  {
    text: "Gitpod totally changed the development velocity for RedwoodJS — it removed any issues related to configurations of dev environments and made it incredibly easy to contribute. Reviewing pull requests is delightful because they are prebuilt and ready for review!",
    author: "Tom Preston-Werner",
    jobTitle: "Co-founder of GitHub",
    companyLogo: {
      src: "/svg/opensource/redwood.svg",
      alt: "RedwoodJS",
    },
    img: {
      src: "/images/opensource/mojombo.jpg",
      alt: "",
    },
  },
  {
    text: "I'm using Gitpod almost daily when trying out new technologies, working on OSS PRs/repros or when giving demos. Welcome to the promised land of cloud IDEs.",
    author: "Johannes Schickling",
    jobTitle: "Founder of Prisma",
    companyLogo: {
      src: "/svg/opensource/prisma.svg",
      alt: "Prisma",
    },
    img: {
      src: "/images/opensource/schickling.jpg",
      alt: "",
    },
  },
  {
    text: `With Gitpod, I can review at any pull request in a full coding environment where I can edit, build, and test the contribution, by just prepending "http://gitpod.io#". Gitpod makes the pull-request review process so much nicer for me and I no longer have to do any local checkouts.`,
    author: "Julius Volz",
    jobTitle: "Co-founder of Prometheus",
    companyLogo: {
      src: "/svg/opensource/prometheus.svg",
      alt: "Prometheus",
    },
    img: {
      src: "/images/opensource/juliusv.jpg",
      alt: "",
    },
  },
];

export const features: Feature[] = [
  {
    title: "Onboard contributors in seconds",
    paragraph:
      "Often the problem with building a community of contributors is the project setup friction. With Gitpod, people can contribute to your project with a single click. Tedious environment setups, contributing guides and maintenance activities no longer exist. You'll receive more contributions and contributions are easier to review!",
    previewComponent: Workspaces,
  },
  {
    ...codeAnywhereFeature,
    paragraph:
      "No need for over powered laptops, a chrome book and <a href='https://ghuntley.com/anywhere'>even an iPad</a> will work just fine. Everyone can contribute even if they don't have access to powerful (expensive) computers.",
  },
  {
    ...multiTrackDevelopmentFeature,
    paragraph:
      "You can have multiple workspaces running at the same time. Start your day by opening each new pull-request in seperate side by side workspaces. Thanks to <a href='https://www.youtube.com/watch?v=ZtlJ0PakUHQ'>pre-builds</a> contributions are already compiled and ready to go.",
  },
  {
    title: "Accept contributions safely",
    paragraph:
      "With Gitpod, no packages or dependencies are downloaded to onto your devices which <a href='https://ghuntley.com/sudo-rm-rf/'>contains security incidents</a> and inhibits malicious actors pivoting towards completely compromising your workstation.",
    terminal: {
      source: linuxSource,
      dark: true,
      shadow: false,
      narrow: true,
      skipToEnd: true,
    },
  },
];

export const programBenefits: Card[] = [
  {
    icon: {
      src: "/svg/media-kit/logo-mark.svg",
      alt: "Gitpod",
      transform: "scale(.95)",
    },
    title: "Gitpod for free",
    text: "Maintainers get unlimited hours for usage on public repos. Contributors to your project are provided with a generous free plan for up to 50h a month, including private repos. For projects that run their own infrastructure, <a href='https://www.gitpod.io/self-hosted'>Gitpod self-hosted</a> licenses are also available at no cost.",
  },
  {
    icon: {
      src: "/svg/heart.svg",
      alt: "Special treats",
      transform: "scale(0.8)",
    },
    title: "Special treats",
    text: "If your open-source software appears in our bill of materials then Gitpod would like to unconditionally <a href='https://github.com/moby/buildkit/issues/2525'>shout you some beers</a>, some nice food <a href='https://www.gitpod.io/blog/devxconf-wrap'>or more</a> as our way of saying thank-you.",
  },
  {
    icon: {
      src: "/svg/contact/sales.svg",
      alt: "Personal support",
      transform: "scale(1.6) translateY(3px)",
    },
    title: "Personal support",
    text: "Just like physical infrastructure, digital infrastructure needs <a href='https://devxconf.org/opensource'>regular upkeep and maintenance</a>. We are here to help you with getting started and can provide ongoing support for maintaining the <a href='https://www.gitpod.io/docs/references/gitpod-yml'>.gitpod.yml</a> if you want. ",
  },
];

export const faqs = [
  {
    title: "I'm not sure if I qualify for the program?",
    text: "If you produce software that is relied upon by everyday developers (which if we are honest, is the digital infrastructure that powers the world) then you are in. Fill in the application form and let us decide.",
  },
  {
    title: "I'm not eligible but still want to use Gitpod",
    text: "We have a very generous <a href='/pricing'>free plan</a> for up to 50h a month, including private repos.",
  },
];

export const cards: Card[] = [
  {
    icon: {
      src: "/svg/opensource/openvsx.svg",
      alt: "Open VSX Registry",
    },
    title: "Open VSX Registry",
    text: "A marketplace for open-source VS Code extensions that can be used for any compatible editor.",
    link: {
      href: "https://github.com/eclipse/openvsx",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/leeway.svg",
      alt: "Leeway",
    },
    title: "Leeway",
    text: "Leeway is a heavily caching build system for Go, Yarn and Docker projects.",
    link: {
      href: "https://github.com/gitpod-io/leeway",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/theia.svg",
      alt: "Theia",
    },
    title: "Theia",
    text: "An extensible framework to develop full-fledged multi-language Cloud & Desktop IDEs.",
    link: {
      href: "https://github.com/eclipse-theia/theia",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/open-vscode.svg",
      alt: "OpenVS Code",
      transform: "scale(1.5)",
    },
    title: "OpenVS Code",
    text: "A version of VS Code that runs a server on a remote machine and allows access through a modern web browser.",
    link: {
      href: "https://github.com/gitpod-io/openvscode-server",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/dazzle.svg",
      alt: "Dazzle",
    },
    title: "Dazzle",
    text: 'An Docker/OCI image builder to build independent layers where a change to one layer does not invalidate the ones sitting "above" it.',
    link: {
      href: "https://github.com/gitpod-io/dazzle/",
      text: "View on GitHub",
    },
  },
];

export const exploreContents: ExploreSection = {
  title: "Apply Now",
  description:
    "Spend less time reviewing pull-requests, onboarding contributors and more time on building great things.",
  note: "Upgrade your account to our complementary plan for the people who maintain the infrastructure that the world depends upon.",
  link: {
    text: "Apply Now",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScL5vaxUrbermCKvyUrJ6eg4gQU18ORxg4wwbA5WuYxxWgEuQ/viewform",
  },
  useKumquatIllustration: true,
};
