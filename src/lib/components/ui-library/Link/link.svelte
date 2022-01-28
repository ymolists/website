<script lang="ts">
  let className: string = "";
  export { className as class };
  export let variant: "primary" | "secondary" | "cta" | "conversion";
  export let disabled: boolean = false;
  export let href: string;
</script>

<style lang="postcss">
  .primary {
    @apply bg-orange-900 hover:bg-brand-hover;
  }

  .secondary {
    @apply bg-pink-900 hover:bg-salmon-hover focus:bg-salmon-hover;
  }

  .cta {
    @apply bg-sand-dark hover:bg-orange-900 focus:bg-orange-900;
  }

  .disabled {
    @apply pointer-events-none text-gray-800;
  }

  .conversion {
    @apply lg:py-[0.75rem] lg:px-8 text-p-medium leading-5 bg-orange-900 hover:bg-brand-hover focus:bg-brand-hover rounded-2xl min-w-[10rem];
  }
</style>

<a
  {href}
  {disabled}
  class:disabled
  class:primary={variant === "primary"}
  class="transition-all duration-[50ms] inline-block text-center py-[0.5rem] px-[1.5rem] shadow-light font-semibold bg-none rounded-xl text-btn-small  text-black leading-4  {className}"
  {...$$restProps}
>
  <slot />
</a>
