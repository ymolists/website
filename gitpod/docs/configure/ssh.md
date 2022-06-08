---
section: configure
title: Configure SSH
---

<script context="module">
  export const prerender = true;
</script>

# {title}

Secure Shell Protocol (SSH) is the basis for connecting to your Gitpod workspace when using [VS Code Desktop](/docs/ides-and-editors/vscode), [JetBrains Gateway](/docs/ides-and-editors/jetbrains-gateway), or accessing via the [command-line](/docs/ides-and-editors/command-line) from a local machine.

## Create an SSH key

Check to see if you already have an SSH key on your **local** machine. The key is typically located at `~/.ssh/id_rsa.pub` on macOS / Linux, and the `.ssh` directory in your user profile folder on Windows (for example `C:\Users\your-user\.ssh\id_rsa.pub`).

If you do not have a key, run the following command in a **local** terminal / PowerShell to generate an SSH key pair:

```bash
ssh-keygen -t rsa -b 4096
```

You will then be prompted to enter a secure passphrase, but you can leave that blank. You should now have a `id_rsa.pub` file which contains your new public SSH key.

> **Tip:** Don't have `ssh-keygen`? Install [a supported SSH client](#installing-a-supported-ssh-client).

## Installing a supported SSH client

| OS                                        | Instructions                                                                                                                     |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Windows 10 1803+ / Server 2016/2019 1803+ | Install the [Windows OpenSSH Client](https://docs.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse). |
| Earlier Windows                           | Install [Git for Windows](https://git-scm.com/download/win).                                                                     |
| macOS                                     | Comes pre-installed.                                                                                                             |
| Debian/Ubuntu                             | Run `sudo apt-get install openssh-client`                                                                                        |
| RHEL / Fedora / CentOS                    | Run `sudo yum install openssh-clients`                                                                                           |

> ❗️ PuTTY for Windows is not a supported client

## Local SSH file and folder permissions

**macOS / Linux:**

On your local machine, make sure the following permissions are set:

| Folder / File                         | Permissions                   |
| ------------------------------------- | ----------------------------- |
| `.ssh` in your user folder            | `chmod 700 ~/.ssh`            |
| `.ssh/config` in your user folder     | `chmod 600 ~/.ssh/config`     |
| `.ssh/id_rsa.pub` in your user folder | `chmod 600 ~/.ssh/id_rsa.pub` |
| Any other key file                    | `chmod 600 /path/to/key/file` |

**Windows:**

The specific expected permissions can vary depending on the exact SSH implementation you are using. We recommend using the out of box [Windows 10 OpenSSH Client](https://docs.microsoft.com/windows-server/administration/openssh/openssh_overview).

In this case, make sure that all of the files in the `.ssh` folder for your remote user on the SSH host is owned by you and no other user has permissions to access it. See the [Windows OpenSSH wiki](https://github.com/PowerShell/Win32-OpenSSH/wiki/Security-protection-of-various-files-in-Win32-OpenSSH) for details.

For all other clients, consult your client's documentation for what the implementation expects.
