<script context="module">
  export const prerender = true;
</script>

<script>
  import LetsCollaborate from "../../components/community/lets-collaborate.svelte";
  import CommunityLove from "../../components/community/community-love.svelte";
  import Contribute from "../../components/community/contribute.svelte";
  import Header from "../../components/community/header.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
  import Heros from "../../components/community/heros.svelte";
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

<LetsCollaborate />

<Heros />
