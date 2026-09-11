# Careers sitemap and implementation contract

## Sources and scope

This document reconciles the six Careers artboards on the Paper page **sanganak works** with the existing route and link behavior in `/Users/sinceretrader/Documents/code/karwaan-lander`.

| Paper artboard | Paper name | Size | Route |
|---|---|---:|---|
| `FC0-0` | Sanganak Works — Careers / Desktop | 1440 × 1460 | `/careers` |
| `FDB-0` | Sanganak Works — Agent Engineer / Desktop | 1440 × 1700 | `/careers/agent-engineer` |
| `FEO-0` | Sanganak Works — Integration Engineer / Desktop | 1440 × 1700 | `/careers/integration-engineer` |
| `FFY-0` | Sanganak Works — Platform Engineer / Desktop | 1440 × 1700 | `/careers/platform-engineer` |
| `FH8-0` | Sanganak Works — Design Lead / Desktop | 1440 × 1850 | `/careers/design-lead` |
| `FII-0` | Sanganak Works — AI Engineer Contract / Desktop | 1440 × 2920 | `/careers/ai-engineer` |

The route paths above are exact paths from the existing Next.js App Router files. Paper supplies the desktop composition and copy; the existing repo supplies the actual destination URLs because the Paper export contains styled frames/text rather than anchors.

## Route tree and page nesting

```text
/
├── /services
├── /manifesto
└── /careers
    ├── /careers/agent-engineer
    ├── /careers/integration-engineer
    ├── /careers/platform-engineer
    ├── /careers/design-lead
    └── /careers/ai-engineer
```

All Careers routes render inside the root Next.js layout and share the same site navigation. The intended page nesting is:

```text
Root layout
└── Careers page
    ├── Header / primary navigation
    ├── Careers index content OR role-detail content
    └── Role-detail apply footer (detail pages only)
```

### Important listing discrepancy

`/careers/ai-engineer` exists in the local repo and has a complete Paper detail artboard, but it is **not listed** among the four cards on either the Paper Careers index or the local Careers index. Preserve this only if deliberate; otherwise the implementation owner should add a fifth index entry. Do not invent a card blurb or card terms without a content decision.

## Shared header and navigation

### Desktop composition from Paper

- Height: `86px`; full width; black background `#050505`; bottom border `1px solid #34312D`.
- Horizontal padding: `48px`.
- Left lockup:
  - `SW` badge: teal `#2DB7B0`, cream `2px` border, coral `3px 3px` shadow.
  - Wordmark: `Sanganak Works`.
- Right navigation, in this order: `Saras`, `Masala Dew`, `Services`, `Careers`.
- Careers is the active section on the index and every nested Careers route: teal and bold.

### Exact destinations from the local repo

| Element | Destination | Behavior |
|---|---|---|
| `SW` + `Sanganak Works` lockup | `/` | Internal home link |
| `Saras` | `https://saras.works` | External URL; the current nav uses a plain anchor and does not force a new tab |
| `Masala Dew` | `https://masaladew.com` | External URL; the current nav uses a plain anchor and does not force a new tab |
| `Services` | `/services` | Internal route |
| `Careers` | `/careers` | Internal route; active for `/careers` and every `/careers/*` path |

### Existing responsive behavior to retain or translate

The local nav is fixed at the top (`fixed top-0 inset-x-0`) and the content compensates with top padding. At the Tailwind `sm` breakpoint:

- `< 640px`: hide the horizontal nav, show theme toggle and menu button; expand links in a stacked panel below the header.
- `≥ 640px`: show the inline nav and theme toggle; hide the menu button.
- Mobile lockup uses a `32px` mark, desktop a `36px` mark.
- Mobile menu items use a left border for the active route; desktop uses an underline treatment.
- Active matching is exact or prefix-based, so every role detail keeps Careers active.

The Paper design does not show a theme toggle, hamburger, or mobile header. If the new implementation is intended to match Paper rather than preserve the current shell, keep the responsive interaction model but restyle its controls to the Paper token system.

## Careers index — `/careers`

### Page structure

```text
Header (86px)
Careers Intro (410px)
├── H1
└── Two-paragraph introduction
Open Roles (964px)
├── Row 1: Agent Engineer | Integration Engineer
└── Row 2: Platform Engineer | Lead, Design and Branding
```

