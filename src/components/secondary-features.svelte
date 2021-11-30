<script lang="ts">
  import type { SecondaryFeature as SecondaryFeatureType } from "../types/secondary-feature.type";
  import SecondaryFeature from "./secondary-feature.svelte";
  export let secondaryFeatures: SecondaryFeatureType[];
  export let headingLevel: "h3" | "h2" = "h2";
</script>

<div
  class="flex flex-col items-center space-y-micro md:space-y-small lg:items-stretch lg:space-y-0 lg:flex-row lg:space-x-xx-small max-w-screen-xl mx-auto"
>
  {#each secondaryFeatures as secondaryFeature}
    <SecondaryFeature {secondaryFeature} {headingLevel} />
  {/each}
</div>
