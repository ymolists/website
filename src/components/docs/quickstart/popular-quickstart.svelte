<script lang="ts">
  import PopularQuickstartItem from "./popular-quickstart-item.svelte";
  import { popularQuickstarts } from "../../../stores/quickstarts";
</script>

<div class="flex flex-wrap justify-center">
  {#each $popularQuickstarts as item}
    <PopularQuickstartItem
      icon={item.icon}
      name={item.title}
      path={item.path}
    />
  {/each}
</div>
