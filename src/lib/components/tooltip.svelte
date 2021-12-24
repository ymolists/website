<script lang="ts">
  let clazz = "";
  export { clazz as class };

  export let title: string = "";
  let isRendered: boolean = false;

  const mouseOver = () => {
    isRendered = true;
  };

  const mouseLeave = () => {
    isRendered = false;
  };
</script>

<style lang="postcss">
  .tooltip {
    @apply absolute z-10 w-60;
    top: 112%;
    left: 90%;

    @media (max-width: 1700px) {
      @apply left-1/3;
    }

    @media (max-width: 1380px) {
      @apply left-1/2 w-56;
    }

    @media (max-width: 800px) {
      @apply w-52;
      left: 40%;
    }

    @media (max-width: 700px) {
      left: 60%;
    }

    @media (max-width: 475px) {
      @apply w-40;
      left: 40%;
    }

    &::before {
      content: "";
      @apply absolute block h-10 w-1/2;
      top: -60%;
      left: -25%;
    }
  }
</style>

<span class="relative" on:mouseleave={mouseLeave}>
  <button
    on:mouseover={mouseOver}
    on:click={() => {
      isRendered = true;
    }}
    on:focus={() => {
      isRendered = true;
    }}
    on:blur={() => {
      isRendered = false;
    }}
    class="inline-flex relative {clazz}"
  >
    <slot />
  </button>

  {#if isRendered}
    <div
      class="tooltip bg-off-white text-xs p-macro rounded-xl shadow-normal border border-solid border-white normal-case font-normal"
    >
      {@html title}
    </div>
  {/if}
</span>
