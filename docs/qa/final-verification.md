# Final coordinator verification

Verified against Paper file `01KQVFKZJYTNR6PRR1GK2E1R44`, page `4-0`, after review fixes.

## Automated checks

- `npm test`: 5 files, 18 tests passed.
- `npm run lint`: passed with no diagnostics.
- `npm run build`: passed on Next.js 16.3.4; all nine public routes prerendered.
- `npm audit --omit=dev`: 0 vulnerabilities.
- `git diff --check`: passed.

## Browser checks

Exercised the production build through Orca's real embedded browser.

### Desktop (1440 × 900)

All routes rendered one H1, exposed `#main-content`, and had no horizontal overflow:

- `/` — 900px document height.
- `/services` — 1280px; Services active via `aria-current="page"`.
- `/manifesto` — 2280px.
- `/careers` — 1461px; Careers active.
- `/careers/agent-engineer` — 1738px; Careers active.
- `/careers/integration-engineer` — 1701px; Careers active.
- `/careers/platform-engineer` — 1701px; Careers active.
- `/careers/design-lead` — 1851px; Careers active.
- `/careers/ai-engineer` — 2996px; Careers active.

The homepage header measured exactly 86px. The headline initially wrapped its intended first line at 1440px; the coordinator corrected the desktop typography rule and reverified a three-line 92px lockup at `x=48`, `y=140`, with a 263.98px text box. The viewport and document were both 1440px wide and 900px high.

### Mobile (390 × 844)

All nine routes were checked at 390px. None produced horizontal overflow. Every H1 stayed inside the viewport, the compact menu control was visible, and Services/Careers retained their correct active states.

The mobile navigation was exercised interactively: closed `Open navigation menu` → open `Close navigation menu` with all four links exposed → click Services. The browser arrived at `/services`, the menu closed, and Services was announced as current.

### Required product decisions

- Homepage uses `/brand/computer-logo-fmq-0.svg` from Paper node `FMQ-0`.
- SHA-256: `b5ee2e139de72a2af81bb9d7aa04c99d0dcde913469720fdb51f508ad08759f1`.
- Homepage does not contain `F9B-0` or `ENTER THE MANIFESTO` CTA content.
- Saras links to `https://saras.works`; Masala Dew links to `https://masaladew.com`.
- Browser console error collection returned an empty list after the desktop and mobile route passes.
- Production responses include `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy` headers.

## Residual note

Orca's screenshot capture timed out because the browser tab was not foreground-visible, so the verification uses Paper-extracted dimensions/styles plus live DOM geometry, accessibility snapshots, interaction, overflow measurements, and console collection rather than a saved pixel screenshot. No functional or layout blocker remained in the tested viewport matrix.
