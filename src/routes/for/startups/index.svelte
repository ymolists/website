<script context="module">
  export const prerender = true;
</script>

<script>
  import Section from "../../../components/section.svelte";
  import Features from "../../../components/features.svelte";
  import { exploreContents, features } from "../../../contents/startups";
  import ProgramBenefits from "../../../components/startups/program-benefits.svelte";
  import Header from "../../../components/startups/header.svelte";
  import Eligibility from "../../../components/eligibility.svelte";
  import GitpodVsLocalDevPost from "../../../components/gitpod-vs-local-development-post.svelte";
  import Faqs from "../../../components/startups/faqs.svelte";
  import Explore from "../../../components/explore.svelte";
  import OpenGraph from "../../../components/open-graph.svelte";
</script>

<style lang="postcss">
  h2 {
    @media (min-width: 973px) {
      @apply -mb-16;
    }
  }
</style>

<OpenGraph
  data={{
    title: "Gitpod for Startups",
    description:
      "With Gitpod for Startups you'll improve your developer experience, morale and productivity and focus more on what really counts: being creative and writing code to build great products.",
  }}
/>

<Header />

<Section>
  <h2 class="text-center">Accelerate your workflow</h2>
  <Features {features} />
</Section>

<ProgramBenefits />

<Eligibility
  text="To qualify for Gitpod’s startup program, your company needs to:"
  list={[
    "have raised no more than $10M in funding",
    "be founded less than 3 years ago",
    "have not been on any paid plan yet",
  ]}
  link={{ href: "https://bit.ly/3liFICY", text: "Apply now" }}
  ulMaxWidth="365px"
/>

<GitpodVsLocalDevPost
  title="Helpful resources"
  text="If you are still uncertain about moving your local dev environment to the
  cloud, this blog post will clear your thoughts."
/>

<Faqs />

<Explore contents={exploreContents} />
