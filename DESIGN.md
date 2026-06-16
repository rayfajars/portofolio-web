---
name: Ray Fajar Salinggih Portfolio
description: Technical editorial portfolio — deep indigo authority on warm bone surfaces
colors:
  indigo-deep: "#1B213B"
  indigo-mid: "#252D4A"
  indigo-ink: "#141828"
  bone-base: "#F5F2E9"
  bone-light: "#FAF8F3"
  bone-muted: "#EBE6D9"
  ink-muted: "#6B7280"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  pill: "9999px"
spacing:
  section-y: "80px"
  container-x: "32px"
  card-padding: "20px"
components:
  button-primary:
    backgroundColor: "{colors.indigo-deep}"
    textColor: "{colors.bone-base}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "{colors.indigo-mid}"
    textColor: "{colors.bone-base}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.indigo-deep}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  card-default:
    backgroundColor: "{colors.bone-light}"
    textColor: "{colors.indigo-deep}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
---

# Design System: Ray Fajar Salinggih Portfolio

## 1. Overview

**Creative North Star: "The Midnight Draft"**

This system treats the portfolio as a working draft under desk lamp light: deep indigo ink on warm bone paper, serif headlines with technical precision underneath. Boldness comes from contrast and structure — not spectacle. The site reads like an editorial developer portfolio where every spacing decision and transition proves frontend craft.

The palette rejects warm-neutral AI defaults in naming and intent: bone surfaces carry a cool indigo tint, not generic cream. Motion and hover lift do the work that decorative effects would otherwise attempt. PRODUCT.md's anti-reference holds: no glassmorphism, gradient text, or gratuitous animation.

**Key Characteristics:**

- Deep indigo + warm bone — ink-on-paper authority with cool undertone
- Playfair Display display / Inter body — editorial headline, technical body
- Structural elevation — flat surfaces at rest; shadow-card on interactive hover
- Pill CTAs, 12–16px container corners — technical-precise, not over-rounded
- Section rhythm via tonal shifts (`bg-cream`, `bg-cream-dark/50`) instead of nested cards

## 2. Colors: The Deep Indigo Palette

A committed two-tone system: indigo carries voice and interaction; bone carries reading surfaces. Accent color is the navy itself — no third hue.

### Primary

