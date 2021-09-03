<script>
  import OpenGraph from "../../components/open-graph.svelte";
  import Section from "../../components/section.svelte";
  import Explore from "../../components/explore.svelte";
</script>

<style type="scss">
  h1 {
    text-align: center;
  }
</style>

<OpenGraph
  data={{
    description: "Thanks!",
    title: "Thanks!",
  }}
/>

<header class="tight">
  <h1>Thanks!</h1>
  <p>
    We 🧡 the following people who <a href="/security/report"
      >responsibly disclosed</a
    > their security findings.
  </p>
</header>

<article class="hilited">
  <h2 class="h4">2021</h2>
  <li>
    <a rel="nofollow" href="https://twitter.com/snoopysecurity"
      >Sam Sanoop from Snyk</a
    >.
  </li>
  <li>
    <a
      rel="nofollow"
      href="https://about.gitlab.com/blog/2021/07/08/two-bugs-and-a-quick-fix-in-gitpod/"
      >Joern Schneeweisz from GitLab</a
    >.
  </li>
</article>

<Explore />
