---
section: configure
title: Editor
---

<script context="module">
  export const prerender = true;
</script>

# Editor configuration

## Install custom fonts

This process roughly matches how you install custom fonts locally:

1. Download the desired font to your local machine and install it locally on your operating system.
1. Open the editor's user settings (e.g. _File_ > _Preferences_ > _Settings_ > _User_)
1. Configure your font with the `editor.fontFamily` setting:
   ```
   {
     "editor.fontFamily": "Your custom font name"
   }
   ```
