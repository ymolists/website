import type { Feature } from "$lib/types/feature.type";
import type { Quote } from "$lib/types/quote.type";

export const gitpodBenefits = [
  {
    title: "5h",
    text: "average weekly<br/>time saved per engineer",
  },
  {
    title: "4x",
    text: "faster code<br/>contribution of new hires",
  },
  {
    title: "5x",
    text: 'revenue growth compared to companies with low dev experience & velocity [<a href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/developer-velocity-how-software-excellence-fuels-business-performance" target="_blank">1</a>]',
  },
];

export const quotes: Quote[] = [
  {
    text: "I'm using Gitpod almost daily when trying out new technologies, working on OSS PRs/repros or when giving demos. Welcome to the promised land of cloud IDEs.",
    author: "Johannes Schickling",
    jobTitle: "Co-founder of Prisma",
    companyLogo: {
      src: "/svg/customers/gitlab.svg",
      alt: "Prisma",
    },
    img: {
      src: "/images/customers/gitlab.png",
      alt: "GitLab",
    },
  },
  {
    text: `With Gitpod, I can review at any pull request in a full coding environment where I can edit, build, and test the contribution, by just prepending "http://gitpod.io#". Gitpod makes the pull-request review process so much nicer for me and I no longer have to do any local checkouts.`,
    author: "Julius Volz",
    jobTitle: "Co-founder of Prometheus",
    companyLogo: {
      src: "/svg/customers/customer-io.svg",
      alt: "Prometheus",
    },
    img: {
      src: "/images/opensource/4-geeks.png",
      alt: "",
    },
  },
  {
    text: "Gitpod totally changed the development velocity for RedwoodJS—it removed any issues related to configurations of dev environments and made it incredibly easy to contribute. Reviewing pull requests is delightful because they are prebuilt and ready for review!",
    author: "Tom Preston-Werner",
    jobTitle: "Co-founder RedwoodJS",
    companyLogo: {
      src: "/svg/opensource/redwood.svg",
      alt: "RedwoodJS",
    },
    img: {
      src: "/images/customers/gitlab.png",
      alt: "",
    },
  },
  {
    text: "Gitpod totally changed the development velocity for RedwoodJS—it removed any issues related to configurations of dev environments and made it incredibly easy to contribute. Reviewing pull requests is delightful because they are prebuilt and ready for review!",
    author: "Tom Preston-Werner",
    jobTitle: "Co-founder RedwoodJS",
    companyLogo: {
      src: "/svg/customers/appslayer.svg",
      alt: "RedwoodJS",
    },
    img: {
      src: "/images/customers/gitlab.png",
      alt: "",
    },
  },
];

export const developFeature: Feature = {
  title: "Develop like Google, Facebook or Shopify",
  paragraph:
    "What big tech companies are trying to build internally, Gitpod is bringing to the rest of the world: container-based development in the cloud.",
  image: {
    src: "/svg/customers/develop-like.svg",
    alt: "Develop like Google, Facebook or Shopify",
  },
};
