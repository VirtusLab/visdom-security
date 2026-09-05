# Continuous AppSec

The second layer assumes some of what the agent writes will be wrong, and checks it before anybody deploys it.

## What gets scanned

Everything the change touches, not just the source: the code itself, the dependencies it pulls in, including transitive ones and their licences, the infrastructure definitions, and the secrets that should not be there. A generated change routinely spans all four, which is why scanning only the diff's source files misses the interesting half.

## The problem is noise, not detection

Detection has been a solved problem for years. Every organisation that switched a scanner on has met the real failure mode: thousands of findings, no ranking, and a team that learns to ignore the dashboard. Adding an agent to that pipeline multiplies the volume without adding attention.

Two things make the output usable.

**Deduplication across tools.** One issue, one finding, however many scanners noticed it. Findings correlate across the delivery lifecycle rather than arriving separately from each tool.

**Reachability triage.** A vulnerability in a code path nothing calls is not the same as one on your login route. Ranking by whether a finding is actually reachable is what turns a list into a queue somebody can work through.

## Where the boundary sits

This layer is deliberately not a replacement for the security tooling an organisation already runs. The capability is what matters: code-to-runtime scanning with correlation and noise reduction, applied to what the agent actually changed. The vendor providing it is a choice, and it is pluggable.

## How the two layers meet

Containment decides what an agent may reach while it works. Scanning decides what reaches production afterwards. Between them sits the audit record, so a finding and the session that produced the code can be put side by side later, which is the only way to answer "how did this get in" months after the fact.
