import { Nav } from "@/components/nav";
import { CareersList } from "./careers-list";
import styles from "./careers.module.css";

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
      <CareersList />
      </main>
    </>
  );
}
