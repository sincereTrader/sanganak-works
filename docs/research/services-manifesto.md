# Services + Manifesto implementation contract

> Design extraction only. Source: Paper file `01KQVFKZJYTNR6PRR1GK2E1R44`, page `4-0` (`sanganak works`), artboards `F9K-0` (Services / Desktop) and `FAP-0` (Manifesto / Desktop). No application code or package configuration was changed by this research pass.

## 1. Current implementation context

The local repo is `/Users/sinceretrader/Documents/code/karwaan-lander`, a Next.js 16 app using the App Router, Tailwind v4, `next-themes`, and a shared `Nav` component. The relevant routes already exist at:

- `src/app/services/page.tsx` → `/services`
- `src/app/manifesto/page.tsx` → `/manifesto`
- `src/components/nav.tsx` → shared site header/navigation
- `src/components/logomark.tsx` → shared mark
- `src/app/layout.tsx` → global font and metadata shell
- `src/app/globals.css` → current theme variables

The working tree already contains uncommitted changes in these files (including the two target pages, navigation, logo, layout, and package manifests). Treat those changes as pre-existing; implementation should preserve unrelated work and should not reset or overwrite it.

The current repo pages are narrow, centered, prose-first layouts with generic cards. The Paper target is a deliberate desktop art direction: full-width editorial sections, hard rectangular borders, offset shadows, large display type, monospace body copy, and color-blocked surfaces. The target should therefore be implemented as a redesign of the existing route shells, not as a small CSS tweak to the current `max-w-2xl` articles.

## 2. Paper file-level visual system

### Global tokens

Use existing Paper tokens where possible. The source token set is:

```text
--color-background: #050505       /* black chrome / dark sections */
--color-foreground: #F2E4C8       /* parchment text and page ground */
--color-surface: #0C0C0C
--color-surface-light: #F8EED8
--color-border: #34312D
--color-muted: #B8B6AD
--color-primary: #2DB7B0              /* turquoise */
--color-secondary: #F2A51A            /* amber */
--color-accent: #EF5B4C               /* coral */
--font-display: Bricolage Grotesque
--font-ui: IBM Plex Mono
```

Paper artboards use a parchment ground (`#F2E4C8`) with near-black (`#050505`) text or chrome. Services uses turquoise and amber offering panels with black borders and shadows; Manifesto uses a coral pull-quote band and a black closing body section. The style is editorial/playful-industrial rather than rounded SaaS: no gradients, no rounded cards, no pill tags, and no large soft shadows.

### Typography

- Display/heading: `Bricolage Grotesque`, weight 700–800, tight tracking (roughly `-0.04em` to `-0.055em`).
- UI/body: `IBM Plex Mono`, regular 400; labels may use 500–700.
- Services hero title: 92px / 86px line-height, 800 weight.
- Services offering title: 46px / 48px, 800.
- Services intro paragraph: 17px / 27px, 420px column.
- Services footer statement: 27px / 38px, 600 weight, 760px column.
- Manifesto hero title: 118px / 104px, 800; preserve the explicit line break after `just`.
- Manifesto body: 16px / 27px mono; final right-column body uses 15px / 25px.
- Manifesto pull quote: 54px / 60px, Bricolage 700, centered.
- Small metadata/nav: 13–14px / 18px mono.

Do not rely on the existing global Roboto Mono as a substitute for the Paper typography unless the implementation confirms the intended fonts cannot be loaded. The design depends materially on the contrast between Bricolage Grotesque display shapes and IBM Plex Mono body text. Add font loading only as part of the eventual implementation decision; this research artifact does not modify layout/config files.

### Shared header contract

Both pages have the same 86px header:

- Full width, black background, 1px bottom border `#34312D`.
- Horizontal padding: 48px at the 1440px desktop artboard.
- Left: mark block approximately 38×34, turquoise fill, 2px parchment border, coral `3px 3px` offset shadow; adjacent `Sanganak Works` in Bricolage, 22px / 24px, 700.
- Right nav: `Saras`, `Masala Dew`, `Services`, `Careers`; IBM Plex Mono 14px / 18px, 500, 30px gaps. Active route is turquoise and 700 weight (Services on `/services`; none on `/manifesto` in the source because Manifesto is not a nav item).
- No theme-toggle control appears in the Paper source header. The current repo `Nav` includes one; implementation must decide explicitly whether to remove/hide it for parity rather than letting it change the header geometry.
- Existing route links: Saras external `https://saras.works`, Masala Dew external `https://masaladew.com`, Services `/services`, Careers `/careers`.

Responsive behavior is not represented by these two desktop artboards. Preserve the same information architecture at smaller widths, but establish a separate mobile composition: stack two-column content, reduce display type, keep header usable, and prevent horizontal clipping. Do not infer desktop-only fixed heights for mobile.

## 3. `/services` contract (Paper artboard F9K-0, 1440×1280)

### Section order and geometry

The page is a single vertical flex column with fixed desktop sections totaling 1280px:

1. Header: 86px.
2. Services intro: 350px; parchment ground; 2px black bottom border.
3. Offerings: 520px; parchment ground; 48px inset on all sides; 24px gap between panels.
4. Services footer: 324px; black background.

