<script>
  import { setupDetails } from "../../contents/gitpod-vs-local-development";

  import Section from "../section.svelte";
  import ComparisonTableSectionMobile from "./comparison-table-section-mobile.svelte";
  import ComparisonTableSection from "./comparison-table-section.svelte";
</script>

<style lang="postcss">
  .title {
    max-width: 1260px;

    @media (min-width: 1060px) {
      @apply grid text-center mx-auto;
      grid-template-columns: 1fr 2fr;
    }

    @media (max-width: 1059px) {
      @apply text-center mb-micro;
    }
  }

  @media (max-width: 1059px) {
    ul {
      @apply px-xx-small mt-macro;
    }

    .card {
      @apply pb-macro;
    }
  }

  .featureTable > * > * {
    grid-template-rows: 350px 250px 400px 200px 100px;
  }

  .featureTable {
    max-width: 1260px;

    @media (min-width: 1200px) {
      gap: 3rem;
    }
  }

  @media (max-width: 1200px) {
    .toc li {
      @apply pl-0;
    }
  }

  li {
    @apply text-left;
  }
  .toc li {
    font-weight: 700;
  }
</style>

<Section>
  <div class="title">
    <div />
    <h3>How does the setup affect their work?</h3>
  </div>
  <div class="featureTable">
    <section class="card toc">
      <ul class="tableOfContents" role="presentation">
        <li>Setup new Project</li>
        <li>Develop a new feature</li>
        <li>Switch context</li>
        <li>Set up a new computer</li>
        <li>Contribute to open-source projects</li>
      </ul>
    </section>
    <ComparisonTableSection
      name={setupDetails.bob.name}
      image={setupDetails.bob.image}
      details={setupDetails.bob.details}
    />
    <ComparisonTableSection
      name={setupDetails.alice.name}
      image={setupDetails.alice.image}
      details={setupDetails.alice.details}
      isHighlighted={true}
    />
    <ComparisonTableSectionMobile
      name={setupDetails.bob.name}
      image={setupDetails.bob.image}
      details={setupDetails.bob.details}
    />
    <ComparisonTableSectionMobile
      name={setupDetails.alice.name}
      image={setupDetails.alice.image}
      details={setupDetails.alice.details}
    />
  </div>
</Section>
