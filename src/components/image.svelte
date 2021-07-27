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
</script>

<picture>
  <source
    srcset="{images[2].src} {images[2].width}w {images[3].src} {images[3]
      .width}w"
    type="image/{images[2].format}"
  />
  <img
    class={clazz}
    src={images[0].src}
    {alt}
    {height}
    sizes="(max-width: {images[0].width}px) {images[0].width}px, {images[1]
      .width}px"
    width={width || images[0].width}
    loading="lazy"
  />
</picture>
