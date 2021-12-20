<script>
  import { quotes } from "../../contents/opensource";
  import Quotes from "../quotes.svelte";
</script>

<style>
  header {
    max-width: 1000px !important;
  }
</style>

<header>
  <h1>Gitpod for Open Source</h1>
  <p class="max-w-4xl m-auto">
    Spend less time reviewing pull-requests, on-boarding contributors and more
    time on building great things. <strong
      >Upgrade your account to our complementary plan for the people who
      maintain the infrastructure that the world depends upon.</strong
    >
  </p>
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScL5vaxUrbermCKvyUrJ6eg4gQU18ORxg4wwbA5WuYxxWgEuQ/viewform"
    class="btn-conversion mt-x-small mb-medium">Apply now</a
  >
  <Quotes {quotes} />
</header>
