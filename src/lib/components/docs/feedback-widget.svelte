<script lang="ts">
  // Credit: www.vercel.com/docs 🙏
  import { page } from "$app/stores";
  import { trackEvent } from "../segment.svelte";
  import Textarea from "$lib/components/ui-library/textarea";
  import Button from "$lib/components/ui-library/button";
  import Card from "$lib/components/ui-library/card";

  let selectedEmotion: number;
  let note = "";
  let resultMessage: string;
  let isSubmittedOnce = false;
  let clazz = "";
  export { clazz as class };
  export let type: "docs" | "guides" | "digests";

  const submitFeedback = async () => {
    isSubmittedOnce = true;

    trackEvent(
      "feedback_submitted",
      {
        score: selectedEmotion,
        feedback: note,
        url: window.location.href,
        path: window.location.pathname,
      },
      true
    );

    const response = await fetch("/api/feedback", {
      method: "post",
      body: JSON.stringify({
        type,
        emotion: selectedEmotion,
        note,
        url: $page.url.toString(),
      }),
    });

    if (response.status === 201) {
      resultMessage = "Thanks for your feedback, we appreciate it.";
    } else {
      resultMessage = "Oh no, something went wrong :(.";
    }
    setTimeout(() => {
      selectedEmotion = undefined;
      note = "";
      resultMessage = "";
    }, 5000);
  };
</script>

<style lang="postcss">
  .selected {
    @apply grayscale-0 scale-150;
  }

  .link {
    @apply underline;
  }
</style>

<div class={clazz}>
  <Card
    size="small"
    class="max-w-md py-small px-xx-small m-auto"
    data-analytics={`{"dnt":true}`}
  >
    <h2 class="text-xl leading-6 mb-6 text-center justify-center w-full">
      Was this helpful?
    </h2>
    {#if resultMessage}
      <p class="text-center">{resultMessage}</p>
    {:else}
      <form on:submit|preventDefault={submitFeedback}>
        <div class="flex justify-center space-x-6">
          {#each new Array(4) as _, index}
            <button
              on:click|preventDefault={() => (selectedEmotion = index + 1)}
              class:selected={selectedEmotion === index + 1}
              class="grayscale transition duration-150 hover:grayscale-0 hover:scale-150"
            >
              <img
                src="/images/docs/feedback-widget/{index + 1}.svg"
                alt="Feedback {index + 1} of 4"
                title="Feedback {index + 1} of 4"
                class="h-6 w-6"
              />
            </button>
          {/each}
        </div>
        {#if selectedEmotion}
          <div class="mt-x-small">
            <Textarea
              label="Feedback"
              bind:value={note}
              id="note"
              name="feedback"
              width="100%"
              placeholder="Your feedback..."
              aria-label="Feedback input"
              autocapitalize="off"
              autocomplete="off"
              autocorrect="off"
              type="text"
              class="mb-0"
            />
            <div>
              <p class="text-sm my-4">
                By submitting this form I acknowledge that I have read and
                understood <a class="link" href="/privacy"
                  >Gitpod’s Privacy Policy.</a
                >
              </p>
              <span>
                <Button
                  variant="primary"
                  size="medium"
                  disabled={isSubmittedOnce}
                  class="mt-micro"
                  type="submit"><span>Send</span></Button
                >
              </span>
            </div>
          </div>
        {/if}
      </form>
    {/if}
  </Card>
</div>
