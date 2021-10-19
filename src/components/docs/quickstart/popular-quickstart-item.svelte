<script lang="ts">
  export let name: string;
  export let path: string;
  export let icon: string;
</script>

<style type="text/postcss">
  .btn-conversion {
    min-width: unset;
  }
  .headline-margin {
    @apply my-x-small;
  }
</style>

<div class="lg:w-1/3 w-full">
  <div class="h-full">
    <div
      class="bg-white shadow-normal px-9 py-xx-small text-center rounded-4xl m-4 "
    >
      <img class="inline-block" src={icon} alt={name} style="height: 40px;" />
      <div
        class="flex flex-col justify-center items-center lg:h-24  headline-margin"
      >
        <h3 class="text-center">
          {name}
        </h3>
      </div>
      <a class="btn-conversion " href={path}>More Info</a>
    </div>
  </div>
</div>
