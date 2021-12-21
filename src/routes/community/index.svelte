<script context="module">
  export const prerender = true;
</script>

<script>
  import CommunityLove from "../../components/community/community-love.svelte";
  import Contribute from "../../components/community/contribute.svelte";
  import Header from "../../components/community/header.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
  import FeatureBox from "../../components/feature-box.svelte";
  import SectionCommon from "../../components/section-common.svelte";
  import Resources from "../../components/resources.svelte";
  import { letsCollaborateActions as resources } from "../../contents/community";
</script>

<OpenGraph
  data={{
    title: "Community",
    description:
      "Welcome! Our community is at the centre of everything at Gitpod. We're excited to have you join us 🧡",
  }}
/>

<Header />

<Contribute />

<CommunityLove />

<SectionCommon
  title="Let’s collaborate"
  text="Would you like to collaborate? We’re excited to hear your ideas. Get in
  contact."
>
  <Resources cards={resources} slot="content" />
</SectionCommon>

<FeatureBox
  feature={{
    title: "Gitpod Community Heroes",
    paragraph:
      "Join us empowering developers to make engineering collaborative and joyful again. Are you our next community hero?",
    moreButton: {
      text: "View Community Heroes Program",
      href: "/community/heroes",
    },
    image: {
      src: "/images/heroes/heart-of-gitpod.png",
      alt: "Community Heroes",
    },
  }}
/>
