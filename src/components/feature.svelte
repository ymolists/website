<script lang="ts">
  import { isAnExternalLink } from "../utils/helpers";

  import type { Feature } from "../types/feature.type";
  import Console from "./console.svelte";
  import Section from "./section.svelte";

  export let feature: Feature;
  const {
    moreButton,
    secondaryButton,
    paragraph,
    title,
    terminal,
    image,
    previewComponent,
  } = feature;
</script>

<style lang="postcss">
  :global(.feature-container-section:nth-of-type(even)) .preview {
    @apply col-start-1;
    @apply row-start-1;
  }

  .feature :global(code) {
    @apply py-1 px-2 rounded-xl bg-orange-700;
    white-space: break-spaces;
  }
</style>

<Section class="feature-container-section">
  <div
    class="feature grid justify-center items-center md:grid-cols-2 lg:gap-32 gap-small"
  >
    <div class="sm:my-micro md:my-0">
      <div class="text-large">
        <h2 class="h3">{title}</h2>
        <p class="mt-micro">{@html paragraph}</p>
      </div>
      <div
        class="mt-xx-small md:mt-small"
        class:hidden={!moreButton && !secondaryButton}
      >
        {#if moreButton}
          <a
            href={moreButton.href}
            class={`btn-${moreButton.type || "primary"}`}
          >
            {moreButton.text}
          </a>
        {/if}
        {#if secondaryButton}
          <a
            href={secondaryButton.href}
            class="btn-secondary"
            target={isAnExternalLink(secondaryButton.href)
              ? "_blank"
              : undefined}>{secondaryButton.text}</a
          >
        {/if}
      </div>
    </div>
    <div
      class="preview w-full col-start-1 row-start-1 md:col-start-auto md:row-start-auto"
    >
      {#if terminal}
        <Console
          source={terminal.source}
          dark={terminal.dark}
          narrow={terminal.narrow}
          shadow={terminal.shadow}
          skipToEnd={terminal.skipToEnd}
        />
      {/if}
      {#if image}
        <img
          src={image.src}
          alt={image.alt}
          class="{image.classNames} mx-auto"
          style={image.styles}
        />
      {/if}
      {#if previewComponent}
        <svelte:component this={previewComponent} />
      {/if}
    </div>
  </div>
</Section>
