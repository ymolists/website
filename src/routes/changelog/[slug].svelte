<script lang="ts" context="module">
  import { formatDate, stringToBeautifiedFragment } from "$lib/utils/helpers";
  import type { ChangelogEntry as ChangelogEntryType } from "$lib/types/changelog-entry.type";
  import BackLink from "$lib/components/changelog/back-link.svelte";

  export const prerender = true;

  const reverseHtmlEscaping = (slug: string) => slug.replace(/&amp;/g, "&");

  export async function load({ params, session }) {
    const changelogEntry: ChangelogEntryType = session.changelogEntries.find(
      (entry: ChangelogEntryType) =>
        stringToBeautifiedFragment(entry.title) ===
        reverseHtmlEscaping(params.slug)
    );
    return { props: { changelogEntry } };
  }
</script>

<script lang="ts">
  import Wrapper from "$lib/components/changelog/wrapper.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import "$lib/assets/markdown-commons.scss";
  export let changelogEntry: ChangelogEntryType;
  const { date, title, excerpt, content, image, alt } = changelogEntry;
</script>

<style lang="postcss">
  .entry {
    max-width: 800px;
    @apply mx-auto;
  }

  .entry h2 {
    @apply text-h3 !important;
  }
</style>

<OpenGraph
  data={{
    description: excerpt,
    title,
    type: "article",
    image: `images/changelog/${image}`,
    imageTwitter: `images/changelog/${image}`,
    norobots: true,
  }}
/>

<Wrapper class="pt-small pb-x-large md:pb-xx-large">
  <div class=" entry flex flex-col md:flex-row">
    <div class="content-changelog">
      <BackLink />
      <img
        src="/images/changelog/{image}"
        class="rounded-xl sm:rounded-3xl"
        {alt}
      />
      <p class="mt-xx-small -mb-9">{formatDate(date)}</p>
      <h2>
        {title}
      </h2>
      {@html content}
    </div>
  </div>
</Wrapper>
