<script lang="ts">
  import Feature from "./feature.svelte";
  import type { Feature as FeatureType } from "$lib/types/feature.type";
  export let feature: FeatureType;
</script>

<style lang="postcss">
  .feature-box:not(:last-child) {
    @apply mb-xx-small !important;
  }

  .feature-box :global(section) {
    @apply m-0 !important;
  }

  .feature-box:last-of-type {
    @apply mb-xx-large;

    @media (max-width: 972px) {
      @apply mb-x-large;
    }
  }
</style>

<div
  class="feature-box bg-off-white py-small px-xx-small sm:p-small lg:p-16 rounded-5xl shadow-normal max-w-7xl mx-auto"
>
  <Feature feature={{ ...feature, showTheMediaFirstOnMobile: true }} />
</div>
