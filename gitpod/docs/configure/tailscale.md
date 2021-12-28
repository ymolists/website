---
section: configure
title: tailscale
---

<script context="module">
  export const prerender = true;
</script>

# Tailscale

With Tailscale you can automatically and securely connect your Gitpod workspace to other development resources, whether in the cloud or on prem, such as a production database behind your company’s firewall. You can also spin up several Gitpod workspaces that can talk to each other.

[Tailscale](https://tailscale.com/) is built on top of the point-to-point open-source [WireGuard](https://www.wireguard.com/) protocol which powers an encrypted mesh network or `tailnet`. At Gitpod we are big fans of their product and recently announced an [official partnership](/blog/tailscale) with them.

## Integration

If you’re already using Tailscale, the following files from https://github.com/gitpod-io/template-tailscale will need to be incorporated:

1. If you use a custom Docker image make sure `.gitpod.Dockerfile` is a layer in the build, or incorporated into the project Dockerfile.
2. The Tailscale tasks in `.gitpod.yml` need to be incorporated into the project `.gitpod.yml` file.
3. The `experimentalNetwork` variable in `.gitpod.yml` needs to be set to `true`

## Authorization

To allow your workspace to join the tailnet, you can either authenticate via the web UI or by creating an [Ephemeral Authkey](https://tailscale.com/kb/1085/auth-keys/) for your tailnet and add it as an [Environment Variable](https://gitpod.io/variables) named `TAILSCALE_AUTHKEY`.