There is no separate footer in the Paper index artboard.

### Exact intro copy

**H1**

> Beyond the benchmarks

**Paragraph 1**

> We're building small, ambitious products that bring frontier technology to real people doing real things

**Paragraph 2**

> We're early, independent and remote-first. The work is exploratory by nature, grounded in outcomes, and shaped by people who care about the craft.

The local page includes the additional visible section heading `Open roles`; Paper names the section at the layer level but does not render that heading. Treat this as a deliberate implementation decision: add it for semantic clarity if desired, but it is not visible in the approved desktop composition.

### Exact role cards and destinations

#### Agent Engineer (Intern)

- Destination: `/careers/agent-engineer`
- Blurb: `Set up agent environments and structure, and make the process repeatable.`
- Meta line: `REMOTE · 2-WEEK PROBATION + 1 MONTH · ₹20-30K + TOKEN USAGE →`
- Surface: near-black `#0C0C0C`; cream border; teal shadow; cream title; teal meta.

#### Integration Engineer

- Destination: `/careers/integration-engineer`
- Blurb: `Build the GMAT Club Chrome extension, browser tools, native calendar integration and payment failsafes.`
- Meta line: `REMOTE · 2-WEEK PROBATION + 2 WEEKS · ₹30K + 5% REV SHARE →`
- Surface: amber `#F2A51A`; cream border; coral shadow; black text.

#### Platform Engineer

- Destination: `/careers/platform-engineer`
- Blurb: `Set up auth, manage CI/CD and cloud deployments to scale agent infrastructure to 1000+ concurrent users.`
- Meta line: `REMOTE · ₹30K + 5% REV SHARE · INFRASTRUCTURE →`
- Surface: teal `#2DB7B0`; cream border and shadow; black text.

#### Lead, Design and Branding

- Destination: `/careers/design-lead`
- Blurb: `Own the brand and produce brand artifacts, video and media for Saras and Sanganak Works in an AI-native design environment.`
- Meta line: `REMOTE · LEAD · AI-NATIVE DESIGN →`
- Surface: coral `#EF5B4C`; cream border; amber shadow; black text.

## Shared role-detail shell

The four compact role artboards use this desktop stack:

```text
Header (86px)
Role Hero (430px)
├── Title + three metadata chips (left)
└── Intro paragraph (right)
Role Details
├── Left column
│   ├── About the role card
│   └── First task card, when present
└── Right column
    ├── Terms card
    └── What we're looking for card
Apply Footer (214px)
```

`AI Engineer (Contract)` deliberately uses a longer editorial stack described in its own section.

### Shared footer copy and destination

- Left text: `SANGANAK WORKS / CAREERS / INDIA ↔ ANYWHERE`
- CTA: `APPLY VIA EMAIL →`
- Destination: `mailto:contact@sanganak.works`
- Visual treatment: black `#050505` full-width band, muted left label, coral CTA with amber offset shadow.

Paper does not store the `mailto:` destination. It is taken from every local role file, where `APPLY_URL` is exactly `mailto:contact@sanganak.works`.

### Shared inline destinations in role copy

- Linked product name `Saras` → `https://saras.works`, opening a new tab in the existing detail-page implementation.
- Linked phrase `our manifesto` → `/manifesto`.

## Agent Engineer (Intern) — `/careers/agent-engineer`

### Metadata

- `REMOTE`
- `INTERNSHIP`
- `2-WEEK PROBATION`

### Intro

> With Saras, we're building the accountability systems of the future for busy professionals, starting with standardized test prep. You'd work on the operational core: setting up agent environments and structure so that spinning up a new agent is a repeatable process, not an artisanal one.

### About the role

- Set up agent environments, configurations and structure for new Saras instances
- Turn one-off setup work into documented, repeatable pipelines
- Work closely with the founder on daily operations

### First task

> Set up the coaching bot.

### Terms

- **Duration:** 2-week probation, followed by 1 month
- **Compensation:** ₹20-30k/month plus token usage covered
- **Work style:** Remote-first, high-trust and outcome-driven

### What we're looking for

- Comfort working with autonomous AI agents; exposure to Hermes/OpenClaw frameworks is a strong plus
- Systems thinking: you see repeatable patterns where others see manual tasks
- Above all, apply only if this resonates with you strongly: our manifesto — be prepared to ask and answer questions!

