<script lang="ts">
  import Base from "./base.svelte";
  import type { Card } from "$lib/types/card.type";
  export let card: Card;
  export let textAlign: "left" | "center" | "right" = "center";
</script>

<Base
  {card}
  {...$$restProps}
  {textAlign}
  class="py-small px-x-small rounded-5xl {$$restProps.class}"
/>
