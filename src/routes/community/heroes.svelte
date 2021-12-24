<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "$lib/components/open-graph.svelte";
  import HeartOfGitpod from "$lib/components/heroes/heart-of-gitpod.svelte";
  import Header from "$lib/components/heroes/header.svelte";
  import Benefits from "$lib/components/heroes/benefits.svelte";
  import Eligibility from "$lib/components/eligibility.svelte";
  import MeetTheHeros from "$lib/components/heroes/meet-the-heros.svelte";
  import Explore from "$lib/components/explore.svelte";
  import { exploreContents } from "$lib/contents/community/hereos";
</script>

<OpenGraph
  data={{
    title: "Community Heroes",
    description:
      "The Gitpod Community Heroes program recognises developers that go above and beyond to contribute to Gitpod.",
  }}
/>

<Header />

<HeartOfGitpod />

<Benefits />

<Eligibility
  text="To become part of the Gitpod’s Community Heroes program, you’d need to:"
  list={[
    "Be at least 18+ years old and have a Gitpod account in good standing",
    "Be committed to Gitpod's values of diversity, equity & inclusion",
    "Be eager to gitpodify and to tell the world about Gitpod",
    "Enjoy creating and sharing technical content be it via blog posts, social media, public speaking, workshops or conferences. You must have examples ready to show us!",
    "Enjoy helping the Gitpod community 🧡",
  ]}
  link={{ href: "https://forms.gle/hPSZ2Bws9rpqE7M4A", text: "Apply now" }}
  ulMaxWidth="580px"
/>

<MeetTheHeros />

<Explore contents={exploreContents} />