> Applicants with compelling GitHub profiles or portfolios will be preferred over swanky resumes.

## Integration Engineer — `/careers/integration-engineer`

### Metadata

- `REMOTE`
- `CONTRACT`
- `2-WEEK PROBATION`

### Intro

> With Saras, we're building the accountability systems of the future for busy professionals, starting with standardized test prep. This role is about meeting students where they already are: their browser, their calendar and their payment methods.

### About the role

- Build a GMAT Club Chrome extension and companion browser tools
- Set up native calendar integration
- Build payment failsafes so revenue never leaks silently

### First task

> Set up v1 of the GMAT Chrome extension as scoped.

### Terms

- **Duration:** 2-week probation, followed by 2 weeks
- **Compensation:** ₹30k/month, plus 5% rev share and token usage covered
- **Work style:** Remote-first, high-trust and outcome-driven

### What we're looking for

- Experience building browser extensions or client-side integrations
- Fluency with third-party APIs (calendars, payments) and the failure modes that come with them
- Above all, apply only if this resonates with you strongly: our manifesto — be prepared to ask and answer questions!

> Applicants with compelling GitHub profiles or portfolios will be preferred over swanky resumes.

## Platform Engineer — `/careers/platform-engineer`

### Metadata

- `REMOTE`
- `CONTRACT`
- `INFRASTRUCTURE`

### Intro

> With Saras, we're building the accountability systems of the future for busy professionals, starting with standardized test prep. Behind every Saras instance is a platform that has to stay up, stay secure and scale. You'd own that layer.

### About the role

- Set up auth across the platform
- Manage CI/CD and cloud deployments
- Scale the agent infrastructure to 1000+ concurrent users with room to keep growing

### First task

> Spec out and set up a new VPS for managing 100 Saras instances in parallel, each with their own tools and automations.

### Terms

- **Compensation:** ₹30k/month, plus 5% rev share and token usage covered
- **Work style:** Remote-first, high-trust and outcome-driven

### What we're looking for

- Experience with cloud infrastructure, CI/CD pipelines and Linux servers
- A security mindset, especially around auth and multi-tenant systems
- Above all, apply only if this resonates with you strongly: our manifesto — be prepared to ask and answer questions!

> Applicants with compelling GitHub profiles or portfolios will be preferred over swanky resumes.

## Lead, Design and Branding — `/careers/design-lead`

### Metadata

- `REMOTE`
- `LEAD`
- `AI-NATIVE DESIGN`

### Intro

> With Saras, we're building the accountability systems of the future for busy professionals. Design is not decoration here; it's how a product like Saras earns trust. You'd own that: the brand, its artifacts, and the way it shows up across media and product surfaces.

### About the role

- Own the brand and produce brand artifacts for Sanganak Works and Saras
- Produce video artifacts for media and product demonstration purposes
- Work fluently with AI-native design tools like Midjourney, and expect to live in an AI-native environment generally
- Understand interaction patterns and user journeys well enough to make design decisions that hold up in product, though the core mandate is brand

There is no First task card on this page.

### Terms

- **Compensation:** Open for discussion. The role comes with meaningful equity for sure; we'll shape the cash component together with the right person
- **Work style:** Remote-first, high-trust and outcome-driven

### What we're looking for

- A portfolio or demonstrated work that shows real AI-native capacity, not just tool familiarity
- Experience producing video or motion work for media and demonstration
- An understanding of interaction patterns and user journeys, so brand work and product work stay coherent
- Good to have: an ear for Indian indie music and a feel for the modern Indian aesthetic, plus eclectic taste in movies and books
- Above all, apply only if this resonates with you strongly: our manifesto — be prepared to ask and answer questions!

> Applicants with compelling portfolios will be preferred over swanky resumes; for this role the portfolio is the resume.

## AI Engineer (Contract) — `/careers/ai-engineer`

### Page structure

```text
Header (86px)
AI Role Hero (700px)
├── Title + three metadata chips (left)
└── Three-paragraph intro (right)
AI Role Scope (800px)
├── About the role (left)
└── The stack / open-ended + callout (right)
Contract Terms (620px)
├── Editorial heading (left)
└── Terms + renegotiation note (right)
AI Role Criteria (520px)
├── Editorial heading (left)
└── Intro + criteria + resume note (right)
Apply Footer (194px)
```

