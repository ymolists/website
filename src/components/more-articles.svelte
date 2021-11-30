<script lang="ts">
  import type { BlogPost } from "../types/blog-post.type";

  import PostPreview from "./blog/post-preview.svelte";
  import Section from "./section.svelte";

  export let posts: BlogPost[];
  export let title: string = "More articles";
</script>

<Section>
  <h2 class="text-center text-h2 mb-small">{title}</h2>
  <div class="posts-grid">
    {#each posts as post}
      <div class="posts-grid__item">
        <PostPreview {post} type="blog" isMostRecent headlineOrder="h3" />
      </div>
    {/each}
  </div>
</Section>
