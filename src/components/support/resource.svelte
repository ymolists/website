<script lang="ts">
  import { isAnExternalLink } from "../../utils/helpers";

  import type { Resource } from "../../types/resource.type";
  export let resource: Resource;
  const { title, text, link, icon } = resource;
  const target = isAnExternalLink(link.href) ? "_blank" : undefined;
</script>

<div
  class="flex flex-col justify-center items-center max-w-xs lg:max-w-sm mb-small bg-white py-small px-x-small sm:p-small rounded-4xl shadow-normal"
>
  {#if icon}
    <img src={icon} alt={title} class="h-12 mb-x-small" />
  {/if}
  <h3 class="mb-micro">{title}</h3>
  <p>{text}</p>
  <a href={link.href} {target} class="btn-cta mt-x-small">{link.text}</a>
</div>
