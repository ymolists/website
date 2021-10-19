<script lang="ts">
  import { fade, scale } from "svelte/transition";

  export let title: string;
  export let path: string;
</script>

<style type="text/postcss">
  .search-result__text {
    @media (max-width: 768px) {
      max-width: 40%;
    }
  }
</style>

<div in:scale out:fade class="w-full">
  <div
    class="bg-white shadow-normal px-medium py-4 text-center rounded-2xl m-4"
  >
    <div class="flex justify-between items-center ">
      <div class="truncate search-result__text">
        {title}
      </div>
      <a class="btn-conversion" href={path}>More Info</a>
    </div>
  </div>
</div>
