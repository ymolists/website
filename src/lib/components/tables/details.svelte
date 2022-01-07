<script lang="ts">
  import type { Details } from "$lib/types/details.type";
  export let details: Details;
  export let link: { href: string; text: string } = null;
  export let isHighlighted: boolean = false;
</script>

<style lang="postcss">
  :global(.code) {
    @apply p-micro bg-white rounded-2xl text-base text-light-grey my-macro;
  }
  :global(.code) :global(span) {
    color: #65a30d;
  }
  ul:not(.toc ul) {
    @apply lowercase list-disc font-normal;
  }
  li {
    @apply text-left;
  }
  @media (max-width: 1059px) {
    dt {
      @apply text-base mb-macro;
    }
    dd {
      @apply text-base mb-medium;
    }
  }

  .btn-cta {
    @apply inline-block whitespace-nowrap;

    @media (max-width: 1059px) {
      @apply mb-small;
    }
  }
</style>

<dl id="gitpodPricing" class="tableColumn">
  {#each details as { term, list, text, availibility }}
    <dt>{term}</dt>
    <dd>
      {#if text}
        {@html text}
      {/if}
      {#if availibility}
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      {/if}

      {#if availibility === false}
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      {/if}

      {#if list}
        <ul>
          {#each list as item}
            <li>{@html item}</li>
          {/each}
        </ul>
      {/if}
    </dd>
  {/each}
</dl>

{#if link}
  <div
    class="relative w-full flex justify-center items-center"
    style="height: 60px;"
  >
    <a
      href={link.href}
      class="btn-cta absolute left-1/2 -translate-x-1/2"
      class:btn-primary={isHighlighted}>{link.text}</a
    >
  </div>
{/if}
