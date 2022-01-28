<script lang="ts">
  import { page, session } from "$app/stores";
  import MoreArticles from "../more-articles.svelte";

  const recentPosts = $session.customers.slice(0, 4);
  $: recentCustomersWithoutCurrent = recentPosts
    .filter((customer: any) => $page.url.pathname.indexOf(customer.slug) === -1)
    .slice(0, 3);
</script>

<MoreArticles
  title="More Customer Stories"
  type="customers"
  posts={recentCustomersWithoutCurrent}
/>
