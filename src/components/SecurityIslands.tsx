"use client";

import { VisdomStrip } from "@virtuslab/visdom-ui";

// ---- Visdom Strip ----

interface SecurityVisdomStripProps {
  base: string;
}

export function SecurityVisdomStrip({ base }: SecurityVisdomStripProps) {
  return (
    <VisdomStrip
      className="visdom-strip--security"
      subtitle={
        <>
          Visdom Security is one of four components in{" "}
          <a href="https://virtuslab.com/services/visdom">Visdom</a>,
          VirtusLab&apos;s AI-Native SDLC.
        </>
      }
      products={[
        {
          role: "Context Fabric",
          name: "ViDIA",
          description: "Pre-indexed code expertise, dependency graphs, PR history",
          href: "https://github.com/virtuslab/vidia",
          active: false,
        },
        {
          role: "Code Review",
          name: "VCR",
          description: "Multi-layered AI code review with risk assessment",
          href: "https://virtuslab.github.io/visdom-code-review/",
          active: false,
        },
        {
          role: "Sandbox & AppSec",
          name: "Security",
          description: "Runtime containment and continuous application security scanning",
          href: base,
          active: true,
        },
        {
          role: "Visibility, Cost & Compliance",
          name: "Governance",
          description: "Signed audit trail, cost attribution, policy enforcement",
          href: "https://virtuslab.github.io/visdom-governance/",
          active: false,
        },
      ]}
      footer={
        <>
          Read the thinking behind it:{" "}
          <a href="https://virtuslab.com/services/visdom">The AI-Native SDLC series</a>
        </>
      }
    />
  );
}
