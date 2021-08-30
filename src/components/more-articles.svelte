<script lang="ts">
  import type { BlogPost } from "../types/blog-post.type";

  import PostPreview from "./blog/post-preview.svelte";

  export let posts: BlogPost[];
  export let title: string = "More articles";
</script>

<div>
  <section class="mb-40">
    <h2 class=" mt-6 mb-16 text-center text-h2">{title}</h2>
    <div class="posts-grid">
      {#each posts as post}
        <div class="posts-grid__item">
          <PostPreview {post} type="blog" isMostRecent headlineOrder="h3" />
        </div>
      {/each}
    </div>
  </section>
</div>
