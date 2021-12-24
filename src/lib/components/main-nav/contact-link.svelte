<script>
  import NavItem from "./nav-item.svelte";
</script>

<NavItem
  on:click
  navItem={{
    href: "/contact",
    label: "Contact",
  }}
/>
