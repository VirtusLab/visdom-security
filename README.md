# Visdom Security

**Containment + continuous AppSec for AI-generated code.**

A simpler sibling of [Visdom Code Review](https://github.com/VirtusLab/visdom-code-review)
and [Visdom Testing](https://github.com/VirtusLab/visdom-testing), focused on:

1. **Sandcat** &mdash; VirtusLab's sandbox for running AI coding agents in `--dangerous` mode
   with transparent mitmproxy, network allow/deny rules, and secret injection at the proxy level.
   <https://github.com/VirtusLab/sandcat>

2. **Partner AppSec** &mdash; continuous code-to-runtime scanning (SAST, SCA, DAST, secrets,
   IaC, CSPM, runtime). We highlight [Aikido](https://www.aikido.dev/) as the third-party
   partner for this capability.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The site is published under the base path `/visdom-security/`.
