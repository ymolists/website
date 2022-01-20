<script lang="ts">
  import type { Details as DetailsType } from "$lib/types/details.type";
  import type { Image } from "$lib/types/image.type";
  import FeatureTableDetails from "./feature-table-details.svelte";
  import FeatureTableHeader from "./feature-table-header.svelte";
  import FeatureTableSectionWrapper from "./feature-table-section-wrapper.svelte";

  export let image: Image;
  export let title: string;
  export let subtitle: string = "";
  export let details: DetailsType;
  export let isHighlighted: boolean = false;
  export let renderedOn: string = "";
  export let link: { href: string; text: string } = null;
</script>

<FeatureTableSectionWrapper type="desktop" {renderedOn} {isHighlighted}>
  <FeatureTableHeader {title} {image} {subtitle} />
  <FeatureTableDetails {details} {link} {isHighlighted} />
</FeatureTableSectionWrapper>
