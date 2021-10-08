---
section: develop
title: VS Code Desktop Support
---

<script context="module">
  export const prerender = true;
</script>

# {title}

**This feature is currently in preview.** If you prefer to develop in your local VS Code, we've got you covered thanks to VS Code desktop support.

Keep your local settings<sup>1</sup> **and** benefit from Gitpod's high-spec servers & automated prebuilds. As you would expect, your code continues to stay in an ephemeral Gitpod workspace which keeps each of your projects nicely isolated from one another.

To get started:

1. Start a new Gitpod workspace ([learn how](/docs/getting-started) in the docs).
1. Open the command palette (⇧⌘P or Ctrl+Shift+P)
1. Type "Open in VS Code" and hit Enter.

This opens your local VS Code, connects to the Gitpod workspace and let’s you develop, test & debug your application as if it was running locally.

VS Code desktop support is built on top of the [Local Companion](/docs/develop/local-companion) app, which you can continue to use independently.

<br />
<sup>1</sup> Yes this also means you get to keep your keyboard shortcuts just the way you prefer them. You know, Ctrl/Cmd + W to close an editor tab 😉.

## Managing extensions

VS Code runs extensions in one of two places: locally on the UI / client side, or remotely on your Gitpod workspace.

For further details, please refer to the official VS Code docs on how to [manage extensions](https://code.visualstudio.com/docs/remote/ssh#_managing-extensions).
