<script context="module">
  export const prerender = true;
</script>

<script>
  import Explore from "../components/explore.svelte";
  import Faqs from "../components/self-hosted/faqs.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import PlansAndPricing from "../components/pricing/plans-and-pricing.svelte";
  import { pricingPlans } from "../contents/self-hosted";
  import ViewAllFeatures from "../components/self-hosted/view-all-features.svelte";
</script>

<OpenGraph
  data={{
    description: "Self-Host Gitpod on Your Own Infrastructure.",
    title: "Self-Hosted",
  }}
/>
<PlansAndPricing {pricingPlans} />
<ViewAllFeatures />
<Faqs />
<Explore
  contents={{
    title: "Install Self-hosted",
    description: `
      Install Gitpod Self-hosted on 
        <a href='/docs/self-hosted/latest/installation/on-gke'>GKE</a>, 
        <a href='/docs/self-hosted/latest/installation/on-amazon-eks'>EKS</a>, 
        <a href='/docs/self-hosted/latest/installation/on-microsoft-aks'>AKS</a> or 
        <a href='/docs/self-hosted/latest/installation/on-kubernetes'>K3s</a>.
    `,
    link: { href: "/docs/self-hosted/latest", text: "View installation guide" },
  }}
/>
