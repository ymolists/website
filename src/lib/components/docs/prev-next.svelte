<script lang="ts">
  import { page } from "$app/stores";
  import { MenuService, contextKey } from "$lib/contents/docs/menu";
  import { getContext } from "svelte";
  import type { MenuFrontmatter } from "../../types/menu-entry.type";
  const docsMenu: MenuFrontmatter[] = getContext(contextKey);
  const menuService = new MenuService(docsMenu);
  const menuCtx = menuService.getMenuContext($page.path, menuService.menu);
</script>

<div
  class="flex justify-between pt-xx-small border-t border-solid border-gray-400"
>
  {#if menuCtx.prev}
    <a
      href={menuCtx.prev.path}
      title={`Previous: ${menuCtx.prev.title}`}
      class="font-thin"
    >
      Previous
    </a>
  {:else}
    <div />
  {/if}
  {#if menuCtx.next}
    <a
      href={menuCtx.next.path}
      title={`Next: ${menuCtx.next.title}`}
      class="font-thin"
    >
      Next
    </a>
  {:else}
    <div />
  {/if}
</div>
