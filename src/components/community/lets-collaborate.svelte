<script>
  import { letsCollaborateActions } from "../../contents/community";
  import Action from "../contact/action.svelte";
  import Section from "../section.svelte";
</script>

<Section class="text-center">
  <h2>Let’s collaborate</h2>
  <p>
    Would you like to collaborate? We’re excited to hear your ideas. Get in
    contact.
  </p>
  <div class="flex flex-wrap justify-around">
    {#each letsCollaborateActions as action}
      <Action {action} class="max-w-sm lg:max-w-md" />
    {/each}
  </div>
</Section>
