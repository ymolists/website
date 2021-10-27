<script lang="ts">
  import type { Details } from "../../types/details.type";
  export let details: Details;
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
</style>

<dl id="gitpodPricing" class="tableColumn">
  {#each details as { term, data }}
    <dt>{term}</dt>
    <dd>
      <ul>
        {#each data as d}
          <li>{@html d}</li>
        {/each}
      </ul>
    </dd>
  {/each}
</dl>
