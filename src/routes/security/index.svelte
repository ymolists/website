<script>
  import { brands } from "../../contents/home";
  import Brands from "../../components/index/brands.svelte";
  import Secure from "../../components/security/secure.svelte";
  import Program from "../../components/security/program.svelte";
  import CallToAction from "../../components/security/call-to-action.svelte";
  import Report from "../../components/security/report.svelte";
  import OpenGraph from "../../components/open-graph.svelte";

</script>

<OpenGraph
  data={{
    description:
      "Does Gitpod encrypt data?",
    title: "Security",
  }}
/>


<header>
  <h1>Security at Gitpod</h1>
  <p class="max-w-2xl mx-auto mb-medium">
    Gitpod is trusted by over 450k developers and companies that are moving
    their dev environments to the cloud.
  </p>
  <a href="/contact" class="btn btn-primary">Talk to an expert</a>
</header>
<Brands
  title="Trusted by developer led companies"
  brands={brands.slice(0, 7)}
/>
<Secure />
<Program />
<CallToAction />
<Report />
