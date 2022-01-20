<script>
  import QaTooltip from "$lib/components/qa-tooltip.svelte";
  //import FeatureTableSection from "./feature-table-section.svelte";
  //import FeatureTableSectionMobile from "./feature-table-section-mobile.svelte";
</script>

<style lang="postcss">
  @media (min-width: 1060px) {
    .featureTable :global(> * > *) {
      display: grid;
      grid-auto-rows: 3.75rem;
    }
  }

  @media (max-width: 1059px) {
    .toc {
      @apply hidden;
    }
  }
</style>

<div
  class="feature-table lg:grid lg:grid-cols-3 lg:gap-8 lg:items-end lg:max-w-6xl lg:my-12 lg:mx-0"
>
  <section class="card toc hidden lg:block has-the-link">
    <ul class="tableOfContents text-left uppercase" role="presentation">
      <li class="relative pl-[2.8rem]">Public & Private Repos</li>
      <li class="relative pl-[2.8rem]">
        <QaTooltip
          text="Team Plans"
          tooltip="You can create team plans and manage subscriptions for your team members."
        />
      </li>
      <li class="relative pl-[2.8rem]">
        <QaTooltip
          text="Inactivity timeout"
          tooltip="Time after which workspaces are automatically stopped."
        />
      </li>
      >
      <li class="hasIcon relative pl-[2.8rem]">
        <span><img src="/svg/gitlab.svg" alt="GitLab" width="24" /> GitLab</span
        >
      </li>
      <li class="relative pl-[2.8rem]" />
      <!-- Don't remove this it is to help with the layout temporarily unless we find a better way to adjust it.  -->
    </ul>
  </section>
  <!-- <FeatureTableSection
    title={freePlanTableData.title}
    subtitle={freePlanTableData.subtitle}
    details={freePlanTableData.details}
    image={null}
    link={freePlanTableData.link}
  />
  <FeatureTableSectionMobile
    title={unleashedPlanTableData.title}
    subtitle={unleashedPlanTableData.subtitle}
    details={unleashedPlanTableData.details}
    link={unleashedPlanTableData.link}
    image={null}
    usesTheArrowButton={true}
  /> -->
</div>
