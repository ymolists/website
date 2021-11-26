<script lang="ts">
  import type { SecondaryFeature } from "../types/secondary-feature.type";
  export let secondaryFeature: SecondaryFeature;
  const { icon, title, text, link } = secondaryFeature;
  export let headingLevel: "h3" | "h2" = "h2";
</script>

<style lang="postcss">
  div {
    max-width: 410px;
  }

  .h4 {
    @apply mb-micro;
  }
</style>

<div
  class="bg-off-white rounded-5xl px-x-small py-small text-center shadow-normal w-full max-w-sm sm:max-w-none sm:w-96 lg:w-1/3"
>
  <img
    src={icon.src}
    alt={icon.alt || title}
    class="mx-auto h-16 w-20"
    style="transform: {icon.transform}"
  />
  {#if headingLevel === "h3"}
    <h3 class="h4 mt-x-small">{title}</h3>
  {:else}
    <h2 class="h4 mt-x-small">{title}</h2>
  {/if}
  <p>{@html text}</p>
  {#if link}
    <a href={link.href}>{link.text}</a>
  {/if}
</div>
