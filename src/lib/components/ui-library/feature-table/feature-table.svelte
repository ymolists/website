<script lang="ts">
  import QaTooltip from "$lib/components/qa-tooltip.svelte";
  import FeatureTableSection from "./feature-table-section.svelte";
  import FeatureTableSectionMobile from "./feature-table-section-mobile.svelte";
  import type { TableData } from "../../../types/table-data.type";

  export let data: TableData[];
  export let tableOfContents: any[];
</script>

<style lang="postcss">
  @media (max-width: 1059px) {
    .toc {
      @apply hidden;
    }
  }
</style>

<div
  class="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-end lg:max-w-6xl lg:my-12 lg:mx-0"
>
  <section class="bg-transparent pt-8  toc hidden  lg:block has-the-link">
    <ul
      class="tableOfContents text-left uppercase lg:grid lg:auto-rows-[3.75rem]"
      role="presentation"
    >
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        1
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        2
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        3
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        4
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        5
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        6
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        7
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        8
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        9
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        10
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        <QaTooltip
          text="Team Plans"
          tooltip="You can create team plans and manage subscriptions for your team members."
        />
      </li>
      <li class="relative flex items-center pl-0 text-left font-bold uppercase">
        <QaTooltip
          text="Inactivity timeout"
          tooltip="Time after which workspaces are automatically stopped."
        />
      </li>
      <li class="relative flex items-center">
        <span class="flex items-center pl-0 text-left font-bold uppercase"
          ><img
            class="mr-micro static"
            src="/svg/gitlab.svg"
            alt="GitLab"
            width="24"
          /> GitLab</span
        >
      </li>
      <li class="relative flex items-center">
        <span class="flex items-center pl-0 text-left font-bold uppercase"
          ><img
            class="mr-micro static"
            src="/svg/gitlab.svg"
            alt="GitLab"
            width="24"
          /> GitLab</span
        >
      </li>
      <li />
      <!-- Don't remove this it is to help with the layout temporarily unless we find a better way to adjust it.  -->
    </ul>
  </section>
  {#each data as item}
    <FeatureTableSection
      title={item.title}
      subtitle={item.subtitle}
      details={item.details}
      image={item.image || null}
      renderedOn={item.renderedOn}
      isHighlighted={item.isHighlighted}
      link={item.link}
    />
    <FeatureTableSectionMobile
      title={item.title}
      subtitle={item.subtitle}
      details={item.details}
      isHighlighted={item.isHighlighted}
      link={item.link}
      image={null}
      usesTheArrowButton={true}
    />
  {/each}
</div>
