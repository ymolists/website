<script lang="ts" context="module">
  export const prerender = true;

  export async function load({ session }) {
    const posts = session.posts;
    return { props: { posts } };
  }
</script>

<script lang="ts">
  import type { BlogPost } from "../../types/blog-post.type";
  import OpenGraph from "../../components/open-graph.svelte";
  import PostPreview from "../../components/blog/post-preview.svelte";
  import Section from "../../components/section.svelte";

  export let posts: BlogPost[];
</script>

<style lang="postcss">
  .blog-layout {
    @apply mb-xx-large;

    @media (max-width: 972px) {
      @apply mb-x-large;
    }
  }
</style>

<div class="blog-layout">
  <OpenGraph
    data={{
      description:
        "Visit the Gitpod blog to learn about releases, tutorials, news and more.",
      title: "Blog",
    }}
  />
  <Section>
    <h1 class="text-center">Blog</h1>
    <div class="posts-grid">
      {#each posts.slice(0, 6) as post}
        <div class="posts-grid__item">
          <PostPreview {post} type="blog" isMostRecent />
        </div>
      {/each}
    </div>
  </Section>

  <Section>
    <h2 class="mb-small text-center">Previous posts</h2>
    <div class="posts-grid previous">
      {#each posts.slice(6) as post}
        <div class="posts-grid__item">
          <PostPreview {post} type="blog" />
        </div>
      {/each}
    </div>
  </Section>
</div>
