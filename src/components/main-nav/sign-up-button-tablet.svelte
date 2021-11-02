<style lang="postcss">
  a {
    @media (min-width: 1050px) {
      @apply hidden;
    }
  }
</style>

<a
  href="https://gitpod.io/new"
  on:click={() =>
    window.analytics.track("product_cta_clicked", {
      context: "sign-up-button",
      destination: "https://gitpod.io/new",
    })}
  class="hidden sm:inline no-underline text-sm mr-micro">Sign Up</a
>
