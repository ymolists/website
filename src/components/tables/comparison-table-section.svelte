<script lang="ts">
  import type { Details as DetailsType } from "../../types/details.type";
  import type { Image } from "../../types/image.type";

  import Details from "./details.svelte";
  import TableHeader from "./table-header.svelte";
  import SectionWrapper from "./section-wrapper.svelte";

  export let image: Image;
  export let title: string;
  export let subtitle: string = "";
  export let details: DetailsType;
  export let isHighlighted: boolean = false;
  export let renderedOn: string = "";
  export let link: { href: string; text: string } = null;
</script>

<SectionWrapper type="desktop" {renderedOn} {isHighlighted}>
  <TableHeader {title} {image} {subtitle} />
  <Details {details} {link} {isHighlighted} />
</SectionWrapper>
