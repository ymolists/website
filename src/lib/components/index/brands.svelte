<script>
  import { brands } from "$lib/contents/home";
  import Brand from "./brand.svelte";
</script>

<style>
  .brands {
    max-width: 1130px;
  }
</style>

<div
  class="brands flex flex-wrap justify-center items-center mx-auto mt-x-small"
>
  {#each brands as brand}
    <Brand {brand} />
  {/each}
</div>
