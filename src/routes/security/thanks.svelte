<script context="module">
  export const prerender = true;
</script>

<script>
  import Report from "../../components/security/report.svelte";
  import Thanks from "../../components/security/thanks.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Big thanks the following people who responsibly disclosed their security findings.",
    title: "Thanks",
  }}
/>

<Thanks />
<Report />
