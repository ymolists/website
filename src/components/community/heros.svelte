<script>
  import Feature from "../feature.svelte";
</script>

<style lang="postcss">
  .box :global(section) {
    @apply m-0;
  }

  .box:last-of-type {
    @apply mb-xx-large;

    @media (max-width: 972px) {
      @apply my-x-large;
    }
  }
</style>

<div
  class="box bg-off-white p-x-small sm:p-small lg:p-16 rounded-5xl shadow-normal max-w-7xl mx-auto text-center sm:text-left"
>
  <Feature
    feature={{
      title: "Gitpod Community Heroes",
      paragraph:
        "Join us empowering developers to make engineering collaborative and joyful again. Are you our next community hero?",
      moreButton: {
        text: "View Community Heroes Program",
        href: "/community/heroes",
      },
      image: {
        src: "/images/heroes/heart-of-gitpod.png",
        alt: "Community Heroes",
      },
    }}
  />
</div>
