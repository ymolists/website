<script>
  import Action from "../../components/contact/action.svelte";
  import { contactActions } from "../../contents/contact";
</script>

<style type="text/postcss">
  header {
    @apply max-w-none !important;
  }
</style>

<header>
  <h1>How can we help you?</h1>
  <p>Get in touch and let us know how we can help.</p>
  <div class="flex flex-wrap justify-around mt-x-small">
    {#each contactActions as action}
      <Action {action} class="w-80" />
    {/each}
  </div>
</header>
