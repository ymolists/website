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
      @apply text-base mb-macro font-medium;
    }
    dd {
      @apply text-base mb-8 text-dark-grey text-p-large;
    }

    .btn-cta {
      @apply mb-small;
    }
  }

  @media (min-width: 1060px) {
    dt {
      @apply absolute w-px h-px overflow-hidden;
    }
  }

  .btn-cta {
    @apply inline-block whitespace-nowrap;
  }
</style>

<dl
  class="lg:grid lg:auto-rows-[3.75rem] tableColumn border-t-2 border-divider pt-8"
>
  {#each details as { term, list, text, availibility }}
    <dt
      class="text-center uppercase lg:absolute lg:w-px lg:h-px lg:overflow-hidden"
    >
      {term}
    </dt>
    <dd class="flex justify-center items-center">
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
        <ul class="uppercase">
          {#each list as item}
            <li class="relative pl-[2.8rem]">{@html item}</li>
          {/each}
        </ul>
      {/if}
    </dd>
  {/each}
</dl>

<!-- {#if link}
  <div class="relative h-10 w-full">
    <a
      href={link.href}
      class="btn-cta absolute left-1/2 -translate-x-1/2"
      class:btn-primary={isHighlighted}>{link.text}</a
    >
  </div>
{/if} -->
