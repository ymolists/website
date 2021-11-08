<script lang="ts">
  import docsCurrentSectionStore from "../../stores/docs-current-section";
  import MenuLink from "./menu-link.svelte";

  import type { MenuEntry } from "../../types/menu-entry.type";
  export let menuItem: MenuEntry;

  $: isActiveSection = $docsCurrentSectionStore
    ? menuItem.path.indexOf(
        /self-hosted\/\d\.\d\.\d/.test($docsCurrentSectionStore)
          ? $docsCurrentSectionStore.replace(/\d\.\d\.\d/, "latest")
          : $docsCurrentSectionStore
      ) >= 0
    : /\/docs\/?$/.test(menuItem.path);
</script>

<style lang="postcss">
  /* override _forms.scss */
  .menu-item {
    margin-bottom: 0;
    display: flex;
  }

  .menu-container {
    @apply px-6;
    display: inline-block;
    font-size: var(--p-large);
    line-height: var(--x-small);

    &.isActiveSection {
      @apply bg-white;
      @apply py-6;
      border-radius: 1rem;
      box-shadow: var(--shadow);
    }
  }

  .submenu {
    @apply ml-4 mt-4;
    font-size: var(--p-medium);
    line-height: var(--x-small);
  }

  .status {
    border-radius: 4px;
    padding: 1px 6px;
    font-size: var(--p-xsmall);
    height: 15px;
    line-height: 13px;
    width: 90px;
    margin-top: 10px;
    text-align: center;
    margin-left: 12px;
    background-color: var(--white);
    color: var(--light-grey);
    border: 1px solid var(--light-grey);
  }

  .status-coming-soon {
    line-height: 10px;
  }

  .status-beta {
    border: none;
    background-color: var(--blue);
    color: var(--white);
  }
</style>

<li class="menu-item">
  <div class:isActiveSection class="menu-container">
    <MenuLink href={menuItem.path} class="text-large">{menuItem.title}</MenuLink
    >
    {#if menuItem.subMenu && isActiveSection}
      <ul class="submenu">
        {#each menuItem.subMenu as sub}
          <li class="menu-item">
            <MenuLink href={sub.path}>{sub.title}</MenuLink>
            {#if sub.status}
              <span class={sub.status ? `status status-${sub.status}` : ""}>
                {sub.status.split("-").join(" ")}
              </span>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</li>
