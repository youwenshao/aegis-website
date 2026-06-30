# AEGIS Marketing Page Style Guide

> **Project:** AEGIS Marketing Page Redesign  
> **Client:** KEEP, The Chinese University of Hong Kong  
> **Current Page:** https://keep.edu.hk/aegis/  
> **Direction:** KEEP-branded web marketing page inspired by Apple's Liquid Glass design principles

---

## 1. Design Intent

AEGIS should feel institutional, calm, and modern: a trusted KEEP product with a lighter, more spatial interface inspired by Apple's Liquid Glass system.

Use Liquid Glass as an **interaction and hierarchy principle**, not as decoration. Glass surfaces should float above content, support navigation or actions, and preserve focus on the page content underneath.

**Primary goal:** make AEGIS easier to understand and easier to demo, while giving the page a contemporary Apple-like sense of depth, translucency, and motion.

**Primary audience:** teachers, department leads, institutional decision-makers, and KEEP/CUHK stakeholders.

---

## 2. Brand Rules

Use **AEGIS** as the public-facing product name.

Use these product names carefully:

| Name | Use |
|------|-----|
| **AEGIS** | Public marketing name and hero headline |
| **CritiX** | Teacher-facing app name; mention only in tutorial or technical context |
| **RubriX** | AI engine name; mention only in deeper documentation |
| **EvalGuide** | Internal backend/code name; do not use in marketing copy |

**Hero copy:** keep AEGIS direct and simple. Avoid internal architecture language.

**Recommended tagline:**  
> Automated evaluation assistance at every level.

**Tone:** clear, useful, teacher-friendly, and institutionally credible. Say "AI grading" or "automated essay feedback" instead of "LLM inference pipeline."

---

## 3. Liquid Glass Principles

Apple's Liquid Glass guidance describes glass as a distinct top layer for navigation and controls. Apply that principle to the web page:

1. **Content comes first.** Text, screenshots, feature explanations, and tutorial steps must remain more important than the glass effect.
2. **Glass is a functional layer.** Use it for the header, CTAs, tabs, floating screenshot frames, tutorial navigation, and small overlays.
3. **Do not glass everything.** Avoid translucent feature cards across the whole page. Too much glass muddies hierarchy.
4. **Avoid glass on glass.** If an element sits on a glass surface, use solid text, icon fills, subtle borders, or vibrancy-like tinting rather than another blurred layer.
5. **Use one glass language.** Do not mix unrelated blur strengths, colors, and border styles. The page should feel like one coherent material system.
6. **Keep motion restrained.** Interactions may brighten, lift, or slightly scale. Avoid elastic or distracting motion on a marketing page.
7. **Design for fallbacks.** Reduced transparency, reduced motion, and high contrast modes must still produce a clean, readable page.

---

## 4. Visual System

### 4.1 Color

KEEP Teal remains the primary brand tint. Liquid Glass should soften and elevate the KEEP identity, not replace it.

| Token | Value | Use |
|------|-------|-----|
| `--keep-teal` | `#3BB4C0` | Primary CTA, active nav, icon tint, glass tint |
| `--keep-teal-dark` | `#2FA0AB` | CTA hover and active states |
| `--keep-teal-soft` | `#E0F4F8` | Page wash, section background, glass backplate tint |
| `--ink` | `#1A1A2E` | Headlines and high-emphasis text |
| `--text` | `#4A5568` | Body text |
| `--muted` | `#718096` | Captions and metadata |
| `--line` | `rgba(26, 26, 46, 0.12)` | Hairlines and glass edges |
| `--white` | `#FFFFFF` | Cards and fallback surfaces |
| `--footer` | `#2D2D2D` | Footer background |
| `--assessment-bg` | `#E8D5F0` | "Assessment" badge background |
| `--assessment-text` | `#7C3AED` | "Assessment" badge text |

Accent colors:

| Token | Value | Use |
|------|-------|-----|
| `--success` | `#16A34A` | Positive states and grade indicators |
| `--warning` | `#D97706` | Pending or caution states |
| `--danger` | `#DC2626` | Error states |
| `--ai-purple` | `#7C3AED` | AI-specific accent only |

**Rules:**

- Use KEEP Teal for primary actions.
- Use purple only for the "Assessment" badge or AI-specific highlights.
- Do not use AEGIS green for primary marketing CTAs.
- Do not place low-contrast teal text on translucent teal glass.

### 4.2 Typography

Use a modern system stack with Inter if available.

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

| Element | Desktop | Mobile | Weight |
|---------|---------|--------|--------|
| Hero H1 | `56px` | `40px` | 700 |
| Hero subtitle | `22px` | `18px` | 500 |
| Section H2 | `32px` | `26px` | 650 |
| Card H3 | `20px` | `18px` | 600 |
| Body | `16px` | `16px` | 400 |
| Label | `12px` | `12px` | 600 |

Use generous line height: `1.15` for large headlines, `1.45` for headings, and `1.6` for body copy.

### 4.3 Glass Material Tokens

Use glass only when content behind it can remain visually calm.

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.68);
  --glass-bg-strong: rgba(255, 255, 255, 0.82);
  --glass-border: rgba(255, 255, 255, 0.55);
  --glass-edge: rgba(26, 26, 46, 0.10);
  --glass-tint: rgba(59, 180, 192, 0.14);
  --glass-blur: 22px;
  --glass-shadow: 0 18px 50px rgba(26, 26, 46, 0.14);
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --max-width: 1200px;
}
```

Recommended glass surface:

```css
.glass {
  background:
    linear-gradient(135deg, rgba(255,255,255,0.78), rgba(255,255,255,0.52)),
    var(--glass-tint);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow), inset 0 1px 0 rgba(255,255,255,0.75);
  backdrop-filter: blur(var(--glass-blur)) saturate(150%);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(150%);
}
```

Fallback:

```css
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass {
    background: var(--glass-bg-strong);
  }
}

