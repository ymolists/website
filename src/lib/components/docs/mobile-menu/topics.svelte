<script lang="ts">
  // Components
  import MenuItem from "./menu-item.svelte";

  // States
  import topicsState from "../states/topics-state";

  import type { MenuEntry } from "$lib/types/docs-menu.type";
  export let menu: MenuEntry[];
</script>

<div role="navigation" aria-label="All topics">
  <ul class="divide-y divide-sand-dark">
    {#each menu as menuItem}
      <MenuItem
        href={menuItem.path}
        showIcon={true}
        onClick={() => ($topicsState = false)}
      >
        {menuItem.title}
      </MenuItem>
    {/each}
  </ul>
</div>
