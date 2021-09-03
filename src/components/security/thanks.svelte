<script lang="ts">
  import Section from "../section.svelte";
  import type { ExploreSection } from "../../types/explore-section.type";

  export let contents: ExploreSection;

  const {
    title = "Dear Security Researcher",
    description = "We 🧡 in public people who responsibly disclose their security findings.",
    link = {
      text: "See Hall of fame",
      href: "/security/thanks",
    },
  } = contents || {};
</script>

<style lang="scss">
</style>

<Section>
  <div class="explore">
    <div class="explore__text">
      <h2 class="h1">{title}</h2>
      <p class="explore__paragraph h4">
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
