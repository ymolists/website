<script lang="ts">
  export let card: {
    image: string;
    details: {
      industry: string;
      plan: string;
      noOfEngineers: string;
      website: {
        href: string;
        text: string;
      };
    };
  };

  const { image, details } = card;
</script>

<style lang="postcss">
  .text > div {
    @apply w-36;
  }

  .h5 {
    @apply text-black font-bold mb-macro;
  }
</style>

<div
  class="rounded-2xl bg-off-white shadow-xl overflow-hidden max-w-xs sm:max-w-sm"
>
  <div
    class="h-60 bg-cover bg-center "
    style="background-image: url({image})"
  />
  <div
    class="text grid grid-cols-2 gap-x-medium gap-xx-small sm:gap-y-small p-xx-small sm:p-x-small"
  >
    <div>
      <p class="h5">Industry</p>
      <p>{details.industry}</p>
    </div>
    <div>
      <p class="h5">Plan & Delivery</p>
      <p>{details.plan}</p>
    </div>
    <div>
      <p class="h5">Engineers</p>
      <p>{details.noOfEngineers}</p>
    </div>
    <div>
      <p class="h5">Website</p>
      <p>
        <a href={details.website.href} target="_blank">
          {details.website.text}
        </a>
      </p>
    </div>
  </div>
</div>