### Metadata

- `REMOTE`
- `3 MONTHS`
- `2+ YEARS`

The local page currently renders the second chip as `Contract · 3 months`, while Paper renders `3 MONTHS`. Match Paper unless product semantics require the contract label to remain explicit.

### Intro

> With Saras, we're building the accountability systems of the future for busy professionals. We're starting out by solving standardized test prep in a way that creates real outcomes for real users, beyond the benchmarks, with ambitions to make a huge dent in this $120B+ market.

> What we build through Saras feeds forward towards our even larger ambitions at Sanganak Works: to bring frontier technology to an exciting space where it can produce meaningful outcomes beyond benchmarks. We're independent, bootstrapped, remote-first but mission-oriented.

> The role involves dealing with a new class of software altogether, which is 80% configuration, 15% coding with agents and 5% tasteful intuition about systems. Which is why you'd be expected to learn quickly, make mistakes and have a fun time working on important problem statements that matter to real people doing real things. Hermes, Codex and the rest of the stack are your co-workers; be ready to build the way engineering will get done in the future.

### About the role

- Own and evolve the platform that Saras runs on, custom-built with open source components. Make onboarding repeatable, and automate as much of the work as possible. By eliminating the recurring work over time, you create room for the higher-leverage parts of the charter
- Build messaging gateways that help Saras scale across platforms while preserving continuity. Saras lives on Telegram today, with WhatsApp and iMessage on the roadmap
- Build the systems around the agent: conversational intake, personalized study plans, routines, payments and integrations with proprietary 3P platforms
- Share your learnings through social channels and, where it makes sense, make open source contributions to high-profile projects. Build career capital and exemplify how to build outcome-driven agents

### The stack / open-ended

> The stack is intentionally open-ended, but you'll work with autonomous AI agents, multi-tenant messaging, Docker, cron-driven automation, cloud deployment and agent frameworks in the Hermes/OpenClaw lineage. You'll also own the operational layer: per-profile logging, memory-integrity checks and gateway health. If you can reason about self-running agents and production cloud systems, you can pick up the specifics on the job.

**Callout**

> This is not a research-only or pure backend role. You'll configure agents, write the code and docs, make product calls, and own decisions from day one.

### Contract terms

**Editorial heading:**

> Three months.  
> Real ownership.

- **Duration:** 3 months initial, with option to extend to 6 months by mutual agreement
- **Work style:** Remote-first, with a sustainable rhythm that protects working hours, leaves room for mentorship, and makes wellness part of the way we work
- **Fixed component:** ₹50k/month
- **Profit share:** 10% of Saras's gross profit, paid at the end of the contract term, with no ceiling
- **Tooling:** All AI tools and subscriptions, fully expensed
- **What could come next:** If things work out between us and the business keeps booming, the role could convert to a founding engineer role with meaningful equity

**Renegotiation note**

> After the 3-month period, we're open to renegotiate the terms of the contract subject to product trajectory and work performance.

### What we're looking for

> Expecting the following at a minimum, with some exceptions for stellar profiles:

- 2+ years of experience working on production-grade systems
- 1+ years of experience building/contributing to AI projects; exposure to OpenClaw/Hermes frameworks is a strong plus
- Fluency with concepts of agent memory, self-continuing loops and agent skills
- Above all, apply only if this resonates with you strongly: our manifesto — be prepared to ask and answer questions!

> Applicants with compelling GitHub profiles or portfolios will be preferred over swanky resumes.

## Responsive implementation guidance

Paper provides only 1440px desktop artboards. The following transformations preserve content order, hierarchy, and link behavior without inventing mobile-only copy.

### Breakpoints and containers

Use the Paper token breakpoints as the implementation contract:

- Mobile: up to `390px`
- Tablet: from `768px`
- Desktop: from `1024px`
- Wide: `1440px`

Use a wide content cap of `1344px` on desktop, matching the 48px gutters at 1440px. Use the `680px` reading container for long single-column prose and `960px` where a wider content block is needed.

### Header

