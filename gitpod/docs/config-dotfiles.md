---
section: configure
title: Dotfiles
---

<script context="module">
  export const prerender = true;
</script>

# Dotfiles

> Dotfiles support is in BETA. If you experience issues, or have feedback, please [get in touch](/contact/support).

Dotfiles are a way to customize your developer environment according to your personal needs.

To configure Gitpod to use your own dotfiles for all your workspaces, enter the URL of a public dotfiles repository in https://gitpod.io/preferences.

Gitpod will recognize and run one of the following install scripts from your dotfiles repository.

- install.sh
- install
- bootstrap.sh
- bootstrap
- script/bootstrap
- setup.sh
- setup
- script/setup

If there is no install script, your dotfiles will be symlinked into `/home/gitpod`.

### Example

The example below has just one dotfile called `.bash_aliases`. If this file is present in a workspace home directory, it will be found by the '.bashrc' startup script in the Gitpod default image, so no additional install script is required.

**.bash_aliases**

```sh
echo Hello Gitpod
echo Here is my .bash_aliases dotfile

alias gitsha='git rev-parse HEAD'
```
