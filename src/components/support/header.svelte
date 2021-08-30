<script>
  import Search from "../docs/search.svelte";
</script>

<style type="text/postcss">
  header {
    @apply px-0 !important;
  }
</style>

<header>
  <h1>Need help?</h1>
  <Search
    placeholder="Search"
    class="text-left py-7 sm:pl-medium h-14"
    containerClasses="roun max-w-lg mx-auto shadow rounded-xl"
    iconClasses="h-6 w-6 left-4 sm:left-5"
  />
</header>
