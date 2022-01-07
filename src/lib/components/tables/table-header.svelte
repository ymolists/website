<script lang="ts">
  import type { Image } from "$lib/types/image.type";
  export let image: Image;
  export let title: string;
  export let subtitle: string = "";
</script>

<style lang="postcss">
  .card-heading {
    @apply flex flex-col items-center justify-center pb-x-small whitespace-nowrap h-20;
  }
</style>

<div class="card-heading">
  {#if image}
    <img
      src={image.src}
      alt={title ? title : image.alt}
      class={image.class || "h-10"}
    />
  {/if}
  {#if title}
    <h3 class="h4 mt-x-small">{title}</h3>{/if}
  {#if subtitle}
    <p>{subtitle}</p>
  {/if}
  <slot name="button" />
</div>
