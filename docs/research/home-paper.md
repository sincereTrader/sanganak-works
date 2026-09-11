# Home page — Paper design extraction contract

**Source:** Paper file `01KQVFKZJYTNR6PRR1GK2E1R44`, page `4-0` (`sanganak works`)
**Reference artboard:** `F8O-0` — `Sanganak Works — Home / Desktop`
**Extraction date:** 2026-09-11
**Scope:** Design extraction only. No app code or package configuration was changed.

## Acceptance boundary and node mapping

Implement the Home desktop artboard as a 1440 × 900 viewport:

- `F8P-0` Header: 1440 × 86.
- `F93-0` Home Hero: 1440 × 814, immediately below the header.
- `F94-0` left hero column: 922 × 814 (64%); right visual column `F9D-0`: 518 × 814 (36%).
- The replacement computer logo asset is **exactly node `FMQ-0`** (a standalone 512 × 512 SVG on the source page, not currently placed inside `F8O-0`). Use the exported asset `public/brand/computer-logo-fmq-0.svg` when replacing the computer artwork in the implementation.
- **Authoritative product decision — omit `F9B-0`.** Although the Paper source contains this 200 × 42 CTA frame and text node `F9C-0` (`ENTER THE MANIFESTO →`), the user directly decided that the homepage must not render it. This decision supersedes the source artboard; do not implement the CTA or interpret it as an image/logo node.
- Existing monitor artwork node `F9F-0` is a 360 × 488 rectangle at x≈16, y≈16 inside `F9E-0` (392 × 520). Its source image is also exported as `public/brand/computer-monitor-f9f-0.png` for comparison/fallback reference, but the requested replacement target is `FMQ-0`.

## Global visual system

- Canvas/background: `#050505`.
- Foreground/type: warm parchment `#F2E4C8`.
- Secondary surface: `#0C0C0C`.
- Borders: `#34312D`; dashed hero rule: `#5D574F`.
- Muted copy: source JSX uses `#C8C3BA` for the hero description; token muted is `#B8B6AD` and is used by the right caption.
- Teal primary: `#2DB7B0`.
- Orange secondary: `#F2A51A` (right caption URL).
- Coral accent: `#EF5B4C` (shadows); extracted monitor SVG uses its own coral `#E84D49` and orange `#EFA129` internal fills.
- Geometry is deliberately hard-edged: no radius is present in the Home JSX. Use `border-radius: 0`.
- Typography is anti-aliased with font synthesis disabled.
- Loaded source families include `Bricolage Grotesque`, `IBM Plex Mono`, and the broader file set; Home uses only the first two.

## Header (`F8P-0`)

Dimensions: 1440 × 86; background `#050505`; bottom border 1px solid `#34312D`; horizontal padding 48px; flex row, centered, space-between.

Left lockup (`F8Q-0`, 221 × 34): flex row, gap 12px, centered.

- Mark frame `F8R-0`: 38 × 34; teal `#2DB7B0`; parchment 2px border; coral shadow `3px 3px 0`; inner `SW` text is IBM Plex Mono, 13px, 700, line-height 16px, black `#050505`; vertical padding 7px, horizontal 9px.
- Wordmark `F8T-0`: `Sanganak Works`; Bricolage Grotesque, 22px, 700, line-height 24px, letter-spacing `-0.03em`, parchment.

Navigation (`F8U-0`, 343 × 18): flex row, gap 30px, centered. Each item (Saras, Masala Dew, Services, Careers) is IBM Plex Mono, 14px, 500, line-height 18px, parchment. Source item widths are approximately 42, 84, 68, and 59px respectively.

## Hero (`F93-0`)

Hero is a 1440 × 814 flex row, no gap, with the two columns below.

### Left content column (`F94-0`)

Width 64% (`round(64%, 1px)` in extracted JSX; source geometry reports 922px), height 814px, right border 1px solid `#34312D`, padding: 54px vertical and 48px horizontal. Flex column, space-between.

Top content group (`F95-0`): flex column, gap 24px.

- Headline `F97-0`: exact copy, preserving line breaks:

  ```text
  Frontier technology,
  for those who
  deserve it.
  ```

  Width 825px; Bricolage Grotesque, 92px, weight 800, line-height 88px, letter-spacing `-0.045em`, parchment `#F2E4C8`; white-space pre-wrap. This is a display lockup, not a fluid paragraph.
- Description `F98-0`: exact copy: `We build, write, and advise about tech and culture; from India for the world.` Width 580px; IBM Plex Mono, 18px, line-height 29px, `#C8C3BA`.

