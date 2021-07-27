<script lang="ts" context="module">
  interface Image {
    format: string;
    src: string;
    width: number;
  }
</script>

<script lang="ts">
  export let alt: string;
  export { clazz as class };
  export let height: string;
  export let images: Image[];
  export let width: string;

  let clazz: string = "";
  let imagesWithoutFirstElement = images.slice(1).reverse();
</script>

<picture>
  {#each imagesWithoutFirstElement as image}
    <source
      srcset={image.src}
      media="(max-width: {image.width}px)"
      type="image/{image.format}"
    />
  {/each}
  <img
    class={clazz}
    src={images[0].src}
    {alt}
    {height}
    width={width || images[0].width}
    loading="lazy"
  />
</picture>
