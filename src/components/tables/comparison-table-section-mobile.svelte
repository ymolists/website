<script lang="ts">
  import type { Details as DetailsType } from "../../types/details.type";
  import Details from "./details.svelte";
  import TableHeader from "./table-header.svelte";
  import SectionWrapper from "./section-wrapper.svelte";
  import type { Image } from "../../types/image.type";

  export let image: Image;
  export let title: string;
  export let details: DetailsType;
  export let usesTheArrowButton: boolean = false;

  let isShown: boolean = false;

  const toggleIsShown = () => {
    isShown = !isShown;
  };
</script>

<SectionWrapper type="mobile">
  <TableHeader {title} {image}>
    <button
      class="{!usesTheArrowButton
        ? 'btn-cta w-40'
        : 'border-t border-solid border-divider w-56 pt-xx-small mt-xx-small'} mt-macro focus:outline-none"
      on:click={toggleIsShown}
      slot="button"
    >
      {#if !usesTheArrowButton}
        {#if isShown}
          Hide details
        {:else}
          Show details
        {/if}
      {/if}
      {#if usesTheArrowButton}
        <div class="underline">View all features</div>
        <img
          src="/arrow.svg"
          alt="Arrow Toggle"
          class="h-6 w-6 mt-macro mx-auto duration-200"
          class:rotate-180={isShown}
        />
      {/if}
    </button>
  </TableHeader>
  {#if isShown}
    <Details {details} />
  {/if}
</SectionWrapper>
