<script>
  import Section from "../section.svelte";
  import ComparisonTable from "../tables/comparison-table.svelte";
  import { jetbrainsComparisonTable } from "$lib/contents/jetbrains-space";
</script>

<Section>
  <div class="text-center">
    <h2>Compare features</h2>
    <p class="text-large mb-xx-small md:mb-small">
      Remote development without friction that integrates with your individual
      stack.
    </p>
  </div>

  <ComparisonTable tableData={jetbrainsComparisonTable} />

  <div class="text-xs mx-auto grid grid-cols-3 gap-x-small footnote-container">
    <div />
    <p class="col-span-2 text-center">
      Disclaimer: All data were last verified on Dec. 9, 2021. To report any
      incorrect or outdated information, please <a href="/contact">contact us</a
      >.
    </p>
  </div>
</Section>
