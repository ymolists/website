<script>
  import OpenGraph from "../../components/open-graph.svelte";
  import VDP from "../../components/security/vdp.svelte";
</script>

<style type="scss">
  h1 {
    text-align: center;
  }
</style>

<OpenGraph
  data={{
    description: "Security",
    title: "Gitpod Security",
  }}
/>

<article class="text-blob">
  <h1 class="h2">Security</h1>

  <h2>How Gitpod makes you more secure</h2>
  <p>
    Storing copies of your source code locally on countless unsecured devices
    and networks is bad practice. At the same time, it has become a reality for
    many organisations to enable their employees to work remotely with BYOD
    policies.
  </p>
  <p>
    With Gitpod, your source code is safely stored in the cloud and never stored
    locally. Either on the carbon neutral Google Cloud Platform with our SaaS
    solution or on your own cloud infrastructure with Gitpod Self-Hosted. Our
    native integrations with GitHub, GitLab and Bitbucket create a single access
    point to your intellectual property, no matter where your developers are and
    what device they use for it.
  </p>
  <p>
    No packages or dependencies are downloaded to users' devices. Gitpod
    developer environments run in the cloud and are short-lived, protecting your
    local machines and other corporate resources from malicious attacks through
    execution of arbitrary code.
  </p>

  <h2>How we make Gitpod more secure</h2>
  <h3>Compliance</h3>
  <ul>
    <li>
      Gitpod is a European company committed to developer and data privacy. We
      are GDPR compliant and provide our users with the ability to access and
      control the information that we collect about them.
    </li>
    <li>
      Gitpod is built with security in mind and we continuously invest in
      security best practices. We are currently in the process of becoming SOC 2
      compliant and you can request a copy of our SOC2 audit report as soon as
      it's available.
    </li>
  </ul>

  <h3>Environment Isolation</h3>
  <p>
    Each Gitpod workspace or <a href="/docs/prebuilds">prebuild</a>a> runs on a
    secured single-use container providing fast startup times without
    compromising on security.
  </p>
  <p>
    We create separate user, PID, mount and network namespaces for each Gitpod
    workspace, and establish an unprivileged node user as <code>root</code>
    within that user namespace. More details on the technical approach can be
    found in a
    <a href="https://www.youtube.com/watch?v=l4I2TVAnBuw"
      >talk by our Head of Engineering</a
    >
    as well as in a
    <a
      href="https://kinvolk.io/blog/2020/12/improving-kubernetes-and-container-security-with-user-namespaces/"
      >blog post</a
    > from the container security experts at Kinvolk who stress-tested our namespace
    layering implementation.
  </p>

  <h3>Encryption</h3>
  <p>
    All data, including workspace backups and environment variables, is
    encrypted at rest using AES256; and all connections to the Gitpod app,
    website, workspaces and workspaces' endpoints are encrypted in transit
    (TLS).
  </p>

  <h3>Authentication and Authorization</h3>
  <p>
    Gitpod uses your Git provider's SSO and, by default, all workspaces
    connections are private and authenticated, making them accessible only by
    the creator.
  </p>
  <p>
    Prebuild logs are readable by all members of the corresponding team and no
    one else.
  </p>

  <h3>Open source</h3>
  <p>
    Built in the open, our source code and how Gitpod is developed are publicly
    available for review by everyone. Our security posture, <a
      href="/security/report">disclosure policy</a
    >
    and speed in vulnerability handling is highlighted in the following
    <a
      href="https://about.gitlab.com/blog/2021/07/08/two-bugs-and-a-quick-fix-in-gitpod/"
      >blog post</a
    >
    from the security research team at GitLab. Due to our
    <a
      href="https://about.gitlab.com/blog/2021/07/19/teams-gitpod-integration-gitlab-speed-up-development/"
      >native GitLab integration</a
    >, they continuously monitor our system for bugs.
  </p>
  <p>
    In addition to this, we acknowledge the importance of giving back to the
    community and have taken steps to support the software supply chain of
    Gitpod and of our customers through the creation of a monetary fund for <a
      href="/blog/devxconf-wrap">supporting open-source maintainers</a
    >.
  </p>
</article>

<VDP />
