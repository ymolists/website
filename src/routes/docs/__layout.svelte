<script lang="ts">
  import Menu from "../../components/docs/menu.svelte";
  import MobileMenu from "../../components/docs/mobile-menu/index.svelte";
  import Search from "../../components/docs/search.svelte";
  import "../../assets/markdown-commons.scss";
  import { MENU } from "./menu";
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
