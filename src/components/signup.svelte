<script lang="ts">
  let clazz = "";
  export { clazz as class };
  export let type: "newsletter" | "ambassador program";
  let titleText = type === "newsletter" ? "Stay updated" : "Sign Up";
  let email: string;
  let resultMessage = "";
  let isSubmittedOnce = false;

  const submitEmail = async () => {
    isSubmittedOnce = true;
    try {
      const response = await fetch("/.netlify/functions/signup", {
        method: "post",
        body: JSON.stringify({
          type,
          email,
        }),
      });
      if (response.ok) {
        resultMessage = `Thanks you are now signed up for our ${
          type === "newsletter" ? type : "Ambassador Program"
        }.`;
      } else if (response.status === 409) {
        resultMessage = type === "newsletter" ?
          "Lean back and relax. The next newsletter will be sent right to your inbox." : "We will get back to you once the ambassador program is ready.";
        titleText = "You are already signed up";
      } else {
        resultMessage = "Oh no, something went wrong :(.";
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<style type="text/postcss">
  form {
    max-width: 95vw;
    @media (min-width: 450px) {
      width: 440px;
    }
  }
  input {
    @apply mb-0;
  }
  button {
    @apply mr-0 w-32;
  }
</style>

<form
  class="bg-white shadow-normal rounded-2xl max-w-lg py-small px-xx-small sm:px-small {clazz} relative h-48 md:h-54 lgx:h-60"
  on:submit|preventDefault={submitEmail}
  id="newsletter"
  on:click|stopPropagation
>
  <h2 class="h4 newsletter-title">{titleText}</h2>
  {#if resultMessage}
    <p class="">{resultMessage}</p>
  {:else}
    <p class="text-medium">Sign up now for our {type === "newsletter" ? type : "Ambassador Program"}.</p>
    <div class="flex mt-micro lgx:mt-x-small">
      <input
        type="email"
        bind:value={email}
        required
        autocomplete="email"
        placeholder="Enter your email"
        class="mr-macro sm:mr-xx-small"
      />
      <button class="btn-primary" type="submit" disabled={isSubmittedOnce}
        >Sign up</button
      >
    </div>
  {/if}
</form>
