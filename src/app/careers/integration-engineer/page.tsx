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
          where they already are: their browser, their calendar and their payment methods.
        </p>
      }
      about={[
        "Build a GMAT Club Chrome extension and companion browser tools",
        "Set up native calendar integration",
        "Build payment failsafes so revenue never leaks silently",
      ]}
      task="Set up v1 of the GMAT Chrome extension as scoped."
      terms={[
        <><strong>Duration:</strong> 2-week probation, followed by 2 weeks</>,
        <><strong>Compensation:</strong> ₹30k/month, plus 5% rev share and token usage covered</>,
        <><strong>Work style:</strong> Remote-first, high-trust and outcome-driven</>,
      ]}
      criteria={[
        "Experience building browser extensions or client-side integrations",
        "Fluency with third-party APIs (calendars, payments) and the failure modes that come with them",
        <>Above all, apply only if this resonates with you strongly: <ManifestoLink /> — be prepared to ask and answer questions!</>,
      ]}
      resumeNote="Applicants with compelling GitHub profiles or portfolios will be preferred over swanky resumes."
    />
  );
}
