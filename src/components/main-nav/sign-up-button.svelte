<script>
  let clazz = "";
  export { clazz as class };
</script>

<style type="text/postcss">
  a {
    @apply sm:hidden;
    @media (min-width: 1050px) {
      @apply flex;
    }
  }
</style>

<a
  href="/#get-started"
  on:click
  class="{clazz} flex items-center justify-center rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover"
>
  Sign Up
</a>
