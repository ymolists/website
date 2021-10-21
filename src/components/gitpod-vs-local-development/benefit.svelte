<script lang="ts">
  import type { Benefit } from "../../types/benefit.type";

  export let benefit: Benefit;
  const { icon, title, text, transform } = benefit;
</script>

<style>
  div {
    max-width: 300px;
  }
</style>

<div
  class="mx-auto bg-off-white rounded-2xl shadow-normal py-small md:py-x-small mt-micro sm:mt-small"
>
  <img
    src={icon}
    alt={title}
    class="mx-auto h-16"
    style="transform: {transform};"
  />
  <h2 class="h5 mt-x-small mb-micro">{title}</h2>
  <p class="px-x-small">{text}</p>
</div>
