# Visual QA — Sanganak Works

**Date:** 2026-09-11  
**Target:** local Next.js site (`http://127.0.0.1:3000`)  
**Reference:** Paper file `01KQVFKZJYTNR6PRR1GK2E1R44`, page `4-0`  
**Mode:** report-only; no application code changed

## Scope and environment

The requested 1440px desktop and representative 390px mobile checks were attempted against the local dev server. The available Browser Use backend rejected loopback/private URLs, and the installed desktop browser had no addressable window in the isolated run, so pixel screenshots, live DOM console inspection, and click-level browser interaction could not be completed. This limitation is recorded explicitly rather than treating source inspection as visual proof.

Static/runtime evidence was collected from the local server, built route manifest, source, and existing test/build commands.

## Routes exercised at the server boundary

Each route returned HTTP 200 from the running local Next server:

- `/`
- `/services`
- `/manifesto`
- `/careers`
- `/careers/agent-engineer`
- `/careers/integration-engineer`
- `/careers/platform-engineer`
- `/careers/ai-engineer`
- `/careers/design-lead`

The production build enumerates the same nine application routes (plus `/_not-found`).

## Checks passed / evidence

- `npm run test`: **passed**, 3 test files / 7 tests.
- `npm run lint`: **passed**.
- `npm run build`: **passed**; Next.js generated all nine application routes.
- FMQ-0 homepage asset is used by `src/components/home-hero.tsx:33` as `/brand/computer-logo-fmq-0.svg` with `alt="Sanganak Works computer"`.
- FMQ-0 SHA-256 matches the Paper extraction manifest: `b5ee2e139de72a2af81bb9d7aa04c99d0dcde913469720fdb51f508ad08759f1`.
- The retained monitor reference hash also matches the manifest: `public/brand/computer-monitor-f9f-0.png` → `34235f6eedacec934210cfd83e7b46f5d18bf503bdd67e514bf85ef4f142ca40`.
- Source search found no `F9B`, `ENTER THE MANIFESTO`, or homepage CTA markup in `src/`; this satisfies the requested absence check for F9B-0.
- Global CSS enforces hard-edged Paper geometry (`border-radius: 0`), Paper palette, 86px desktop header, 64/36 hero columns, and responsive stacking below 1024px. Homepage mobile rules include 24px gutters, collapsed menu, and square fluid computer card.
- Editorial and Careers styles include mobile breakpoints below 1024px and 599px with stacked grids and fluid type.
- Accessibility source checks: primary nav has `aria-label`, menu button has `aria-controls`, `aria-expanded`, and changing `aria-label`; homepage heading has an explicit accessible label; image has non-empty alt text; visible focus styles exist for links/buttons.

## Prioritized findings

### P1 — Live browser visual/interaction evidence unavailable (confidence: confirmed environment limitation)

The browser automation backend blocked loopback/private URLs, while the desktop-browser fallback exposed no usable window. Therefore this report cannot honestly certify 1440px/390px rendered fidelity, browser console cleanliness, actual overflow, or click behavior. A coordinator rerun with a browser that can reach the local server is required before ship sign-off.

### P2 — Active-route state is not evident in the shared navigation (confidence: high from source)

`src/components/nav.tsx` renders the same four links on every route and does not set `aria-current` or an active class. The reference research calls for active-route treatment (Services and Careers, including nested Careers routes). Verify against Paper/live behavior; likely follow-up is to expose active state visually and semantically.

### P2 — Home action-row fidelity differs from the Paper extraction contract (confidence: high from source)

Paper extraction documents an `F9B-0` CTA frame, but the current homepage intentionally contains no CTA and only renders `01 / BUILD + WRITE + ADVISE` in `HomeHero`. This matches the task's explicit “absence of F9B-0 homepage CTA” acceptance, but differs from `docs/research/home-paper.md:16,68`; coordinator should resolve which contract is authoritative before making any visual-fidelity claim.

### P3 — Console errors and real mobile overflow remain unverified (confidence: unknown)

No browser console capture or computed `scrollWidth`/`clientWidth` measurement was possible. CSS has responsive safeguards (`overflow: clip` on editorial pages and `overflow: hidden` on Careers), but these are not substitutes for a real 390px browser pass.

## Screenshots

No durable screenshots were created. The browser backend produced only an unusable narrow desktop strip while attempting to reach the local app; it is intentionally not linked as visual evidence.

## Ship-readiness

Server routes, tests, lint, build, asset reference, and source-level accessibility affordances are healthy. **Not sign-off ready for visual QA** until a real browser can exercise every nav link/menu state at 1440px and 390px, capture console output, measure overflow, and compare screenshots to Paper page 4-0.
