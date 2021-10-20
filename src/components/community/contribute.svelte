<script>
  import { contributeToGitpod } from "../../contents/community";

  import Feature from "../feature.svelte";
</script>

<style>
  :global(.wrapper-contribute) :global(.preview) {
    @apply col-start-1;
    @apply row-start-1;
  }
</style>

<div class="wrapper-contribute">
  <Feature feature={contributeToGitpod} />
</div>
