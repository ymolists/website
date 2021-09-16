<script lang="ts">
  import Brand from "./brand.svelte";
  import type { Brand as BrandType } from "../../types/brand.type";

  export let brands: BrandType[];
  export let title: string = "";
</script>

<style lang="scss">
  .brands {
    @media (max-width: 840px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
  }
</style>

<div
  class:lg:-mt-large={title}
>
  {#if title}
    <h2 class="h5 text-center">{title}</h2>
  {/if}

  <div
    class="brands flex flex-wrap justify-center items-center mx-auto max-w-6xl"
    class:pt-large={!title}
  >
    {#each brands as brand}
      <Brand {brand} />
    {/each}
  </div>
</div>
