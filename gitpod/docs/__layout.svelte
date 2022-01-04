<script lang="ts" context="module">
  import type { MenuEntry } from "$lib/types/docs-menu.type";
  import { generateMenu } from "$lib/contents/docs/menu";
  import { menuStructure } from "./_menu";

  export async function load({ session }) {
    const menu = generateMenu(menuStructure, session.docsFileToFrontmatterMap);
    return { props: { menu } };
  }
</script>

<script lang="ts">
  import Menu from "$lib/components/docs/menu.svelte";
  import MobileMenu from "$lib/components/docs/mobile-menu/index.svelte";
  import Search from "$lib/components/docs/search.svelte";
  import "$lib/assets/markdown-commons.scss";

  export let menu: MenuEntry[];
</script>

<div class="pb-10 md:flex md:pt-10">
  <div class="hidden md:block md:w-1/4 md:pt-24">
    <Menu {menu} />
  </div>
  <div class="md:w-3/4 md:pl-4">
    <Search />
    <MobileMenu {menu} />
    <slot />
  </div>
</div>
