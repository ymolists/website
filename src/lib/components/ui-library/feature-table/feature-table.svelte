<script lang="ts">
  import FeatureTableToc from "./desktop/feature-table-toc.svelte";
  import FeatureTableColumn from "./desktop/feature-table-column.svelte";
  import type { FeatureTable } from "./feature-table.types";
  import FeatureTableColumnMobile from "./mobile/feature-table-column-mobile.svelte";
  export let tableData: FeatureTable;
  let custom = tableData.columns.some((column) => column.enteries.length > 1);

  const colMap = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
  };
</script>

<style lang="postcss">
  .custom {
    grid-template-columns: 1.2fr 2.2fr 1fr;

    @media (max-width: 1285px) {
      @apply hidden;
    }
  }

  .custom-mobile {
    @apply hidden;

    @media (max-width: 1285px) {
      @apply grid;
    }
  }
</style>

<div
  class="gap-4 mb-8 hidden {tableData.columns.length > 3
    ? 'lg:grid'
    : 'md:grid'} {colMap[tableData.columns.length + 1]}"
  class:custom
>
  <FeatureTableToc tocData={tableData.toc} />
  {#each tableData.columns as col}
    <FeatureTableColumn featureData={col} />
  {/each}
</div>
<div
  class="grid grid-cols-1 {tableData.columns.length > 3
    ? 'lg:hidden'
    : 'md:hidden'} gap-4 justify-center"
  class:custom-mobile={custom}
>
  <div class="w-full space-y-8">
    {#each tableData.columns as col}
      <FeatureTableColumnMobile featureData={col} />
    {/each}
  </div>
</div>
