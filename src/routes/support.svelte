<script>
  import Header from "../components/support/header.svelte";
  import Cta from "../components/support/cta.svelte";
  import Resources from "../components/support/resources.svelte";
  import PopularArticles from "../components/support/popular-articles.svelte";
  import OpenGraph from "../components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    description: "Need help?",
    title: "Support",
  }}
/>

<Header />
<Cta />
<Resources />
<PopularArticles />
