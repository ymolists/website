<script lang="ts">
  import Section from "./section.svelte";

  export let text: string;
  export let list: string[];
  export let link: { href: string; text: string };
  export let ulMaxWidth: string;
</script>

<style lang="postcss">
  li {
    @apply mb-micro flex;
  }

  li::before {
    content: "—";
    @apply text-orange-800 mr-micro;
  }
</style>

<Section class="text-center">
  <h2>Eligibility criteria</h2>
  <p class="text-large">
    {text}
  </p>
  <ul class="text-left mx-auto my-x-small" style="max-width: {ulMaxWidth}">
    {#each list as li}
      <li>{li}</li>
    {/each}
  </ul>
  <a href={link.href} target="_blank" class="btn-conversion">
    {link.text}
  </a>
</Section>
