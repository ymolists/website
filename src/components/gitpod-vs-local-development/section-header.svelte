<script lang="ts">
  export let image: string;
  export let name: string;
</script>

<style lang="postcss">
  .card-heading {
    @apply flex flex-col items-center justify-center pb-x-small;
  }
  .card-heading img {
    @apply h-28;
  }
</style>

<div class="card-heading">
  <img src={image} alt={name} />
  <h3 class="h4 mt-x-small">{name}</h3>
  <slot name="button" />
</div>
