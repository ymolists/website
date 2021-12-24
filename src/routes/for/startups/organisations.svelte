<script context="module">
  export const prerender = true;
</script>

<script>
  import { exploreContents } from "$lib/contents/startups";

  import Explore from "$lib/components/explore.svelte";
  import Find from "$lib/components/startups/find.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    title: "Approved Organisations | Gitpod for Startups",
    description:
      "If your startup is affiliated with a Gitpod approved VC, incubator or accelerator we will extend the Gitpod startup program from 1 year to 2 years.",
  }}
/>

<header>
  <h1>Approved Organisations</h1>
  <p class="text-lg">
    If your startup is affiliated with a Gitpod approved VC, incubator or
    accelerator we will extend the Gitpod startup program from 1 year to 2
    years.
  </p>
  <a href="/for/startups" class="btn-conversion mt-x-small"
    >View startup program</a
  >
</header>

<Find />

<Explore contents={exploreContents} />