The artboard itself is parchment (`#F2E4C8`) and clips overflow at its bounds. In production, content must remain accessible and should not be clipped if copy wraps; prefer content-driven height once responsive rules apply.

### Intro

A 350px full-width flex row, aligned to the bottom, with 48px padding:

- Left title block, width approximately 714px: `Reclaim your hours`.
- Right supporting copy, width exactly 420px: `Most AI advice is written for enterprises with AI budgets. We work with small teams that just want their hours back, and we only prescribe what we would run ourselves.`
- Title is black, display font, 92px / 86px, 800. Body is `#332F2A`, mono 17px / 27px.
- Keep large intentional empty space above the baseline; do not vertically center the title.

### Offerings

A row of two equal panels, each nominally 660px wide × 424px tall (the section has 48px top/bottom padding; panel height fills the content box). Each panel has a 2px black border, 30px internal padding, and `height: 100%`.

Panel 1 — turquoise (`#2DB7B0`):

- Title: `AI Workflow Audit`.
- Description: `A 45-minute structured walkthrough of how your team actually works. You get an effort-impact matrix, three to seven tool or agent prescriptions, and a four-day quick-start plan.`
- Footer label: `60 MINUTES · 5+ HRS/WEEK BACK OR IT'S FREE · FROM $500`.
- Black 8px × 8px offset shadow.

Panel 2 — amber (`#F2A51A`):

- Title: `Agent builds`.
- Description: `When the audit points at a workflow worth automating, we build the agent that runs it. One workflow, one agent, constrained and observable — no black boxes.`
- Footer label: `SCOPED PER PROJECT · MONTHLY RETAINERS · FROM $2K`.
- Coral 8px × 8px offset shadow (`#EF5B4C`).

Both panel titles are Bricolage 46px / 48px, 800; descriptions are mono 16px / 25px; title-to-description gap is 18px. Footer labels sit at the bottom via space-between and are mono 13px / 20px. Replace the current rounded cards and pill-shaped tags with this panel model; tags become one uppercase footer line per panel.

### Footer

324px black band, 48px padding, horizontal flex aligned center:

- Left statement width 760px, parchment `#F2E4C8`, Bricolage 27px / 38px, 600: `Every engagement starts with the audit. If it doesn't surface at least five hours a week for your team, the audit is free. Anything worth automating after that, we build.`
- Right contact stack aligned to the right: `WRITE TO US AT` in muted `#B8B6AD`, mono 14px / 20px; below it a coral rectangle with 12px vertical / 16px horizontal padding, amber 4px × 4px shadow, and black mono 14px label `contact@sanganak.works →`.
- Contact should remain a real `mailto:contact@sanganak.works` link with visible focus/hover treatment.

## 4. `/manifesto` contract (Paper artboard FAP-0, 1440×2280)

The page is a full-width editorial article, not the current centered `max-w-2xl` prose flow. Desktop section sequence:

1. Shared header: 86px.
2. Manifesto hero: 430px; parchment ground; 2px black bottom border.
3. Manifesto Body I: 980px; parchment ground; two columns.
4. Pull quote: 300px; coral ground; 2px black borders top and bottom.
5. Manifesto Body II: 484px; black ground.

Total: 2280px.

### Hero

- 48px padding; vertical `space-between`.
- Title is `You can just\ndo things.` with the explicit line break; black Bricolage 118px / 104px, 800, tight tracking `-0.055em`.
- Bottom metadata row spans the full width: left `INDIA / POST-AGI / INDEPENDENT`; right `READ TIME · 06 MIN`; muted brown `#5D574F`, mono 13px / 18px.
- Metadata is informational, not an interactive control.

### Body I

- 980px tall, 170px horizontal padding, 54px vertical padding, 84px column gap.
- Two columns, each approximately 508px wide; each is a vertical stack with 22px gaps.
- All text is dark brown `#211F1C`, mono 16px / 27px.

Left column, in order:

1. `You wake up and look at your X timeline. Your feed is riddled with news of labs — American, Chinese, Japanese, occasionally Indian — building amazing things and pushing your imagination of what's possible.`
2. `You get out of your house, ready for work, only to realize that the pothole in your road got even bigger due to the rain last night, the construction noises still persistent. The air still smells like shit and the people are hunched over their phones and lonely.`
3. `You pop open your phone, book a Rapido, head over to LinkedIn to hear people complain.`
4. Amber callout panel: 508px wide; amber fill, 2px black border, coral 6px × 6px shadow, 22px padding. Copy exactly:

   ```text
   They are still complaining:

   - About the back-breaking, mind-numbing ordeals they have to do everyday just so they can move 1% forward, while their smaller competitors are making laps around them.

   - About the very fact that they could've done from home (or their hometown) is the same thing they'll do after communting for an hour to the office, just with worse focus and temper.

   - About how they're threatened about losing their jobs due to AI, while they still can't now imagine doing their job without it.
   ```

   Preserve source spelling (`everyday`, `communting`, `can't now`) unless product/content review separately authorizes copy editing. Render line breaks intentionally rather than relying on browser whitespace collapsing.

