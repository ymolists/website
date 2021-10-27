<script>
  import { benefits } from "../../contents/gitpod-vs-local-development";
  import Benefit from "./benefit.svelte";
</script>

<style lang="postcss">
  header {
    @apply max-w-none !important;
  }
</style>

<header>
  <h1>Gitpod vs local development</h1>
  <p>
    Why should you move your dev environment to the cloud? Here is the answer.
  </p>
  <div class="flex flex-wrap  mx-auto max-w-7xl mt-xx-small sm:mt-0">
    {#each benefits as benefit}
      <Benefit {benefit} />
    {/each}
  </div>
</header>
