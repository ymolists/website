<script lang="ts">
  export let type: "desktop" | "mobile";
  export let isHighlighted: boolean = false;
</script>

<style lang="postcss">
  .mobile {
    @media (min-width: 1060px) {
      @apply hidden;
    }
  }

  .desktop {
    @apply hidden;

    @media (min-width: 1060px) {
      @apply block;
    }
  }

  section > :global(*) {
    grid-template-rows: 350px 250px 400px 200px 100px;
  }
  @media (max-width: 1059px) {
    .card {
      @apply pb-macro mb-micro md:mb-x-small;
    }
  }
</style>

<section
  class="card text-center shadow-normal {type}"
  class:shadow-brand={isHighlighted}
>
  <slot />
</section>
