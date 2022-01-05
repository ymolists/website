<script context="module" lang="ts">
  declare global {
    interface Window {
      onYouTubeIframeAPIReady: any;
    }
    var YT: any;
  }
</script>

<script lang="ts">
  import { trackEvent } from "./segment.svelte";

  export let embedId: string;
  export let title: string;

  // const eventTracker = () => {
  //   trackEvent("screencast_started", {
  //     id: embedId,
  //     name: title,
  //     url: window.location.href,
  //     path: window.location.pathname,
  //   });
  // };
</script>

<div class="flex justify-center">
  <lite-youtube
    style="width: 100%; heigh: auto; background-image: url('https://i.ytimg.com/vi/{embedId}/hqdefault.jpg');"
    videoid={embedId}
    playlabel={title}
  />
</div>
