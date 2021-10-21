<script lang="ts">
  import QuickstartSearchItem from "./quickstart-search-item.svelte";
  import QuickstartSearchinput from "./quickstart-searchinput.svelte";
  import {
    remainingQuickstarts,
    searchQuery,
  } from "../../../stores/quickstarts";
</script>

<QuickstartSearchinput />
{#each $remainingQuickstarts as item}
  <QuickstartSearchItem path={item.path} title={item.title} />
{:else}
  <p>
    Oh no, this quickstart does not exist yet. Please <a
      target="_blank"
      href="https://github.com/gitpod-io/website/issues/new?labels=documentation&title=[Docs%20-%20Quickstart]%20-%20Requesting%20{$searchQuery}"
      >let us know</a
    >.
  </p>
  <p>
    Also note that you are free to install any tools you need for your specific
    use case. Please refer to the [custom docker image](/docs/config-docker)
    documentation for more details.
  </p>
{/each}
