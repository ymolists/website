<script lang="ts">
  import type { ComparisonTable } from "../../types/comparison-table";
  import QaTooltip from "../qa-tooltip.svelte";
  import ComparisonTableSectionMobile from "./comparison-table-section-mobile.svelte";
  import ComparisonTableSection from "./comparison-table-section.svelte";

  export let tableData: ComparisonTable;

  const gridCols = tableData.dataSets.length + 1;

  const hasLink =
    tableData.dataSets.filter((dataset) => dataset.link).length > 0;
</script>

<style lang="postcss">
  .featureTable {
    @apply max-w-5xl mx-auto;
  }

  .featureTable :global(section) {
    @apply p-xx-small;
  }

  .toc {
    @apply text-xs;
  }

  .toc :global(button) {
    @apply uppercase;
  }

  .hasIcon span {
    @apply flex items-center;
  }

  .toc img {
    @apply static mr-micro;
  }

  @media (max-width: 1059px) {
    ul {
      @apply px-xx-small mt-macro;
    }

    .card {
      @apply pb-micro;
    }
  }

  .toc li {
    @apply flex items-center pl-0 text-left font-bold;
  }
</style>

<div
  class="featureTable"
  style="grid-template-columns: repeat({gridCols}, minmax(0, 1fr));"
>
  <section class="card toc has-the-link">
    <ul class="tableOfContents text-left" role="presentation">
      <!-- Generate Tooltips -->
      {#each tableData.tooltips as tooltip}
        {#if !tooltip.tooltip}
          {#if !tooltip.path}
            <li>
              {tooltip.text}
            </li>
          {:else}
            <li class="hasIcon">
              <span
                ><img
                  src={tooltip.path}
                  alt={tooltip.text}
                  width="24"
                />{tooltip.text}</span
              >
            </li>
          {/if}
        {:else}
          <li>
            <QaTooltip text={tooltip.text} tooltip={tooltip.tooltip} />
          </li>
        {/if}
      {/each}
      {#if hasLink}
        <li />
      {/if}
      <!-- Don't remove this it is to help with the layout temporarily unless we find a better way to adjust it.  -->
    </ul>
  </section>
  {#each tableData.dataSets as dataSet}
    <ComparisonTableSection
      title={dataSet.title}
      subtitle={dataSet.subtitle}
      isHighlighted={dataSet.isHighlighted}
      details={dataSet.details}
      image={dataSet.image}
      link={dataSet.link}
    />
    <ComparisonTableSectionMobile
      title={dataSet.title}
      subtitle={dataSet.subtitle}
      details={dataSet.details}
      link={dataSet.link}
      image={dataSet.image}
      usesTheArrowButton={true}
      isHighlighted={dataSet.isHighlighted}
    />
  {/each}
</div>
