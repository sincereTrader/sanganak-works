import type { Metadata } from "next";
import { ManifestoLink, RoleDetail, SarasLink } from "@/components/careers/role-detail";

export const metadata: Metadata = { title: "Integration Engineer — Sanganak Works" };

export default function IntegrationEngineerPage() {
  return (
    <RoleDetail
      title="Integration Engineer"
      product="Saras"
      metadata={["REMOTE", "CONTRACT", "2-WEEK PROBATION"]}
      intro={
        <p>
          With <SarasLink />, we&apos;re building the accountability systems of the future for busy
          professionals, starting with standardized test prep. This role is about meeting students
          where they already are, inside the tools and platforms they use every day.
        </p>
      }
      about={[
        "Own a broad range of third-party setups, from browser tooling to external APIs and services",
        "Bring Saras into the platforms students already use, without adding friction",
        "Harden every integration so nothing, data or revenue, ever fails silently",
      ]}
      task="Ship v1 of a scoped integration, end to end."
      terms={[
        <><strong>Duration:</strong> 2-week probation, followed by 2 weeks</>,
        <><strong>Compensation:</strong> ₹30k/month, plus 5% rev share and token usage covered</>,
        <><strong>Work style:</strong> Remote-first, high-trust and outcome-driven</>,
      ]}
      criteria={[
        "Experience building browser extensions or client-side integrations",
        "Fluency with third-party APIs and the failure modes that come with them",
        <>Above all, apply only if this resonates with you strongly: <ManifestoLink /> — be prepared to ask and answer questions!</>,
      ]}
      resumeNote="Applicants with compelling GitHub profiles or portfolios will be preferred over swanky resumes."
    />
  );
}
