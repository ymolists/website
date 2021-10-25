<script context="module">
  export const prerender = true;
</script>

<script>
  import MeetBobAndAlice from "../../components/gitpod-vs-local-development/meet-bob-and-alice.svelte";
  import Header from "../../components/gitpod-vs-local-development/header.svelte";
  import Explore from "../../components/explore.svelte";
  import GitpodVsLocalDevelopmentPost from "../../components/gitpod-vs-local-development-post.svelte";
  import FeelTheDifference from "../../components/gitpod-vs-local-development/feel-the-difference.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    title: "Gitpod vs local development",
    description: "Why should you move your dev environment to the cloud? Here is the answer."
  }}
/>

<Header />

<MeetBobAndAlice />

<FeelTheDifference />

<GitpodVsLocalDevelopmentPost
  title="Full blog post"
  text={`
  Read the full blog post by <a href="https://twitter.com/mikenikles" target="_blank">Mike Nikles</a>, our Senior Developer Success Engineer, sharing the story of moving to the cloud.
  `}
/>

<Explore />