@media (prefers-reduced-transparency: reduce) {
  .glass {
    background: #FFFFFF;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```

---

## 5. Page Structure

### 5.1 Header

Use a sticky, translucent header that becomes slightly more opaque after scroll.

- KEEP logo on the left.
- Navigation centered or left-aligned depending on breakpoint.
- "Book a demo" as the primary CTA.
- Header glass should be subtle; it must not obscure page content while scrolling.

### 5.2 Hero

The hero should establish AEGIS quickly.

Required elements:

- Category badge: `Assessment`
- H1: `AEGIS`
- Subtitle: `Automated Grading`
- Short description based on the current KEEP page
- Primary CTA: `Book a demo`
- Secondary CTA: `Watch a quick tour`
- Product screenshot or interface collage in a floating glass frame

The screenshot frame may use the strongest glass treatment on the page. Keep surrounding copy on a solid or lightly tinted background for legibility.

### 5.3 Overview

Keep the four current feature pillars:

- Essay Grader
- Grammar Checker
- Summarizer
- Basic Statistics

Use simple white or very light cards. Do not make every feature card heavily glassed. A soft border, rounded corners, and a small teal icon are enough.

### 5.4 Integrations

VeriGuide integration remains a core story.

Position it as institutional workflow continuity:

> AEGIS works alongside VeriGuide's plagiarism detection workflow to support essay evaluation from originality checking to feedback and grading.

Use a glass panel only for the visual collage or CTA cluster, not for the entire section if it harms text contrast.

### 5.5 Tutorial / Documentation

This section should be practical and skimmable.

Recommended blocks:

- Start: what AEGIS does
- Upload: how teachers add essays
- Review: how AI feedback and grammar suggestions appear
- Grade: how rubrics and scores are presented
- Export: how results are saved or shared

Use screenshots generously. Each tutorial step should pair one screenshot with one clear action.

### 5.6 Footer

Match KEEP's dark footer structure. Do not apply Liquid Glass to the footer. The footer should provide contrast, closure, and institutional trust.

---

## 6. Component Rules

### Buttons

Primary buttons should be teal, not glass.

```css
.button-primary {
  background: var(--keep-teal);
  color: #FFFFFF;
  border-radius: 999px;
}

.button-primary:hover {
  background: var(--keep-teal-dark);
}
```

Use glass buttons only for secondary controls that float over screenshots, hero art, or media-rich panels.

### Cards

Use solid cards for reading-heavy content. Use glass cards for:

- Screenshot frames
- Floating stats
- Small CTA clusters
- Sticky in-page documentation navigation

Avoid paragraph text on transparent glass unless the background is dimmed or blurred enough to guarantee contrast.

### Icons

Use monochrome line icons by default. Tint with KEEP Teal only for emphasis or active state. Avoid multi-color icon sets that compete with the glass material.

### Motion

Allowed:

- Hover lift: `translateY(-2px)`
- Subtle scale on button press: `scale(0.98)`
- Header opacity change on scroll
- Smooth reveal for tutorial sections

Avoid:

- Bouncy glass blobs
- Large parallax shifts
- Constant shimmer
- Animations required to understand content

---

## 7. Accessibility

Liquid Glass-inspired UI must remain usable without glass.

Minimum requirements:

- Body text contrast should meet WCAG AA.
- Do not place essential text directly over busy screenshots.
- Provide solid fallbacks for unsupported `backdrop-filter`.
- Respect `prefers-reduced-motion`.
- Support reduced transparency with solid white or high-opacity surfaces.
- Keep focus states visible and not dependent on blur.
- Give every icon-only control an accessible label.
- Test the header and floating controls over light, dark, and image-heavy content.

Recommended reduced motion rule:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Do / Don't

| Do | Don't |
|----|-------|
| Lead with AEGIS as the product name | Put CritiX, RubriX, or EvalGuide in the hero |
| Use KEEP Teal for primary CTAs | Use green or purple as the main CTA color |
| Treat glass as a floating functional layer | Make every card translucent |
| Keep reading surfaces solid or near-solid | Put body copy on busy transparent backgrounds |
| Use one consistent glass material | Mix many blur, tint, and border styles |
| Use glass for header, tabs, overlays, screenshot frames | Stack glass surfaces on top of each other |
| Test reduced transparency and reduced motion | Depend on blur or animation for comprehension |
| Preserve KEEP footer structure | Glassmorph the footer |

---

## 9. Implementation Checklist

- [ ] Header uses subtle glass and remains readable while scrolling.
- [ ] Hero communicates AEGIS in the first viewport.
- [ ] Primary CTA is KEEP Teal.
- [ ] Feature cards are mostly solid and readable.
- [ ] Glass is limited to navigation, controls, overlays, and screenshot frames.
- [ ] VeriGuide integration remains visible.
- [ ] Tutorial section has clear step-by-step screenshots.
- [ ] Footer matches KEEP structure and contrast.
- [ ] Reduced motion and reduced transparency states are implemented.
- [ ] Page works without `backdrop-filter`.

---

## 10. Source Notes

This guide translates Apple's Liquid Glass guidance into a web marketing context. Relevant Apple principles used here:

- Liquid Glass is a distinct top layer for navigation and controls.
- Standard controls and bars should remain legible over changing content.
- Overusing glass weakens hierarchy.
- Avoid stacking glass on glass.
- Tinting should be selective and meaningful.
- Motion and transparency must adapt to accessibility preferences.
- Content should remain the focus.

Last updated: 2026-06-30
