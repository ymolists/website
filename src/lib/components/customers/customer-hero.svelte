<script lang="ts">
  import CustomerCard from "./customer-card.svelte";

  export let title: string;
  export let text: string;
  export let logo: {
    src: string;
    alt: string;
  };
  export let card: {
    image: string;
    details: {
      industry: string;
      plan: string;
      noOfEngineers: string;
      website: {
        href: string;
        text: string;
      };
    };
  };
</script>

<style lang="postcss">
  .h1 {
    @apply mb-micro md:mb-xx-small;
  }
</style>

<header
  class="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto mt-small mb-x-large md:my-x-large lg:my-xx-large"
>
  <div class="lg:mr-small mb-small lg:mb-0">
    <header class="max-w-3xl">
      <p class="flex items-center h5 font-bold text-light-grey mb-xx-small">
        <img src={logo.src} alt={logo.alt} class="w-10 mr-micro" /> Customer story
      </p>
      <h1 class="h1">{title}</h1>
    </header>
    <p class="text-large max-w-3xl">{text}</p>
  </div>
  <CustomerCard {card} />
</header>
