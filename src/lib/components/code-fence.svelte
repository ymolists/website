<script lang="ts">
  export let lang: string = "";
  export let code: string | null = null;
  export let title: string | null = null;
  export let rawCode: string | null = null;

  let copiedSuccessfully = false;

  const displayLanguageMap = {
    yaml: "yml",
    shell: "bash",
  };

  const mapDisplayLanguage = (str: string) => {
    return displayLanguageMap[str.toLowerCase()] || str;
  };

  let copyCode = async () => {
    try {
      const copiedCode = rawCode;
      await navigator.clipboard.writeText(copiedCode);
    } catch (e) {}
    copiedSuccessfully = true;
  };

  $: if (copiedSuccessfully) {
    setTimeout(() => {
      copiedSuccessfully = false;
    }, 1000);
  }

  $: title = title ?? mapDisplayLanguage(lang);
</script>

<div class="my-8 overflow-y-auto rounded-xl">
  <div
    class="sticky bg-card top-0 left-0 z-10 py-1 flex items-center backdrop-blur"
  >
    <span class="ml-4 font-mono text-sm ">{title}</span>
    <div class="flex-1" />
    <button
      on:click={copyCode}
      class="mr-4 px-2 py-1 transition-all duration-200 delay-[50] hover:text-important"
      ><span class={copiedSuccessfully ? "hidden opacity-0" : "opacity-100"}
        >Copy</span
      >
      <div
        class="transition-opacity z-10 duration-300 rounded-md ease-out
        {copiedSuccessfully ? 'opacity-100' : 'hidden opacity-0'}"
        aria-hidden="true"
      >
        copied successfully
      </div></button
    >
  </div>
  <div>
    <pre
      class="language-{lang} !m-0 !rounded-none ">
        <code class="language-{lang}">
      {@html code}
    </code></pre>
  </div>
</div>