Right column, in order:

1. `And yet almost every company talks about AI transformation, how engineers will be out of jobs over the next 12 months (you've been hearing this for 15 months straight), how big techs are pushing employees to burn more tokens to bake in “more AI” into their product.`
2. `After all this, you look up. Still the ugly dumping grounds, the musty smell, the honking during traffic, the dread of showing up to work and making up reasons why that AI feature is more important than serving real users.`

### Pull quote

- 300px coral band (`#EF5B4C`) with 2px black top and bottom borders; 150px horizontal / 40px vertical padding.
- Center a 1120px-wide text block: `How do they say everything has changed,\nwhen nothing around you has changed at all?`.
- Black Bricolage 54px / 60px, 700, centered, explicit line break.
- On mobile, the quote may wrap more lines, but must remain a visually dominant standalone band.

### Body II

- 484px black band, 170px horizontal / 48px vertical padding, 84px column gap; two 508px columns.
- Left copy is parchment `#F2E4C8`, mono 16px / 27px, 20px vertical gaps:
  1. `We attributed the reason to a divide — opening up quickly and dangerously. While AI enables only some agentic people to do life-changing work, nothing really changes for the anxious student, the overworked doctor, the unaware career consultant, for you.`
  2. `This divide is dangerous. It leads to decay and prevents India from becoming the land where people want to stay and make great things.`
  3. `While we cannot take on everything all at once, we're reimagining what it means to run a company in the post-AGI age, solving problems for the world from India.` (15px / 25px).
- Right copy is parchment mono 15px / 25px, 20px gaps:
  1. `We believe that win-win games can be created and everyone could benefit off them. We also believe that you can work on something meaningful, from a place and with people you like, and yet not burn yourself out in the process.`
  2. `We believe that if you have great ideas, then you have all the help in the world at your fingertips to go execute them.`
  3. Highlighted belief: `We believe that with the right intent, you can just do things.` in amber `#F2A51A`, Bricolage 25px / 32px, 700.
  4. `We envision this future for us, and for all the others who we build for.` in parchment.
  5. Contact link `contact@sanganak.works →` in turquoise `#2DB7B0`, mono 15px / 25px; real mailto link.

## 5. Sitemap, nesting, and route structure

The existing App Router is already the correct nesting boundary: each page is a route-level `page.tsx` under `src/app/<route>/`, rendered inside the root `src/app/layout.tsx`. Keep the shared `Nav` in `src/components/nav.tsx`; do not duplicate header markup inside either page.

Expected public sitemap for this contract:

```text
/                    Home (existing Hero)
/services            Services (target redesign)
/manifesto           Manifesto (target redesign; route remains available even if absent from nav)
/careers             Careers index (existing)
/careers/agent-engineer
/careers/ai-engineer
/careers/design-lead
/careers/integration-engineer
/careers/platform-engineer
```

External nav destinations remain `https://saras.works` and `https://masaladew.com`. The existing `Careers` subtree should not be nested under either target page. Page metadata should remain route-specific: `Services — Sanganak Works` with the workflow-advice description; `Manifesto — Sanganak Works` with `We believe that with the right intent, you can just do things.`.

## 6. Implementation acceptance criteria

### Shared

- [ ] Desktop render is 1440px-wide faithful to the two Paper artboards.
- [ ] Header is 86px with exact nav labels/order, mark treatment, spacing, and active Services state.
- [ ] Display/body font pairing is Bricolage Grotesque + IBM Plex Mono (or an explicitly documented equivalent).
- [ ] Parchment, black, turquoise, amber, and coral palette uses the Paper token values.
- [ ] Borders are hard 1–2px lines; shadows are small, offset, and color-specific; no rounded SaaS card treatment.
- [ ] Links have keyboard focus styling and preserve actual external/mailto destinations.
- [ ] Mobile layout stacks columns and avoids horizontal overflow; fixed desktop heights do not force clipping.

### Services

- [ ] Intro, two offering panels, and black contact footer appear in that order.
- [ ] Existing pill tags are replaced by uppercase panel footer lines.
- [ ] Panel copy, pricing, guarantee, and contact copy match the source exactly.
- [ ] Audit panel shadow is black; Agent builds shadow is coral; contact CTA shadow is amber.

### Manifesto

- [ ] Hero uses `You can just / do things.` rather than the current `A manifesto` heading.
- [ ] Body I uses two columns and the amber complaint callout.
- [ ] Pull quote is a separate coral full-width band with explicit two-line copy.
- [ ] Body II is black with the highlighted belief and turquoise contact link.
- [ ] Source wording and intentional punctuation/line breaks are preserved.

## 7. Verification notes from extraction

Paper `get_basic_info` reports 10 desktop artboards and the target dimensions above; all target fonts are loaded in the file token context. JSX extraction confirms the exact inline styles, copy, section heights, padding, gaps, border widths, and shadow offsets recorded here. Screenshots were captured for both artboards and visually checked: the desktop compositions show no apparent overlap or clipping at 1440px; the services offering cards and manifesto callout/pull-quote shadows intentionally extend a few pixels beyond their bordered surfaces but remain within the artboard.
