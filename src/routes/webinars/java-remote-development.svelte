<script>
  import Articles from "$lib/components/articles.svelte";
  import Explore from "$lib/components/explore.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Jetbrains from "$lib/components/svgs/brands/jetbrains.svelte";
  import Header from "$lib/components/webinars/header.svelte";
  import Hosts from "$lib/components/webinars/hosts.svelte";
  import InThisWebinar from "$lib/components/webinars/in-this-webinar.svelte";
  import Layout from "$lib/components/webinars/layout.svelte";
  import OrganizedBy from "$lib/components/webinars/organized-by.svelte";
  import Register from "$lib/components/webinars/register.svelte";
  import { hosts } from "$lib/contents/webinars/java-remote-development";
</script>

<OpenGraph
  data={{
    title: "Webinar on remote development with JetBrains’s IntelliJ",
    description:
      "In this webinar we’ll explore using Gitpod to enable Java development in the cloud with your local IntelliJ IDEA.",
    keywords: "webinar, remote development, Jetbrains, IntelliJ",
  }}
/>

<div class="flex items-start">
  <Layout>
    <Header />
    <Register class="lgx:hidden" />
    <InThisWebinar>
      <svelte:fragment slot="list-items">
        <li>Why remote development can save you hours of work every week</li>
        <li>
          How to use Gitpod remote dev environments with the IntelliJ IDE that
          runs on your computer (Demo)
        </li>
      </svelte:fragment>
    </InThisWebinar>
    <Hosts {hosts} />
    <OrganizedBy>
      <img src="/images/gitpod-logo.svg" alt="Gitpod" class="h-10 w-10" />
      <Jetbrains isDark={true} notDarkWhenDark={true} class="h-10 w-10" />
    </OrganizedBy>
  </Layout>
  <Register class="hidden lgx:block" />
</div>

<Articles
  title="Additional resources"
  text="If you are curious to learn more on how remote developments, 
  have a read through these blog posts."
  textMaxW="max-w-2xl"
  slugs={[
    "gitpod-jetbrains",
    "cloud-based-development-for-everyone",
    "i-said-goodbye-to-local-development-and-so-can-you",
  ]}
/>

<Explore contents={{ title: "Try it out" }} />