Bottom action row (`F99-0`): full available width (825px in source), top 1px dashed border `#5D574F`, padding-top 20px, flex row, centered, space-between.

- Signal label `F9A-0`: exact copy `01 / BUILD + WRITE + ADVISE`; IBM Plex Mono, 13px, line-height 18px, parchment.
- CTA frame **`F9B-0` (Paper source record only; omit from implementation):** the source uses teal `#2DB7B0`, padding 12px vertical / 16px horizontal, a parchment `#F2E4C8` shadow at 4px × 4px, and inner copy `ENTER THE MANIFESTO →`. Its recorded geometry is 200 × 42 with 168 × 18 text. The direct user decision above is authoritative, so none of this node should render on the homepage.

### Right visual column (`F9D-0`)

Width 36% (`round(36%, 1px)`; source geometry 518px), height 814px, background `#0C0C0C`, flex column, centered, gap 18px, padding 36px.

Monitor card (`F9E-0`): 392 × 520, flex-shrink 0, background `#F2E4C8`, padding 16px, rotation `1.2deg` around center, coral shadow `12px 12px 0`. Inner monitor image slot (`F9F-0`) is 360 × 488, background image cover, centered; source URL was `https://app.paper.design/file-assets/01KQVFKZJYTNR6PRR1GK2E1R44/0SB1NN4XDM0XFF2C4359PYRFRP.png`.

Replacement logo contract: use `computer-logo-fmq-0.svg`, preserving its source vector geometry and colors. The SVG source has `viewBox="0 0 2048 2048"`, intrinsic width/height 1024 × 1024, and Paper node geometry 512 × 512. It contains a black full-canvas background path plus the stylized computer/wordmark paths; do not simplify or redraw it. If used as a monitor replacement, fit it into the 360 × 488 image slot with an explicit object-fit policy and inspect crop/contain behavior because its source aspect ratio is square while the slot is portrait.

Caption row (`F9G-0`): 392 × 16, flex row, space-between.

- Left `F9H-0`: exact copy `COMPUTE / CULTURE`; IBM Plex Mono, 12px, line-height 16px, muted `#B8B6AD`.
- Right `F9I-0`: exact copy `sanganak.works`; IBM Plex Mono, 12px, line-height 16px, orange `#F2A51A`.

## Responsive implementation inferences

The source is a single desktop artboard; the following are implementation inferences, not additional Paper facts:

1. Preserve the 86px header and 48px desktop gutters at wide widths. At tablet/mobile widths, collapse navigation into a compact menu or hide secondary links while retaining the SW + wordmark lockup; do not allow nav wrapping to alter header height unexpectedly.
2. At widths below the 1024px desktop breakpoint, stack the hero columns vertically rather than squeezing the 92px headline and 392px monitor card side-by-side. Keep the left section first, then the visual section; remove or relocate the left-column right border to a horizontal divider.
3. Scale the headline with a clamp (desktop target 92px / 88px leading; mobile target should fit within viewport gutters) while preserving its three-line copy and intentional breaks where possible. Description should remain readable at 16–18px and become fluid width rather than fixed 580px.
4. Use a 390px mobile baseline from the source token set, 768px tablet, 1024px desktop, and 1440px wide. Suggested mobile horizontal padding is 24px (inference); retain 48px at desktop.
5. The right visual column’s 36px padding and 392px card require at least ~464px to breathe. Below that, reduce card width to `min(392px, 100%)`, preserve the 16px frame inset, and make the inner slot width fluid. Avoid cropping the replacement square SVG unless the visual direction explicitly calls for it.
6. Render only the signal label in the action row. Keep `F9B-0` and `ENTER THE MANIFESTO →` omitted at every width; do not confuse that intentionally omitted CTA node with the required `FMQ-0` asset.

## Asset manifest

| File | Source node | Format / observed dimensions | SHA-256 |
|---|---|---|---|
| `public/brand/computer-logo-fmq-0.svg` | `FMQ-0` | SVG; Paper node 512 × 512; viewBox 2048 × 2048 | `b5ee2e139de72a2af81bb9d7aa04c99d0dcde913469720fdb51f508ad08759f1` |
| `public/brand/computer-monitor-f9f-0.png` | `F9F-0` | PNG; exported file 370 × 495 RGBA (source slot 360 × 488) | `34235f6eedacec934210cfd83e7b46f5d18bf503bdd67e514bf85ef4f142ca40` |

The monitor PNG is retained only as the extracted source reference; implementation must use the exact `FMQ-0` replacement where the task calls for the computer logo. No app files or package manifests were modified.
