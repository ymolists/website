<script lang="ts">
  import type { ProgramFeature } from "$lib/types/program-feature.type";

  export let feature: ProgramFeature;
  const { title, paragraphs, image } = feature;
</script>

<style>
  div {
    max-width: 400px;
  }
</style>

<div
  class="bg-white shadow-normal px-9 py-medium rounded-4xl mb-micro md:mb-small"
>
  <img src="/svg/security/{image}" alt={title} class="mx-auto" />
  <h3 class="text-center mt-xx-small mb-small">{title}</h3>
  {#each paragraphs as p}
    <p>{@html p}</p>
  {/each}
</div>
