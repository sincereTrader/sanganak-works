import type { Metadata } from "next";
import { ManifestoLink, RoleDetail, SarasLink } from "@/components/careers/role-detail";

export const metadata: Metadata = { title: "Platform Engineer — Sanganak Works" };

export default function PlatformEngineerPage() {
  return (
    <RoleDetail
      title="Platform Engineer"
      metadata={["REMOTE", "CONTRACT", "INFRASTRUCTURE"]}
      intro={
        <p>
          With <SarasLink />, we&apos;re building the accountability systems of the future for busy
          professionals, starting with standardized test prep. Behind every Saras instance is a
          platform that has to stay up, stay secure and scale. You&apos;d own that layer.
        </p>
      }
      about={[
        "Set up auth across the platform",
        "Manage CI/CD and cloud deployments",
        "Scale the agent infrastructure to 1000+ concurrent users with room to keep growing",
      ]}
      task="Spec out and set up a new VPS for managing 100 Saras instances in parallel, each with their own tools and automations."
      terms={[
        <><strong>Compensation:</strong> ₹30k/month, plus 5% rev share and token usage covered</>,
        <><strong>Work style:</strong> Remote-first, high-trust and outcome-driven</>,
      ]}
      criteria={[
        "Experience with cloud infrastructure, CI/CD pipelines and Linux servers",
        "A security mindset, especially around auth and multi-tenant systems",
        <>Above all, apply only if this resonates with you strongly: <ManifestoLink /> — be prepared to ask and answer questions!</>,
      ]}
      resumeNote="Applicants with compelling GitHub profiles or portfolios will be preferred over swanky resumes."
    />
  );
}
