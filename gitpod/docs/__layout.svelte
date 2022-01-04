<script lang="ts" context="module">
  export async function load({ session }) {
    const docsMenu = session.docsMenu;

    return { props: { docsMenu } };
  }
</script>

<script lang="ts">
  import Menu from "$lib/components/docs/menu.svelte";
  import MobileMenu from "$lib/components/docs/mobile-menu/index.svelte";
  import Search from "$lib/components/docs/search.svelte";
  import "$lib/assets/markdown-commons.scss";
  import { MenuService, contextKey } from "$lib/contents/docs/menu";
  import { setContext } from "svelte";

  export let docsMenu: any;
  setContext(contextKey, docsMenu);
  const menuService = new MenuService(docsMenu);
  const MENU = menuService.menu;
</script>

<div class="pb-10 md:flex md:pt-10">
  <div class="hidden md:block md:w-1/4 md:pt-24">
    <Menu {MENU} />
  </div>
  <div class="md:w-3/4 md:pl-4">
    <Search />
    <MobileMenu {MENU} />
    <slot />
  </div>
</div>
