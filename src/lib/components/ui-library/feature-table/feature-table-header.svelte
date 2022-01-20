<script lang="ts">
  import type { Image } from "$lib/types/image.type";
  export let image: Image;
  export let title: string;
  export let subtitle: string = "";
</script>

<div
  class="flex flex-col items-center justify-center pb-x-small whitespace-nowrap"
>
  {#if image}
    <img src={image.src} alt={title} class={image.class || "h-10"} />
  {/if}
  <h3 class="h4 leading-[1.2] mt-x-small">{title}</h3>
  {#if subtitle}
    <p>{subtitle}</p>
  {/if}
  <slot name="button" />
</div>
