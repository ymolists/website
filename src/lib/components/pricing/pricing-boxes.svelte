<script lang="ts">
  import type { Pricing } from "$lib/types/pricing.type";
  import PricingBox from "./pricing-box.svelte";

  export let pricingPlans: Pricing[];
</script>

<style lang="postcss">
  div {
    @media (max-width: 1250px) {
      @apply flex-wrap;
    }
  }
</style>

<div class="flex justify-center">
  {#each pricingPlans as pricing}
    <PricingBox {pricing} />
  {/each}
</div>
