<script lang="ts">
  import Section from "./section.svelte";
  import type { ExploreSection } from "../types/explore-section.type";

  export let contents: ExploreSection;

  const {
    title = "Get Started",
    description = "Spin up fresh, automated dev environments for each task, in the cloud, in seconds.",
    link = {
      text: "Try Now",
      href: "/#get-started",
    },
  } = contents || {};
</script>

<Section>
  <div class="explore">
    <div class="explore__text">
      <h2 class="h1">{title}</h2>
      <p class="explore__paragraph text-p-large">
        {description}
      </p>
      <a href={link.href} class="btn-conversion">{link.text}</a>
    </div>
    <div class="explore__illustration">
      <img src="/images/illustration-grid.jpg" alt="Gitpod in a Nutshell" />
      <img
        src="/images/illustration-small.jpg"
        class="small"
        alt="Gitpod in a Nutshell"
      />
    </div>
  </div>
</Section>
