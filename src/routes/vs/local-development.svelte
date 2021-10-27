<script context="module">
  export const prerender = true;
</script>

<script>
  import MeetBobAndAlice from "../../components/gitpod-vs-local-development/meet-bob-and-alice.svelte";
  import Header from "../../components/gitpod-vs-local-development/header.svelte";
  import Explore from "../../components/explore.svelte";
  import GitpodVsLocalDevelopmentPost from "../../components/gitpod-vs-local-development-post.svelte";
  import FeelTheDifference from "../../components/gitpod-vs-local-development/feel-the-difference.svelte";
</script>

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
