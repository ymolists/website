<script lang="ts">
  import MenuSection from "./menu-section.svelte";
  import type { MenuEntry } from "$lib/types/docs-menu.type";
  export let menu: MenuEntry[];
</script>

<ul
  class="space-y-8 sticky top-24 self-start max-h-[calc(100vh-6rem)] pb-10 overflow-auto"
>
  {#each menu as menuItem}
    <MenuSection {menuItem} />
  {/each}
</ul>
