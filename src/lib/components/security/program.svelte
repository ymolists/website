<script>
  import { programFeatures } from "$lib/contents/security";
  import Section from "../section.svelte";
  import ProgramFeature from "./program-feature.svelte";
</script>

<Section>
  <h2 class="text-center mb-small">Industry leading security program</h2>
  <div
    class="features-container flex flex-wrap justify-around 1/2xl:justify-center gap-x-micro"
  >
    {#each programFeatures as feature}
      <ProgramFeature {feature} />
    {/each}
  </div>
</Section>
