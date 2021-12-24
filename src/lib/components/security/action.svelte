<script lang="ts">
  import type { Action } from "$lib/types/action.type";
  export let action: Action;
  const { title, description, link } = action;
  let clazz = "";

  export { clazz as class };
</script>

<div class="max-w-xs {clazz}">
  <h2 class="h3">{title}</h2>
  <p class="my-x-small">
    {description}
  </p>
  <a href={link.href} class="btn-primary">{link.text}</a>
</div>
