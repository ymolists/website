---
section: self-hosted/latest
subsection: troubleshooting
title: Support Patches
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod Provided Support Patches

Further customization of your installation is possible within the installation UI, where Gitpod can provide you with a support patch to tailor the installation. In the “Additional Options” section, click the “Enable additional options” checkbox, and upload the file in the “Gitpod config patch” field.

![support patch](../../static/images/docs/self-hosted/support-patch.png)

The patch file is effectively a patch for the internally used [Gitpod Installer config file](https://github.com/gitpod-io/gitpod/blob/main/install/installer/example-config.yaml). All values that are set in the patch file will override the generated config file values.
