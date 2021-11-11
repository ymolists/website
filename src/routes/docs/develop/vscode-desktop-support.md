---
section: develop
title: VS Code Desktop Support
---

<script context="module">
  export const prerender = true;
</script>

# {title}

> **Please note:** VS Code Desktop Support is currently in preview If you experience any issues, or have feedback, please [get in touch](https://www.gitpod.io/support).

`youtube: kI6firDA0Bw`

With VS Code Desktop Support, you can keep your local IDE configurations<sup>1</sup> **and** benefit from Gitpod's high-spec servers & automated prebuilds. As you would expect, your code executes in an ephemeral Gitpod workspace which keeps each of your projects nicely isolated from one another.

To get started:

1. Start a new Gitpod workspace ([learn how](/docs/getting-started) in the docs).
1. Open the command palette (⇧⌘P or Ctrl+Shift+P)
1. Type "Open in VS Code" and hit Enter.

This command will open your local VS Code, connect to the Gitpod workspace and let you develop, test & debug your application as if the code was running locally.

VS Code desktop support installs, manages and runs the [Local Companion](/docs/develop/local-companion) app under-the-hood so you don't have to. However, if you're currently using the local companion, you can can continue to use it independently.

<br />
<sup>1</sup> Yes this also means you get to keep your keyboard shortcuts just the way you prefer them. You know, Ctrl/Cmd + W to close an editor tab 😉.

## Managing extensions

VS Code runs extensions in one of two places: locally on the UI / client side, or remotely on your Gitpod workspace.

For further details, please refer to the official VS Code docs on how to [manage extensions](https://code.visualstudio.com/docs/remote/ssh#_managing-extensions).
