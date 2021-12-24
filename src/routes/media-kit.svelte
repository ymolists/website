<script context="module">
  export const prerender = true;
</script>

<script>
  import Founders from "$lib/components/media-kit/founders.svelte";
  import AdditionalImages from "$lib/components/media-kit/additional-images.svelte";
  import ColorsSection from "$lib/components/media-kit/colors-section.svelte";
  import LogoSection from "$lib/components/media-kit/logo-section.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    description: "We’ve put together some assets to help you using our brand.",
    title: "Media kit",
  }}
/>

<header>
  <h1>Media kit</h1>
  <p>We’ve put together some assets to help you using our brand.</p>
  <img
    src="/images/media-kit/media-kit.png"
    alt="Gitpod Illustration"
    class="mt-small rounded-4xl w-full"
  />
</header>

<LogoSection />
<ColorsSection />
<AdditionalImages />
<Founders />
