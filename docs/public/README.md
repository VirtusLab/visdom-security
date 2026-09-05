---
description: Contain the agent while it works, harden what it ships.
---

# Visdom Security

An autonomous agent is an unattended process holding your credentials, with network access, acting on instructions it reads from your repository. Everything in this component follows from taking that sentence literally.

## What changes when the author is an agent

**Prompt injection is a supply chain now.** Instructions can hide anywhere the agent reads: a README, a dependency's changelog, an issue comment, a documentation page. An agent that follows instructions faithfully will follow those too.

**Credentials leak at machine speed.** Secrets have always leaked into commits. The difference is throughput, and that an agent has no instinct that a token in a log line is a problem.

**Dependencies drift into fiction.** A meaningful share of packages a model recommends do not exist. Somebody registers the plausible name, and the typo becomes an install.

**Insecure by default, at scale.** Models reproduce the patterns they were trained on, including the vulnerable ones, and they do it consistently rather than occasionally.

None of this is exotic. It is the ordinary set of problems, arriving faster, from an actor with credentials and no judgement.

## Two layers

* [**Containment**](concepts/containment.md): the agent runs inside a boundary it does not control, and never holds the real secrets.
* [**Continuous AppSec**](concepts/appsec.md): everything it produces is scanned before it reaches production, with the noise filtered down to what is actually reachable.

The first assumes the agent will be tricked. The second assumes some of what it writes will be wrong. Neither trusts the model to behave.
