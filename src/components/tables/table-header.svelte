<script lang="ts">
  import type { Image } from "../../types/image.type";
  export let image: Image;
  export let title: string;
</script>

<style lang="postcss">
  .card-heading {
    @apply flex flex-col items-center justify-center pb-x-small;
  }
</style>

<div class="card-heading">
  {#if image}
    <img src={image.src} alt={title} class={image.class || "h-10"} />
  {/if}
  <h3 class="h4 mt-x-small">{title}</h3>
  <slot name="button" />
</div>
