<script lang="ts">
  import { isAnExternalLink } from "../../utils/helpers";

  import type { ContactAction } from "../../types/contact-action.type";

  let clazz = "";
  export { clazz as class };
  export let action: ContactAction;
  const { icon, title, text, link } = action;
</script>

<div
  class="flex flex-col justify-between items-center bg-white rounded-4xl px-xx-small py-not-huge mt-small shadow-normal {clazz}"
>
  <div>
    {#if icon}
      <img src="/svg/contact/{icon}" alt={title} class="mx-auto h-28" />
    {/if}
    <h2 class="h4">{title}</h2>
    <p class="mt-micro mb-xx-small">{text}</p>
  </div>
  <a
    href={link.href}
    target={isAnExternalLink(link.href) ? "_blank" : undefined}
    class="btn-primary">{link.text}</a
  >
</div>
