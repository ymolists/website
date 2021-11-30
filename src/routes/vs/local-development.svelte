<script context="module">
  export const prerender = true;
</script>

<script>
  import MeetBobAndAlice from "../../components/gitpod-vs-local-development/meet-bob-and-alice.svelte";
  import Header from "../../components/gitpod-vs-local-development/header.svelte";
  import Explore from "../../components/explore.svelte";
  import GitpodVsLocalDevelopmentPost from "../../components/gitpod-vs-local-development-post.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
  import CalloutSecondary from "../../components/callout-secondary.svelte";
</script>

<OpenGraph
  data={{
    title: "Gitpod vs local development",
    description:
      "Why should you move your dev environment to the cloud? Here is the answer.",
  }}
/>

<Header />

<MeetBobAndAlice />

<CalloutSecondary
  title="Feel the difference"
  text="Spin up fresh, automated dev environments for each task, in the cloud, in
  seconds."
/>

<GitpodVsLocalDevelopmentPost
  title="Full blog post"
  text={`
  Read the full blog post by <a href="https://twitter.com/mikenikles" target="_blank">Mike Nikles</a>, our Senior Developer Success Engineer, sharing the story of moving to the cloud.
  `}
/>

<Explore />
