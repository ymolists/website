<script lang="ts">
  import type { Details } from "../../types/details.type";
  import DetailsList from "./details-list.svelte";
  import SectionHeader from "./section-header.svelte";
  import SectionWrapper from "./section-wrapper.svelte";

  export let image: string;
  export let name: string;
  export let details: Details;
  export let isHighlighted: boolean = false;
</script>

<SectionWrapper type="desktop" {isHighlighted}>
  <SectionHeader {name} {image} />
  <DetailsList {details} />
</SectionWrapper>
