<script lang="ts" context="module">
  export const prerender = true;

  export async function load({ session }) {
    const customers = session.customers;
    return { props: { customers } };
  }
</script>

<script lang="ts">
  import PostPreview from "$lib/components/blog/post-preview.svelte";
  import CompanyBenefits from "$lib/components/customers/company-benefits.svelte";
  import Explore from "$lib/components/explore.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Testimonials from "$lib/components/index/testimonials.svelte";
  import UsedBy from "$lib/components/index/used-by.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Quotes from "$lib/components/quotes.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
  import SectionFeatures from "$lib/components/section-features.svelte";
  import Section from "$lib/components/section.svelte";
  import { developFeature, quotes, benefits } from "$lib/contents/customers";
  import { testimonials } from "$lib/contents/home/index";

  export let customers: any;
</script>

<style lang="postcss">
  :global(.feature-box) :global(.preview) {
    @apply col-start-2 !important;
  }
</style>

<OpenGraph
  data={{
    description: "Read how our customers improved their development workflows.",
    title: "Customer Stories",
  }}
/>

<Hero
  title="You’re in good company"
  text="Learn how other customers leverage Gitpod to improve their developer experience, velocity, as well as security."
  image={{
    src: "/images/customers/hero.png",
    alt: "Gitpod Illustration image",
  }}
  btnPrimary={{
    href: "#stories",
    text: "View stories",
  }}
  btnSecondary={{
    href: "/contact/sales",
    text: "Contact sales",
  }}
/>

<CompanyBenefits {benefits} class="lg:pt-16" />

<Section>
  <Quotes {quotes} />
</Section>

<SectionFeatures
  title="Accelerate your workflow"
  text="Spin up fresh, automated dev environments for each task, in the cloud, in seconds."
  features={[{ ...developFeature, headingLevel: "h3" }]}
  type="box"
/>

<SectionCommon
  title="Featured Customer Stories"
  text="Read how our customers improved their development workflows"
  id="stories"
>
  <div
    slot="content"
    class="grid grid-cols-2 gap-xx-small max-w-3xl mx-auto mt-small"
  >
    {#each customers as { title, excerpt, image, slug }}
      <PostPreview
        post={{
          title,
          excerpt,
          slug,
          image,
          teaserImage: image,
        }}
        headlineOrder="h3"
        type="customers"
        isMostRecent={true}
      />
    {/each}
  </div>
</SectionCommon>

<UsedBy title="Trusted by +500k developers" />

<Testimonials {testimonials} style="margin-top: var(--small);" />

<Explore
  contents={{
    secondaryLink: {
      href: "https://www.notion.so/gitpod/Gitpod-Onboarding-Guides-Stages-1-3-d97968210ad2408789e968597fe4633c",
      text: "View onboarding guides",
    },
  }}
/>
