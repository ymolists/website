<script lang="ts">
  import Gear from "./svgs/switcher/gear.svelte";
  import Sun from "./svgs/switcher/sun.svelte";
  import Moon from "./svgs/switcher/moon.svelte";

  const setLight = () => {
    document.body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  };

  const setDark = () => {
    document.body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  };

  const setSystem = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark();
    } else {
      setLight();
    }
  };
</script>

<style lang="postcss">
  button {
    @apply px-macro py-1;
  }

  button > :global(svg) {
    width: 18px;
    height: 18px;

    & :global(path) {
      transition: all 0.2s;
    }
  }
</style>

<div class="flex divide-x divide-divider mt-x-small mb-xx-small">
  <button
    title="Switch to System's prefered color scheme."
    on:click={setSystem}
  >
    <Gear />
  </button>
  <button title="Switch to Light theme" on:click={setLight}>
    <Sun />
  </button>
  <button title="Switch to Dark theme" on:click={setDark}>
    <Moon />
  </button>
</div>
