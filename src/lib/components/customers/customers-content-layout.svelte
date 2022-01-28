<script>
  import OpenGraph from "../open-graph.svelte";

  import Share from "../share.svelte";
  import MoreCustomersStories from "./more-customers-stories.svelte";

  const baseUrl = "https://www.gitpod.io/customers/";
  export let slug;
  export let title;
  export let excerpt;
  export let image;

  const shareLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${title} ${baseUrl}${slug}`
      )}`,
      alt: "Twitter",
      icon: "/svg/brands/twitter.svg",
      trackingName: "twitter",
    },
    {
      href: `http://www.reddit.com/submit?url=${encodeURIComponent(
        `${baseUrl}${slug}&title=${title}`
      )}`,
      alt: "Reddit",
      icon: "/svg/brands/reddit.svg",
      trackingName: "reddit",
    },
    {
      href: `http://news.ycombinator.com/submitlink?u=${encodeURIComponent(
        `${baseUrl}${slug}`
      )}&t=${encodeURIComponent(title)}`,
      alt: "HackerNews",
      icon: "/svg/brands/hackernews.svg",
      trackingName: "hackernews",
    },
  ];
</script>

<OpenGraph
  data={{
    description: excerpt,
    title,
    type: "article",
    image: `images/customers/${slug}/${image}`,
    imageTwitter: `images/customers/${slug}/${image}`,
  }}
/>

<slot />

<div class="max-w-3xl mx-auto">
  <Share
    text="Share this story"
    {shareLinks}
    class="border-t border-solid border-divider pt-xx-small md:pt-micro mt-small"
  />
</div>

<MoreCustomersStories />
