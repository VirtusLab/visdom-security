# Containment

An agent that can be talked into anything is safe only if the things it can reach are few and named. Containment is that boundary, and the design rule is simple: **the agent must not control the boundary it runs inside**.

## One boundary, not per-tool settings

Every packet the agent's container sends leaves through a single enforcement point: HTTP, HTTPS, DNS, any TCP or UDP. Not a proxy variable each tool has to honour, not a setting in a config file the agent can edit. Tools inherit the boundary whether or not they know it exists, which is what stops "the agent used curl instead" from being a bypass.

The network rules live in a separate container with the privilege to set them. The agent's container shares that network namespace and inherits the rules, but has no privilege to change them. A compromised agent is inside the tunnel, not in charge of it.

## Allowlist, not blocklist

The policy is a list of destinations the agent may reach: your package registry, your model gateway, your source control, your issue tracker. Everything else is refused. Blocklists lose this game; the space of somewhere-else is infinite, and an agent looking for a way out is an excellent search algorithm.

## The agent never holds the secret

This is the part worth understanding properly, because it removes a whole class of incident rather than detecting it.

The agent's environment holds **placeholders**, not values. When a request goes to an allowlisted host, the boundary substitutes the real secret on the way out. A request anywhere else is refused, placeholder and all.

The consequences are pleasant:

* The secret cannot appear in a transcript, a log, a commit, or generated code, because the agent never had it.
* An exfiltration attempt carries a useless string.
* Rotation happens at the boundary, not in every agent's environment.

It also solves an organisational problem that has nothing to do with agents. People can be granted access to models without being handed API keys. Somebody who does not have the key cannot quietly use a tool that bypasses the platform, so usage stays inside the audited path without anyone having to police it.

## What this is not

Containment does not make the agent's output correct, and it does not judge what the agent writes. It bounds the blast radius while the work happens. Judging the result is the other layer's job.
