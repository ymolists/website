<script lang="ts">
  import { createPopperActions } from "svelte-popperjs";

  const [popperRef, popperContent] = createPopperActions();

  const popperOptions = {
    placement: "top-start",
    modifiers: [{ name: "offset", options: { offset: [-8, 8] } }],
  } as any;

  let clazz = "";
  export { clazz as class };

  export let title: string = "";
  let isRendered: boolean = false;
  let isClicked: boolean = false;
</script>

<style lang="postcss">
  .tooltip {
    @apply w-auto text-off-white bg-[#565252] text-xs py-macro px-2.5 rounded-xl normal-case font-normal z-50;
  }

  .tooltip :global(a) {
    @apply text-off-white;
  }
  .arrow,
  .arrow::before {
    @apply absolute w-3 h-3 bg-inherit;
  }

  .arrow {
    @apply invisible;
  }

  .arrow::before {
    @apply visible;
    content: "";
    transform: rotate(45deg);
  }
</style>

<span
  on:mouseleave={() => {
    isRendered = false;
  }}
>
  <button
    on:mouseover={() => (isRendered = true)}
    on:focus={() => {
      isRendered = true;
    }}
    on:blur={() => {
      isRendered = false;
    }}
    class={clazz}
  >
    <slot />

    <img
      on:click={() => {
        isClicked = !isClicked;
      }}
      use:popperRef
      src="/svg/question-mark.svg"
      alt="Tooltip"
      class="h-5 w-5"
    />
  </button>

  {#if isClicked || isRendered}
    <div class="tooltip" use:popperContent={popperOptions}>
      {@html title}
      <div class="arrow" data-popper-arrow />
    </div>
  {/if}
</span>
