<script lang="ts">
  import Tooltip from "./tooltip.svelte";

  export let tooltip: string;
  export let text: string;
</script>

<Tooltip title={tooltip} class="inline-flex items-center">
  <span class="whitespace-nowrap mr-macro">{text}</span>
  <img src="/svg/question-mark.svg" alt="Tooltip" class="h-5 w-5" />
</Tooltip>
