<style lang="postcss">
  header {
    @apply max-w-none lg:text-left lg:pb-xx-large !important;
  }

  .text-box {
    max-width: 645px;
  }

  p {
    max-width: 547px;
  }

  img {
    transform: translateX(25%) translateY(-50%);
    width: 40vw;
  }
</style>

<header class="relative">
  <div class="text-box lg:pt-x-large mx-auto lg:mx-0">
    <h1>Gitpod vs JetBrains Space</h1>
    <p class="mx-auto lg:mx-0">
      Gitpod is the vendor neutral, open-source platform that integrates with
      your individual stack including all JetBrains IDEs.
    </p>
    <a
      href="/#get-started"
      on:click={() =>
        window.analytics.track("product_cta_clicked", {
          context: "hero",
          destination: "#get-started",
        })}
      class="btn-conversion mt-x-small">Try Now</a
    >
  </div>
  <img
    class="absolute max-w-2xl right-0 top-1/2 -z-10 hidden lg:block"
    src="/images/jetbrains-space/git-providers.png"
    alt="Git Providers"
  />
</header>
