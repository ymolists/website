<script lang="ts">
  import Section from "../section.svelte";
  import Brands from "./brands.svelte";

  export let title: string;
</script>

<Section
  class="text-center bg-off-white rounded-2xl shadow-normal pt-small pb-9"
>
  <h2 class="h3">{title}</h2>
  <Brands />
</Section>
