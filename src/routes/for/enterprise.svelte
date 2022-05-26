<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import UsedBy from "$lib/components/index/used-by.svelte";
  import Explore from "$lib/components/explore.svelte";
  import Card from "$lib/components/card/card.svelte";
  import {
    exploreContents,
    cards,
    featureCards,
    partnershipCards,
    integrate,
    otherFeatures,
    quotes,
  } from "$lib/contents/enterprise";
  import Section from "$lib/components/section.svelte";
  import Quotes from "$lib/components/quotes.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
  import CardSmall from "$lib/components/card/card-small.svelte";
  import Partnership from "$lib/components/enterprise/partnership.svelte";
  import Integrate from "$lib/components/enterprise/integrate.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Hero from "$lib/components/hero.svelte";
  import SectionFeatures from "$lib/components/section-features.svelte";
</script>

<OpenGraph
  data={{
    title: "Gitpod for enterprises",
    description: "Discover Gitpod for enterprises.",
  }}
/>

<Hero
  subtitle="Enterprise"
  title="Engineering Teams get more done with Gitpod"
  text="Unleash developer productivity and collaboration by supercharging how you develop."
  image={{
    src: "/images/enterprise/enter-rug.png",
    darkSrc: "/images/enterprise/enter-rug-dark.png",
    alt: "Enter Rug",
  }}
  btnPrimary={{
    text: "Get a demo",
    href: "/contact/sales",
  }}
  btnSecondary={{
    text: "Contact sales",
    href: "/contact/sales",
  }}
/>

<div class="flex justify-center flex-wrap gap-micro">
  {#each cards as card}
    <Card
      headingLevel="h2"
      class="flex items-center w-[270px] sm:w-[296px] sm:px-large"
      titleClassNames="h2"
      {card}
    />
  {/each}
</div>

<UsedBy
  class="py-small"
  title="Used by world-leading companies"
  isCard={false}
/>
<SectionFeatures
  title="Your engineering team, more productive"
  features={otherFeatures}
/>
<SectionCommon title="Flexible Deployment">
  <div
    class="flex flex-wrap justify-center mt-small max-w-5xl mx-auto"
    slot="content"
  >
    {#each featureCards as card}
      <CardSmall class="m-macro px-xx-small" {card} />
    {/each}
  </div>
</SectionCommon>

<Section>
  <Quotes {quotes} />
</Section>
<Integrate features={integrate} />
<Partnership partnershipItems={partnershipCards} />
<Explore contents={exploreContents} />
