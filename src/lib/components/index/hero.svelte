<script lang="ts">
  import { onMount } from "svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import GithubMark from "../svgs/github-mark.svelte";

  let githubStarsEl: HTMLAnchorElement;

  onMount(async () => {
    const githubButtons = await import("github-buttons");
    githubButtons.render(githubStarsEl, (el) => {
      githubStarsEl.parentNode.replaceChild(el, githubStarsEl);
    });
  });
</script>

<style lang="scss">
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 647px) {
      flex-direction: column;
      margin: var(--small) auto 0;
      max-width: 450px;
    }

    &__text {
      max-width: 700px;
      flex: 0 0 50%;

      @media (max-width: 972px) {
        flex: 0 0 50%;
      }

      @media (max-width: 698px) {
        flex: 0 0 54%;
      }
    }

    &__intro-text {
      margin-top: -16px;

      @media (max-width: 972px) {
        font-size: var(--p-medium);
      }
    }

    &__action {
      margin-top: var(--small);
      align-items: end;
      @media (max-width: 972px) {
        margin-top: var(--xx-small);
      }

      & > * {
        display: grid;
        grid-template-columns: 160px 100%;
        gap: var(--xx-small);

        @media (max-width: 1140px) {
          display: flex;
          gap: initial;

          & > * {
            &:not(:last-child) {
              margin-right: var(--micro);
            }
          }
        }
      }
    }

    &__try-now {
      margin-bottom: var(--micro);

      @media (max-width: 972px) {
        p {
          font-size: var(--btn-small);
        }
      }

      @media (max-width: 360px) {
        & > :first-child {
          flex: 0 0 110px;
        }
      }
    }

    &__icons {
      display: flex;
      justify-content: space-between;
      width: 120px;
      padding: 0 var(--macro);

      @media (min-width: 1141px) {
        width: 160px;
      }

      @media (max-width: 768px) {
        width: 145px;
      }

      & > :global(*) {
        height: 29px;
        width: 29px;

        @media (max-width: 1140px) {
          height: 27px;
          width: 27px;
        }
      }
    }

    :global(body.dark) &__stars {
      filter: invert(90%);
    }

    &__stars {
      height: 2rem;
    }

    &__illustration {
      max-width: 700px;
      padding-left: 70px;
      padding-top: 20px;
      flex: 1;

      @media (max-width: 972px) {
        margin-top: var(--micro);
        padding: 0;
      }
    }
  }
</style>

<div class="hero mt-x-small" data-analytics={`{"position":"hero"}`}>
  <div class="hero__text">
    <h1 class="homeh1">
      Always<br /> ready to code.
    </h1>
    <p id="choose-project-observer-target" class="hero__intro-text text-large">
      Spin up fresh, automated dev environments<br />
      for each task, in the cloud, in seconds.
    </p>
    <div class="hero__action">
      <div class="hero__try-now text-small">
        <div>
          <LinkButton
            variant="primary"
            href="https://gitpod.io/workspaces/"
            size="large">Try Now</LinkButton
          >
        </div>
        <p>
          Open a workspace.
          <br />
          Start from any Git context.
        </p>
      </div>
      <div>
        <div class="hero__icons">
          <img src="/svg/gitlab.svg" alt="GitLab logo" />
          <GithubMark alt="GitHub logo" />
          <img src="/svg/bitbucket.svg" alt="Bitbucket logo" />
        </div>
        <div class="hero__stars">
          <a
            bind:this={githubStarsEl}
            class="github-button"
            href="https://github.com/gitpod-io/gitpod"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star the Gitpod Repo on GitHub">Star</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="hero__illustration">
    <img
      src="/images/illustration-large.png"
      alt="Gitpod in a Nutshell"
      width="700"
      height="724"
      class="block dark:hidden"
    />
    <img
      src="/images/illustrattion-large-dark.png"
      alt="Gitpod in a Nutshell"
      width="700"
      height="724"
      class="hidden dark:block"
    />
  </div>
</div>
