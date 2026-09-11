import Link from "next/link";
import { Nav } from "@/components/nav";
import styles from "./careers.module.css";

const roles = [
  {
    title: "Agent Engineer (Intern)",
    href: "/careers/agent-engineer",
    blurb: "Set up agent environments and structure, and make the process repeatable.",
    meta: "REMOTE · 2-WEEK PROBATION + 1 MONTH · ₹20-30K + TOKEN USAGE →",
    theme: styles.cardDark,
  },
  {
    title: "Integration Engineer",
    href: "/careers/integration-engineer",
    blurb:
      "Build the GMAT Club Chrome extension, browser tools, native calendar integration and payment failsafes.",
    meta: "REMOTE · 2-WEEK PROBATION + 2 WEEKS · ₹30K + 5% REV SHARE →",
    theme: styles.cardAmber,
  },
  {
    title: "Platform Engineer",
    href: "/careers/platform-engineer",
    blurb:
      "Set up auth, manage CI/CD and cloud deployments to scale agent infrastructure to 1000+ concurrent users.",
    meta: "REMOTE · ₹30K + 5% REV SHARE · INFRASTRUCTURE →",
    theme: styles.cardTeal,
  },
  {
    title: "Lead, Design and Branding",
    href: "/careers/design-lead",
    blurb:
      "Own the brand and produce brand artifacts, video and media for Saras and Sanganak Works in an AI-native design environment.",
    meta: "REMOTE · LEAD · AI-NATIVE DESIGN →",
    theme: styles.cardCoral,
  },
] as const;

export function CareersIndex() {
  return (
    <>
      <Nav />
      <main className={styles.page} id="main-content">
      <section className={styles.indexIntro} aria-labelledby="careers-title">
        <div className={`${styles.container} ${styles.indexIntroInner}`}>
          <h1 className={styles.displayTitle} id="careers-title">
            Beyond the benchmarks
          </h1>
          <div className={styles.introCopy}>
            <p>
              We&apos;re building small, ambitious products that bring frontier technology to
              real people doing real things
            </p>
            <p>
              We&apos;re early, independent and remote-first. The work is exploratory by nature,
              grounded in outcomes, and shaped by people who care about the craft.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.rolesSection} aria-label="Open roles">
        <div className={`${styles.container} ${styles.rolesGrid}`}>
          {roles.map((role) => (
            <Link className={`${styles.roleCard} ${role.theme}`} href={role.href} key={role.href}>
              <h2 className={styles.cardTitle}>{role.title}</h2>
              <p className={styles.cardBlurb}>{role.blurb}</p>
              <span className={styles.cardMeta}>{role.meta}</span>
            </Link>
          ))}
        </div>
      </section>
      </main>
    </>
  );
}
