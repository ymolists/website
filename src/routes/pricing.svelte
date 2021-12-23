<script context="module">
  export const prerender = true;
</script>

<script>
  import Explore from "../components/explore.svelte";
  import Faqs from "../components/pricing/faqs.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import PlansAndPricing from "../components/pricing/plans-and-pricing.svelte";
  import { pricingPlans } from "../contents/pricing";
  import UsedBy from "../components/index/used-by.svelte";
  import Empower from "../components/pricing/empower.svelte";
  import CompareFeatures from "../components/pricing/compare-features.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod is free for Open Source, and offers productive features for you, your team and your business at reasonable prices.",
    title: "Pricing",
  }}
/>
<PlansAndPricing {pricingPlans} />
<UsedBy title="Used by 500k+ developers" />
<CompareFeatures />
<Empower />
<Faqs />

<Explore
  contents={{
    title: "Get started for free",
  }}
/>
