<script>
  import { resources } from "../../contents/support";
  import Section from "../section.svelte";
  import Resource from "./resource.svelte";
</script>

<Section class="text-center">
  <h2 class="mb-small">Helpful Resources</h2>
  <div class="flex flex-wrap justify-around max-w-7xl mx-auto">
    {#each resources as resource}
      <Resource {resource} />
    {/each}
  </div>
</Section>
