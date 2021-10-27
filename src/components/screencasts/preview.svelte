<script lang="ts">
  import { stringToBeautifiedFragment } from "../../utils/helpers";
  import type { Screencast } from "../../types/screencasts.type";

  export let screencast: Screencast;
  export let screencastNumber: number;
  export let headlineOrder: "h3" | "" = "";

  $: screencastNumberPadded = `${screencastNumber}`.padStart(3, "0");
</script>

<style>
</style>

<a
  href="/screencasts/{stringToBeautifiedFragment(
    screencast.title.slice(0, -3)
  )}"
  class="cast min-w-full"
>
  <div>
    <data>Screencast {screencastNumberPadded}</data>
    {#if headlineOrder === "h3"}
      <h3 class="h2">{screencast.title}</h3>
    {:else}
      <h2>{screencast.title}</h2>
    {/if}
    <img
      src="/svg/media-kit/logo-light-theme.svg"
      height="40"
      width="81.6"
      alt="Gitpod"
    />
  </div>
</a>
