<script lang="ts">
  import type { Benefit } from "../types/benefit.type";

  export let benefit: Benefit;
  const { icon, title, text } = benefit;
</script>

<div
  class="mx-auto bg-off-white rounded-2xl shadow-normal py-small md:py-x-small"
>
  <img
    src={icon.src}
    alt={icon.alt || title}
    class="mx-auto w-20 h-16"
    style="transform: {icon.transform};"
  />
  <h2 class="h5 mt-xx-small mb-micro">{title}</h2>
  <p class="px-x-small">{@html text}</p>
</div>
