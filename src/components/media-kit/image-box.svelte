<script lang="ts">
  import type { ImageBox } from "../../types/image-box.type";
  export let image: ImageBox;
  const { src, alt, text, btnText, imgClass } = image;
</script>

<div
  class="shadow-normal rounded-4xl py-small px-micro sm:p-small max-w-2xl bg-white mb-micro sm:mb-large"
>
  <img {src} {alt} class="h-auto md:h-72 rounded m-auto w-full {imgClass}" />
  <p class="mt-small mb-micro max-w-sm mx-auto">Download {text}</p>
  <a
    href={src}
    on:click={() =>
      window.analytics.track("media_downloaded", {
        name: src,
      })}
    class="btn-cta"
    download>{btnText}</a
  >
</div>