- Desktop (`≥1024px`): preserve the 86px bar, 48px side gutters, lockup left, and four inline destinations right.
- Tablet: reduce side gutters to 24–32px and gaps between links; keep the full nav only while it fits without wrapping.
- Mobile: use the existing collapsed-menu pattern. Keep the logo/wordmark on one line, expose the menu via a labeled button with `aria-expanded`, and render links in the same order. Keep Careers active for every nested role path.
- Fixed vs static: the current repo uses a fixed header; Paper lays out an ordinary top section. Either is viable, but if fixed, every route must offset content by the computed header height and the expanded menu must not cover page content.

### Careers index

- Desktop: 2 × 2 card grid with 20–22px gaps; preserve each card's distinct surface/shadow pairing.
- Tablet: two columns can remain if titles and meta lines fit; otherwise switch before collision rather than shrinking type.
- Mobile: one card per row in the same order: Agent Engineer, Integration Engineer, Platform Engineer, Lead, Design and Branding.
- Do not enforce Paper's fixed `365px` card height on mobile. Use content-driven height and preserve at least 24px between body copy and the meta/action line.
- Allow the meta line to wrap naturally or render its three concepts as accessible chips; do not reduce it below 12px.
- Stack intro heading above both intro paragraphs. Keep the heading large but clamp responsively (for example, `clamp(3rem, 9vw, 6rem)`) so `Beyond the benchmarks` does not clip.

### Compact role detail pages

- Desktop: retain the hero's left title/chips and right intro; retain the 50/50 details columns.
- Tablet/mobile: stack in document order: title → chips → intro → About the role → First task (if present) → Terms → What we're looking for → apply footer.
- Cards should use content-driven height. Do not carry the desktop section's fixed 970/1120px height into responsive layouts.
- Use `clamp()` for the role title, preserving the two-line Agent Engineer title and allowing long Design title to wrap without forced breaks.
- Metadata chips must wrap with consistent gaps and retain their uppercase labels.
- Preserve the visual distinction between the About, First task, Terms, and Criteria surfaces, but keep shadows compact enough that they do not create horizontal overflow.

### AI Engineer detail

- Desktop: keep the explicit five-section editorial rhythm from the 2920px artboard.
- Below desktop: every two-column section becomes one column in this order:
  1. Title and metadata
  2. Three intro paragraphs
  3. About the role
  4. The stack / open-ended
  5. Callout
  6. `Three months. Real ownership.`
  7. Contract terms and renegotiation note
  8. What we're looking for and criteria
  9. Apply footer
- Do not compress the longer page into the compact role template; the prose hierarchy and dedicated terms section are intentional.
- Keep body text at 15–16px minimum with roughly 1.6 line height; prioritize readability over matching fixed desktop heights.

### Footer and actions

- Desktop: left label and right CTA on one row.
- Mobile: stack label above a full-width or intrinsic-width CTA, left aligned; keep at least 24px between them.
- Make the full CTA surface an anchor to `mailto:contact@sanganak.works`, not only the inner text.
- Give every role page one primary email CTA; do not duplicate it at intermediate breakpoints.

### Accessibility and semantics

- One `h1` per page; use `h2` for About, First task, Terms, stack, and criteria sections.
- Render role-card titles as headings inside links; make the full card link target available to keyboard users with visible focus treatment.
- Preserve bullets as semantic lists rather than line-break-delimited text.
- External product links should clearly indicate their behavior; if opening a new tab, retain `rel="noopener noreferrer"`.
- Theme and menu controls need accessible names. The Careers active state should use `aria-current="page"` on the index and nested routes.
- Offset shadows and color changes cannot be the only hover/focus signal; add visible outline or underline states.

## Paper visual tokens relevant to Careers

- Background: `#050505`
- Foreground/cream: `#F2E4C8`
- Surface: `#0C0C0C`
- Light surface: `#F8EED8`
- Border: `#34312D`
- Muted: `#B8B6AD`
- Primary teal: `#2DB7B0`
- Secondary amber: `#F2A51A`
- Accent coral: `#EF5B4C`
- Display family: `Bricolage Grotesque`
- UI/body family: `IBM Plex Mono`

The local repo currently uses a separate cream/orange light/dark token set and Roboto Mono. Implementing the Paper direction therefore requires an explicit visual-system migration rather than only rearranging existing Careers JSX. Keep that migration out of this research task; this file records the target.
