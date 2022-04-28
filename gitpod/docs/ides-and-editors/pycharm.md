---
section: ides-and-editors
title: PyCharm
---

<!--
  This document is auto generated from generators/ide/jb-product.md
  Edit this file instead and run `yarn generate:jb`to apply.
-->

<script context="module">
  export const prerender = true;
</script>

# {title}

Gitpod enables code editing using JetBrains {title} currently via [JetBrains Gateway](jetbrains-gateway).

> **Please note:** JetBrains {title} Desktop is currently in beta. If you experience any issues, or have feedback, please [get in touch](/contact/support).

## Getting Started

1. **Install [JetBrains Gateway](https://www.jetbrains.com/help/pycharm/remote-development-a.html#gateway)** - With the [JetBrains Gateway and Gitpod](jetbrains-gateway) plugin you can create and manage your latest 20 Gitpod workspaces.
2. **Install the Gitpod plugin** - Navigate to the JetBrains Gateway preferences page and select the plugins tab to search and install the [Gitpod plugin](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway).
3. **Update your Gitpod preferences** - Select {title} on the [Gitpod preferences page](https://gitpod.io/preferences) which will set {title} as your default Desktop IDE for future workspace starts.
4. **Start (or restart) your workspace** - Either start a workspace directly from within the [JetBrains Gateway](jetbrains-gateway) via the Gitpod plugin **OR** open a new workspace direclty in Gitpod where on workspace start you will be prompted to open {title} for that workspace.

<figure>
<video playsinline autoplay no-controls loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Updating Gitpod IDE preferences to {title}" src="/images/editors/select-jetbrains-ide.mp4"></video>
    <figcaption>Updating Gitpod IDE preferences to {title}</figcaption>
</figure>

<figure>
<video playsinline autoplay no-controls loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Opening a JetBrains IDE from Gitpod" src="/images/editors/opening-the-thin-jetbrains-client.mp4"></video>
    <figcaption>Opening a JetBrains IDE from Gitpod</figcaption>
</figure>

<figure>
<video playsinline autoplay no-controls loop muted  class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Updating the Gitpod plugin in JetBrains Gateway" src="/images/editors/update-jetbrains-gateway-settings.mp4"></video>
    <figcaption>Updating the Gitpod plugin in JetBrains Gateway</figcaption>
</figure>

<figure>
<video playsinline autoplay no-controls loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Opening a JetBrains IDE from Gateway" src="/images/editors/open-from-jetbrains-gateway.mp4"></video>
    <figcaption>Opening a JetBrains IDE from Gateway</figcaption>
</figure>

**Important:** You must restart any started workspaces for your IDE preferences to take effect.

## Install Plugins

> This section is about installing plugins in context of remote development with Gitpod. For more information on regular plugin management, refer to <a href="https://www.jetbrains.com/help/pycharm/managing-plugins.html" target="_blank">{title} docs</a>.

[Remote development](https://www.jetbrains.com/help/pycharm/remote-development-overview.html#defs) with {title} allows to install plugins in:

- [**{title} backend**](#install-on-title-backend) running in a _remote Gitpod workspace_. Plugins contribute functionality which require access to remote filesystem and tools, e.g. contributing support of languages and frameworks. A plugin is installed only for [the current Gitpod workspace by default](#install-for-your-current-workspace), but can be [preconfigured for all users of a repository](#preconfigure-for-repository). It is not yet possible to install them for all workspaces of your user.
- [**JetBrains Client**](#install-on-jetbrains-client) running on _your local machine_ and providing the UI to **{title} backend**. Plugins contribute modifications to the UI, keyboard shortcuts, themes and so on. Once installed a plugin is available for **any Gitpod workspace** running the same version of **{title} backend**.
- [**JetBrains Gateway**](/docs/ides-and-editors/jetbrains-gateway#getting-started) running on _your local machine_ and provisioning **JetBrains Client** compatible with **{title} backend**. Plugins contribute new connectivity modes, like Gitpod Gateway plugin to connect to Gitpod workspaces.

### Install on JetBrains Client

**JetBrains Client** running on _your local machine_ and providing the UI to **{title} backend**. Plugins contribute modifications to the UI, keyboard shortcuts, themes and so on. Once installed a plugin is available for **any Gitpod workspace** running the same version of **{title} backend**.

To install a plugin on **JetBrains Client** follow these steps:

- In **JetBrains Client** open the IDE settings and select **Plugins**.
- Find the plugin in the **Marketplace** and click **Install**.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Install a plugin on JetBrains Client" src="/images/editors/install-local-jb-plugin.png">
    <figcaption>Install a plugin on JetBrains Client</figcaption>
</figure>

### Install on {title} backend

**{title} backend** running in a _remote Gitpod workspace_. Plugins contribute functionality which require access to remote filesystem and tools, e.g. contributing support of languages and frameworks. A plugin is installed only for [the current Gitpod workspace by default](#install-for-your-current-workspace), but can be [preconfigured for all users of a repository](#preconfigure-for-repository). It is not yet possible to install them for all workspaces of your user.

#### Install for your current workspace

You can install a plugin only for **your current workspace** following these steps:

- In **JetBrains Client** open the IDE settings and select **Plugins On Host**.
- Find the plugin in the **Marketplace** and click **Install**.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Install a plugin on {title} backend" src="/images/editors/install-remote-jb-plugin.png">
    <figcaption>Install a plugin on {title} backend</figcaption>
</figure>

#### Preconfigure for repository

You can share a plugin on **{title} backend** with everybody working on the repository by adding it to [.gitpod.yml](/docs/config-gitpod-file) and pushing to your Git repository.
Each workspace is preconfigured with plugins from this configuration file, here is an example:

```yaml
jetbrains:
  pycharm:
    - zielu.gittoolbox
    - izhangzhihao.rainbow.brackets
```

You can find **pluginId** on the [JetBrains Marketplace](https://plugins.jetbrains.com) page:

- Find a page of the required plugin.
- Select the **Versions** tab.
- Click any version to copy the **pluginId** (short name such as `org.rust.lang`) of the plugin you want to install.

#### Install for your user

It is not yet possible to install plugins on **{title} backend** for your user to share across all your Gitpod workspaces.

## Indexing using Prebuilds

> **Please note:** This feature is currently experimental and is a subject to change. [Send feedback](https://github.com/gitpod-io/gitpod/issues/6740).

When you open the project {title} starts indexing to load modules and
enable the core functionality like code completion and navigation.
Depending on the size of your project indexing speed can vary significantly.

You can speed up the indexing of a project by applying these [general recommendations](https://www.jetbrains.com/help/go/indexing.html).
Gitpod prebuilds allow you to improve it further by indexing before you start a new workspace.

To leverage it:

- configure prebuilds for your repository, refer to [Prebuilds](/docs/prebuilds);
- enable indexing for {title} in prebuilds by editing [.gitpod.yml](/docs/config-gitpod-file) in your repository:

```yaml
jetbrains:
  pycharm:
    prebuilds:
      version: stable
```

- push changes to your Git repository to apply.

The `version` property allows you to control whether to index for `stable`, `latest`, or `both` versions of {title} compatible with Gitpod.
Users can switch between `stable` and `latest` versions of {title} on the [user preferences](https://gitpod.io/preferences) page.
