<script lang="ts">
  import Section from "./section.svelte";
  export let title: string;
  export let text: string;
  export let link: { href: string; text: string } = {
    href: "/#get-started",
    text: "Try now",
  };
</script>

<Section class="text-center">
  <h2>{title}</h2>
  <p class="text-large mb-x-small">
    {text}
  </p>
  <a href={link.href} class="btn-conversion">{link.text}</a>
</Section>
