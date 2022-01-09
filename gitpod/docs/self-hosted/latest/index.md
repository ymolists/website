---
section: self-hosted/latest
title: Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod Self-Hosted

Gitpod, just as you know it from [gitpod.io](https://gitpod.io), can be deployed and operated on your own infrastructure. It supports different cloud providers, vanilla Kubernetes clusters, and behind the corporate firewalls.

# Installation via Helm (deprecated)

Installing Gitpod via Helm is deprecated and the charts will evetually be removed. If you are looking for the previous documentation you can find it [here](../deprecated/index).

# Installation via the new installer

## Supported Kubernetes distributions

Gitpod Self-Hosted runs well on:

- [Amazon Elastic Kubernetes Service](https://github.com/gitpod-io/gitpod-eks-guide)
- [Google Kubernetes Engine](https://github.com/gitpod-io/gitpod-gke-guide)
- [Microsoft Azure Kubernetes Service](https://github.com/gitpod-io/gitpod-microsoft-aks-guide)
- [Kubernetes](https://github.com/gitpod-io/gitpod/tree/main/installer)

## Incompatible Kubernetes distributions

These platforms are not supported.

- [Red Hat® OpenShift®](https://github.com/gitpod-io/gitpod/issues/5409)
- [Rancher Kubernetes Engine (RKE)](https://github.com/gitpod-io/gitpod/issues/5410)

## Minimum Kubernetes requirements

We strongly recommend deploying a dedicated kubernetes cluster just for Gitpod Self-Hosted.

Here are the minimum requirements:

- Ubuntu 20.04 with ≥ v5.4 kernel.
- Persistent volume support (Cloud provider or Host)
- Networking support (Calico or Cilium)
- Kubernetes ≥ 1.18.
- containerd ≥ 1.2.

## Minimum compute resources

If you want to run Gitpod Self-Hosted at home we recommend at minimum 4vCPU's and 16GB of memory. For a better experience we recommend at least 8vCPUs and 32GB RAM for workspace nodes. For cost efficiency, we recommend enabling cluster-autoscaling when running on a commercial cloud provider.

## Runtime requirements

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

### Ingress

- Gitpod is designed to serve traffic directly to your local network or internet.
- Wrapping Gitpod Self-Hosted behind proxies such as nginx or configurations where URLs are rewritten are not supported.

### SSL

- Gitpod requires trusted HTTPS certificates. While there is no hard requirement on any certificate authority, we recommend using an [ACME certificate](https://caddyserver.com/docs/automatic-https#acme-challenges) issuer (such as [ZeroSSL](https://zerossl.com) or [LetsEncrypt](https://letsencrypt.org)) to automatically renew and install certificates as we do for [gitpod.io](https://gitpod.io).
- Installation of Gitpod with SSL certificates signed with your own CA are not currently supported. This scenario is desired and we would welcome help getting [this community pull-request](https://github.com/gitpod-io/gitpod/pull/2984) merged.
- The HTTPS certificates for your domain must include SANs for

```
your-domain.com
*.your-domain.com
*.ws.your-domain.com
```

Beware that wildcard certificates are only valid for one level only (i.e. `*.a.com` is not valid for `c.b.a.com`)
