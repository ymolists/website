<script lang="ts">
  const images = [
    {
      src: "/images/about/team-2.jpg",
      alt: "A female Gitpod team member",
    },
    {
      src: "/images/about/team-3.jpg",
      alt: "A laptop and office chair in a tent",
    },
    {
      src: "/images/about/about-6.png",
      alt: "Gitpod team members on the beach",
    },
    {
      src: "/images/about/about-5.png",
      alt: "4 kumquats on a table",
    },
  ];
</script>

<ul class="flex my-x-small mx-auto justify-center">
  {#each images as { src, alt }}
    <li class="p-macro">
      <img {src} {alt} height="310" width="310" class="w-full rounded-2xl" />
    </li>
  {/each}
</ul>
