<script lang="ts">
  import type { Lottie } from "$lib/types/lottie.type";

  import { onMount } from "svelte";

  export let lottie: Lottie;

  const { src, style, id } = lottie;

  onMount(() => {
    // @ts-ignore
    LottieInteractivity.create({
      player: `#${id}`,
      mode: "scroll",
      actions: [
        {
          visibility: [0, 1.0],
          type: "play",
        },
      ],
    });
  });
</script>

<lottie-player
  {id}
  {src}
  background="transparent"
  speed="1"
  {style}
  loop
  autoplay
/>
