<script context="module">
  export const prerender = true;
</script>

<script>
  import Header from "$lib/components/support/header.svelte";
  import Cta from "$lib/components/support/cta.svelte";
  import PopularArticles from "$lib/components/support/popular-articles.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import { cards } from "$lib/contents/support";
  import Resources from "$lib/components/resources.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
</script>

<OpenGraph
  data={{
    description: "Need help?",
    title: "Support",
  }}
/>

<Header />
<Cta />
<SectionCommon title="Helpful Resources">
  <Resources {cards} slot="content" />
</SectionCommon>
<PopularArticles />
