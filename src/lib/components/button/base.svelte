<script lang="ts">
  import type { Button } from "$lib/types/button.type";

  let clazz = "";
  export { clazz as class };
  export let button: Button;

  const { href, text } = button;
  const target = href ? "_blank" : undefined;
</script>

<a
  {href}
  {target}
  class="inline-block text-center font-semibold py-macro px-xx-small rounded-xl shadow-light text-btn-small leading-4 text-black {clazz}"
>
  {text}
</a>
