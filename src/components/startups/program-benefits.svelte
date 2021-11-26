<script>
  import { programBenefits } from "../../contents/startups";
  import SecondaryFeatures from "../secondary-features.svelte";
  import Section from "../section.svelte";
</script>

<Section class="text-center">
  <h2>Program Benefits</h2>
  <p class="text-large mb-small">
    <a href="https://bit.ly/3liFICY" target="_blank">Apply now</a> and receive these
    unique benefits.
  </p>
  <SecondaryFeatures secondaryFeatures={programBenefits} headingLevel="h3" />
</Section>