- **Deep Indigo** (#1B213B / oklch(22% 0.04 264)): Primary text, button fills, timeline markers, badge backgrounds. The authoritative ink of the system.
- **Indigo Mid** (#252D4A / oklch(26% 0.04 264)): Hover state for primary buttons and interactive navy surfaces.

### Secondary

- **Indigo Ink** (#141828 / oklch(17% 0.03 264)): Deepest shade for emphasis or future dark-surface experiments. Reserved, not default.

### Neutral

- **Warm Bone** (#F5F2E9 / oklch(96% 0.012 95)): Default page background. Cool-tinted warm neutral — paper, not cream.
- **Bone Light** (#FAF8F3 / oklch(98% 0.008 95)): Card and elevated surface background.
- **Bone Muted** (#EBE6D9 / oklch(92% 0.015 95)): Alternate section background, secondary button fill.
- **Ink Muted** (navy at 50–70% opacity): Supporting text, metadata, footer copy. Never below 4.5:1 on bone for body-sized text.

### Named Rules

**The Two-Ink Rule.** Only indigo and bone (plus opacity steps) appear on any screen. Skill brand colors stay inside icon tiles only — never as UI chrome.

**The Contrast Rule.** Body text on bone must hit WCAG 2.1 AAA (7:1). Muted copy at navy/70% is the floor for paragraph text; navy/50% is metadata only.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif)
**Body Font:** Inter (with ui-sans-serif, system-ui, sans-serif)

**Character:** Editorial authority in headlines, engineering clarity in body. The pairing signals "crafts interfaces" without shouting — serif for presence, sans for readability.

### Hierarchy

- **Display** (700, clamp(3rem, 8vw, 6rem), line-height 1.05, letter-spacing -0.03em): Hero name only. Italic on first name for editorial emphasis. Max ceiling 6rem.
- **Headline** (700, clamp(2.25rem, 5vw, 3rem), line-height 1.1): Section titles (`About Me`, `Featured Work`). Uses `.heading-serif` class.
- **Title** (700, 1.25rem, line-height 1.3): Job titles, card titles, education degree names.
- **Body** (400, 1.125rem, line-height 1.625): Paragraphs and descriptions. Max width 65–75ch. Color navy/70% minimum for long prose.
- **Label** (600, 0.875rem, letter-spacing 0.08em, uppercase): Skill category headers, optional section kickers. Use sparingly — one per section maximum.

### Named Rules

**The Display Floor Rule.** Display letter-spacing never goes below -0.04em. Tighter tracking makes serif letters touch and reads cramped, not designed.

**The One Kicker Rule.** At most one uppercase tracked label per page section. Repeated eyebrow kickers on every section is AI grammar — avoid.

## 4. Elevation

Structural elevation: surfaces are flat at rest. Depth appears as a response to interaction — hover on cards, buttons, and carousel controls earns `shadow-card`. Section depth uses tonal layering (bone → bone-muted) rather than persistent shadows.

### Shadow Vocabulary

- **Soft** (`box-shadow: 0 4px 24px rgba(27, 33, 59, 0.08)`): Default button shadow at rest. Ambient, low blur.
- **Card** (`box-shadow: 0 8px 32px rgba(27, 33, 59, 0.12)`): Interactive hover state — project cards, carousel arrows, primary button hover. Structural, not decorative.

### Named Rules

**The Flat-By-Default Rule.** No element ships with both a 1px border and a wide soft shadow. Pick one depth signal: border tint OR shadow, never both as decoration.

**The Motion-Over-Shadow Rule.** Prefer `translateY(-4px)` and opacity transitions for feedback. Shadows confirm elevation; motion carries the interaction.

## 5. Components

### Buttons

- **Shape:** Full pill (`border-radius: 9999px`). Technical-precise — pills reserved for actions, not containers.
- **Primary:** Deep indigo fill, bone text, soft shadow at rest. Hover: indigo-mid fill + card shadow. Height 48px at `lg` size.
- **Outline:** 2px border at navy/20%, transparent fill. Hover: navy/5% tint. No shadow at rest.
- **Secondary / Light:** Bone-muted or bone fill for use on navy sections.
- **Focus:** 2px ring at navy/30%. Visible keyboard focus required (WCAG AAA).

### Cards / Containers

- **Corner Style:** 16px (`rounded-lg` / `rounded-xl` target). Project and education cards currently at 24px — tighten toward 12–16px in future passes.
- **Background:** Bone-light fill on bone or bone-muted sections.
- **Shadow Strategy:** Flat at rest; `shadow-card` + `-translate-y-1` on hover for project cards.
- **Border:** 1px at navy/10%. Single signal — no paired wide shadow.
- **Internal Padding:** 20px (`p-5`).

### Chips / Tags

- **Project badge:** Pill, 10px uppercase, indigo fill, bone text. Top-right on card image.
- **Tech tags:** 10px pill, navy/5% background, navy/60% text. Max 3 visible per card.

### Navigation

- **Header:** Sticky, bone/90% with backdrop-blur, 1px bottom border navy/5%.
- **Logo:** Serif initials + period. 2xl bold navy.
- **Links:** 14px medium, navy/70% default, navy on hover. No underline.
- **Mobile:** Slide-down panel, 200ms ease-out transition. Full-width CTA at bottom.

### Timeline (Experience)

- **Style:** Left border 2px navy/15%, circular navy marker with bone border ring.
- **Tabs:** Underline active state (2px indigo bottom border). Count in smaller muted text.

### Skill Tiles

- **Shape:** 12px radius (`rounded-xl`), border navy/10%, bone-light fill.
- **Icon well:** 36px square, white fill, 8px radius, brand icon centered.
- **Hover:** Border navy/20% + soft shadow. No lift.

### Project Card (Signature)

- **Image:** 16:10 aspect, scale 1.05 on group hover (500ms).
- **Overlay:** Navy/70% scrim on hover with "View Details" CTA text.
- **Carousel controls:** 44px circle, bone fill, card shadow, border navy/10%.

## 6. Do's and Don'ts

### Do:

- **Do** use deep indigo on warm bone for all primary UI — the two-ink system is the brand.
- **Do** lead with Playfair Display at display scale for hero and section headlines; Inter for everything else.
- **Do** keep surfaces flat at rest and apply `shadow-card` only on hover/focus for interactive elements.
- **Do** use motion (`translateY`, opacity, 300ms ease-out) as the primary interaction feedback.
- **Do** maintain WCAG 2.1 AAA contrast — bump muted text toward ink when in doubt.
- **Do** alternate section backgrounds with tonal shifts (`bg-cream` / `bg-cream-dark/50`) for rhythm without nested cards.

### Don't:

- **Don't** ship over-designed, flashy portfolios: heavy gratuitous animation, glassmorphism, gradient text, or decorative effects that obscure the work (per PRODUCT.md).
- **Don't** pair `border: 1px solid` with wide soft shadows on the same element — the ghost-card pattern is prohibited.
- **Don't** use `background-clip: text` gradient text for emphasis. Solid indigo, weight, or size only.
- **Don't** put uppercase tracked eyebrow labels above every section — one kicker per page maximum.
- **Don't** exceed 16px border-radius on cards and containers. Full pill is for buttons and tags only.
- **Don't** use side-stripe borders (`border-left` > 1px colored accent) on cards or list items.
- **Don't** gate content visibility on animation — all content must be visible by default for reduced-motion and SSR.
