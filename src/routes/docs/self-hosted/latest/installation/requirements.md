---
section: self-hosted/latest
title: Installation requirements
---

<script context="module">
  export const prerender = true;
</script>

# Installation requirements

## Hardware requirements

### Storage

### CPU

### Memory

## Runtime Requirements

### SSL

- Gitpod requires trusted HTTPS certificates. We recommend using [Let's Encrypt](https://letsencrypt.org/) for retrieving certificates as we do for [gitpod.io](https://gitpod.io).
- Installation of Gitpod with SSL certificates signed with your own CA are not currently supported. This scenario is desired and we would welcome help getting [this community pull-request](https://github.com/gitpod-io/gitpod/pull/2984) merged.
- The HTTPS certificates for your domain must include `your-domain.com`, `*.your-domain.com` and `*.ws.your-domain.com`. Beware that wildcard certificates are valid for one level only (i.e. `*.a.com` is not valid for `c.b.a.com`)

### DNS

Gitpod requires a domain (or sub-domain on a domain) that is resolvable by your name servers. As Gitpod launches services and workspaces on additional subdomains it also needs two wildcard domains.

For example:

```
your-domain.com
*.your-domain.com
*.ws.your-domain.com
```

or

```
gitpod.your-domain.com
*.gitpod.your-domain.com
*.ws.gitpod.your-domain.com
```
