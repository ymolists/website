<script>
  import Section from "../../../components/section.svelte";
  import Features from "../../../components/features.svelte";
  import { exploreContents, features } from "../../../contents/startups";
  import ProgramBenefits from "../../../components/startups/program-benefits.svelte";
  import Header from "../../../components/startups/header.svelte";
  import Eligibility from "../../../components/startups/eligibility.svelte";
  import GitpodVsLocalDevPost from "../../../components/gitpod-vs-local-development-post.svelte";
  import Faqs from "../../../components/startups/faqs.svelte";
  import Explore from "../../../components/explore.svelte";
</script>

<Header />

<Section>
  <h2 class="text-center -mb-16">Accelerate your workflow</h2>
  <Features {features} />
</Section>

<ProgramBenefits />

<Eligibility />

<GitpodVsLocalDevPost
  title="Helpful resources"
  text="If you are still uncertain about moving your local dev environment to the
  cloud, this blog post will clear your thoughts."
/>

<Faqs />

<Explore contents={exploreContents} />
