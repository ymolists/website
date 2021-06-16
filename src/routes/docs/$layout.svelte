<script lang="ts">
  import Menu from "../../components/docs/menu.svelte";
  import MobileMenu from "../../components/docs/mobile-menu/index.svelte";
  import Search from "../../components/docs/search.svelte";
  import "../../assets/markdown-commons.scss";
  import { MENU } from "./menu";
  import { onMount } from "svelte";
  import Toc from "../../components/docs/toc.svelte";

  onMount(() => {
    const root = document.documentElement;
    const docsLayoutEl = document.querySelector(".docs-layout");
    root.style.setProperty(
      "--docs-layout-width",
      `${docsLayoutEl.clientWidth}px`
    );

    window.addEventListener("resize", () => {
      root.style.setProperty(
        "--docs-layout-width",
        `${docsLayoutEl.clientWidth}px`
      );
    });
  });
</script>

<style>
  :root {
    --side-nav-width: 310px;
    --toc-width: 200px;
  }

  .docs-layout {
    @apply pb-10;

    @media (min-width: 769px) {
      @apply flex;
      @apply pt-10;
      margin-top: var(--header-height);
    }
  }

  .menu {
    @apply pt-12 pb-36 pr-6 h-screen fixed top-0 overflow-scroll z-10 bg-sand-light;
    top: var(--header-height);
    width: var(--side-nav-width);

    @media (max-width: 1340px) {
      @apply hidden;
    }
  }

  .doc-contents {
    @apply mx-auto pl-huge;
    width: calc(100% - var(--side-nav-width) - var(--toc-width));

    @media (max-width: 1340px) {
      width: calc(100% - var(--toc-width));
      @apply pl-0 ml-0 pr-medium;
    }

    @media (max-width: 768px) {
      @apply w-full pr-0;
    }
  }

  :global(.toc) {
    @apply hidden;

    @media (min-width: 769px) {
      @apply inline-block fixed h-screen text-p-small pt-12;
      top: var(--header-height);
      width: var(--toc-width);
      right: calc((100vw - var(--docs-layout-width)) / 2);
    }
  }

  :global(.toc-level) {
  }
</style>

<div class="flex docs-layout row">
  <div class="menu">
    <Menu {MENU} />
  </div>
  <div class="doc-contents">
    <Search />
    <MobileMenu {MENU} />
    <!-- The page table of content is inserted here -->
    <slot />
  </div>
  <div class="toc">
    <Toc />
  </div>
</div>
