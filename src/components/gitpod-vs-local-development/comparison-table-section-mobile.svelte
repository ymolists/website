<script lang="ts">
  import type { Details } from "../../types/details.type";
  import DetailsList from "./details-list.svelte";
  import SectionHeader from "./section-header.svelte";
  import SectionWrapper from "./section-wrapper.svelte";

  export let image: string;
  export let name: string;
  export let details: Details;

  let isShown: boolean = false;

  const toggleIsShown = () => {
    isShown = !isShown;
  };
</script>

<SectionWrapper type="mobile">
  <SectionHeader {name} {image}>
    <button class="btn-cta w-40 mt-macro focus:outline-none" on:click={toggleIsShown} slot="button">
      {#if isShown}
        Hide details
      {:else}
        Show details
      {/if}
    </button>
  </SectionHeader>
  {#if isShown}
    <DetailsList {details}/>
  {/if}
</SectionWrapper>
