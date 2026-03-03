# Szechuan Royale Chinese Restaurant — Design Spec

**Restaurant:** Szechuan Royale Chinese Restaurant  
**Stack:** Next.js (App Router), Tailwind CSS  
**Approach:** Mobile-first, bold Szechuan Chinese aesthetic (red & gold)

> **Note:** The current site title incorrectly displays "Japanese Restaurant" — this new site corrects the branding to "Szechuan Royale Chinese Restaurant."

---

## 1. Color Palette

| Role | Name | Hex |
|------|------|-----|
| Primary | Imperial Red | `#C0181F` |
| Secondary | Dynasty Gold | `#D4A017` |
| Dark Background | Ink Black | `#1A1008` |
| Light Background | Parchment | `#FDF6E3` |
| Accent | Jade Green | `#2E7D4F` |
| Muted Text | Stone Gray | `#5C5C5C` |
| Border / Divider | Warm Tan | `#E8D5A0` |
| Hover / Glow | Bright Gold | `#F5C842` |

**Usage:**
- Primary background: `#FDF6E3` (Parchment) — warm, inviting base
- Dark sections (hero, CTA banner): `#1A1008` (Ink Black) with gold accents
- CTAs: `#C0181F` (Imperial Red) filled, white text; or gold outlined on dark
- Decorative elements: dragon/phoenix motifs, lantern red, gold filigree borders
- Dividers: `#D4A017` thin horizontal rules between sections

---

## 2. Typography

All fonts from **Google Fonts**.

| Role | Font | Weight | Size (mobile → desktop) |
|------|------|--------|--------------------------|
| Display / Hero | Noto Serif SC | 700 | 2.5rem → 4.5rem |
| Section Headings | Noto Serif SC | 600 | 1.75rem → 2.75rem |
| Body | Noto Sans SC | 400 | 1rem / 1.7 line-height |
| UI Labels / Nav | Noto Sans SC | 500 | 0.875rem |
| Accent / Tagline | IM Fell English | 400 italic | 1.125rem → 1.375rem |

**Rationale:** Noto Serif SC provides authentic Chinese serif elegance. Noto Sans SC ensures CJK readability for body. IM Fell English adds a classic, prestigious feel for English taglines.

---

## 3. Component Breakdown & Mobile-First Wireframes

### 3.1 Navigation Bar

**Behavior:** Sticky top nav; semi-transparent dark over hero, solid `#1A1008` on scroll. Gold bottom border.

```
[Mobile]
┌─────────────────────────────────┐
│ 🏮 SZECHUAN ROYALE   ☰ (menu) │
└─────────────────────────────────┘

[Desktop]
┌──────────────────────────────────────────────────────┐
│  🏮 SZECHUAN ROYALE  Menu  About  Location  Order   │
│ ─────────────────────────────────── [gold underline] │
└──────────────────────────────────────────────────────┘
```

**Elements:**
- Logo: Red lantern emoji + "SZECHUAN ROYALE" in Noto Serif SC
- Tagline: "Authentic Chinese Restaurant" (corrects prior "Japanese" branding)
- Mobile: hamburger → full-screen dark overlay with gold text
- Desktop: gold underline hover effect on nav links

---

### 3.2 Hero Section

**Purpose:** Bold, dramatic first impression; convey authenticity and prestige.

```
[Mobile]
┌─────────────────────────────────┐
│                                 │
│  [Full-bleed Chinese food photo]│
│  [dark overlay + red/gold vign] │
│                                 │
│    🏮 SZECHUAN ROYALE 🏮        │
│   "Authentic Chinese Restaurant"│
│   "Bold Flavors. Royal Taste."  │
│                                 │
│  [ Order Online ]  [ View Menu ]│
└─────────────────────────────────┘

[Desktop]
┌──────────────────────────────────────────────────────┐
│                                                      │
│  [Full-bleed hero — 100vh, parallax scroll]          │
│  [Szechuan dish photography with dark/red overlay]   │
│                                                      │
│         🏮  SZECHUAN ROYALE  🏮                     │
│      "Authentic Chinese Restaurant"                  │
│    "Bold Flavors. Royal Taste. Szechuan Soul."       │
│                                                      │
│    [ Order Online ]        [ View Menu ]             │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Specs:**
- Height: `100svh` mobile, `100vh` desktop
- Overlay: `rgba(26,16,8,0.6)` with subtle red vignette at edges
- Gold decorative border/frame element around hero text block
- CTAs: primary (Imperial Red filled) = Order Online, secondary (gold outlined) = View Menu
- Optional: animated floating red lanterns (CSS keyframe, subtle)

---

### 3.3 Menu Highlights

**Purpose:** Showcase bold Szechuan signature dishes; entice and convert.

```
[Mobile — vertical scroll cards]
┌─────────────────────────────────┐
│  ── SIGNATURE DISHES ──         │
│  ✦ ─────────────── ✦           │
│                                 │
│  ┌───────────────────────────┐  │
│  │  [Dish Photo]             │  │
│  │  🌶 Mapo Tofu        $14  │  │
│  │  Silken tofu in fiery...  │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │  [Dish Photo]             │  │
│  │  Dan Dan Noodles     $13  │  │
│  └───────────────────────────┘  │
│  [ View Full Menu ]             │
└─────────────────────────────────┘

[Desktop — 3-column grid with gold borders]
┌──────────────────────────────────────────────────────┐
│           ── SIGNATURE DISHES ──                     │
│           ✦ ─────────────── ✦                       │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │[Photo]   │  │[Photo]   │  │[Photo]   │           │
│  │🌶 Mapo   │  │Dan Dan   │  │Kung Pao  │           │
│  │Tofu  $14 │  │Noodles   │  │Chicken   │           │
│  └──────────┘  └──────────┘  └──────────┘           │
│                [ View Full Menu ]                    │
└──────────────────────────────────────────────────────┘
```

**Specs:**
- 4–6 featured Szechuan dishes (cards with image, name, spice level indicator, price)
- Card: dark `#1A1008` background, gold border (`#D4A017`), red accent on hover
- Spice level: 🌶 1–3 peppers indicator
- Section title with gold decorative divider (✦ ─── ✦)
- "View Full Menu" → menu page

---

### 3.4 Online Ordering CTA Banner

**Purpose:** Bold conversion section; drive online orders.

```
[Mobile]
┌─────────────────────────────────┐
│  ┌─────────────────────────────┐│
│  │  🏮 ORDER ONLINE            ││
│  │  Authentic Szechuan         ││
│  │  delivered to your door     ││
│  │                             ││
│  │  [ Order Now → ]            ││
│  └─────────────────────────────┘│
└─────────────────────────────────┘

[Desktop — full-width band]
┌──────────────────────────────────────────────────────┐
│ ✦  Craving bold Szechuan flavors?  Order online now! │
│         Pickup & Delivery Available   [ Order Now ]  │
└──────────────────────────────────────────────────────┘
```

**Specs:**
- Background: `#C0181F` (Imperial Red) with gold `#D4A017` accent border
- Text: white / `#F5C842` (Bright Gold)
- CTA button: gold background `#D4A017`, dark text `#1A1008`
- Online ordering via restaurant's existing platform (MenuSifu or equivalent)
- Env var: `NEXT_PUBLIC_ORDER_URL` pointing to ordering system

---

### 3.5 Location & Hours

**Purpose:** Help customers find the restaurant; practical conversion.

```
[Mobile — stacked]
┌─────────────────────────────────┐
│  📍 FIND US                     │
│  ✦ ─────────────── ✦           │
│                                 │
│  [Address Line 1]               │
│  [City, State ZIP]              │
│  Phone: (XXX) XXX-XXXX          │
│                                 │
│  ⏰ HOURS                       │
│  Mon–Thu  11am – 9:30pm         │
│  Fri–Sat  11am – 10:30pm        │
│  Sunday   12pm – 9:30pm         │
│                                 │
│  [ Get Directions ]             │
│                                 │
│  [Google Maps embed]            │
└─────────────────────────────────┘

[Desktop — 2-column]
┌──────────────────────────────────────────────────────┐
│  📍 Location & Hours                                 │
│  ┌─────────────────────┐  ┌────────────────────────┐ │
│  │ [Address]           │  │  [Google Maps embed]   │ │
│  │ [City, State]       │  │                        │ │
│  │                     │  │                        │ │
│  │ Hours table         │  │                        │ │
│  │                     │  │                        │ │
│  │ [ Get Directions ]  │  │                        │ │
│  └─────────────────────┘  └────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

**Specs:**
- Embedded Google Maps iframe (responsive, gold border)
- "Get Directions" → Google Maps deep link
- Hours in JSON-LD structured data for SEO

---

### 3.6 About / Story Section

**Purpose:** Build brand identity; convey authenticity of Szechuan cuisine.

```
[Mobile]
┌─────────────────────────────────┐
│  [Decorative red/gold pattern]  │
│                                 │
│  OUR STORY                      │
│                                 │
│  "Szechuan Royale brings the    │
│  bold, fiery flavors of         │
│  Szechuan Province to your      │
│  table. Every dish is crafted   │
│  with authentic ingredients     │
│  and traditional techniques."   │
│                                 │
│  [Chef/restaurant interior img] │
└─────────────────────────────────┘
```

---

### 3.7 Contact Section

```
[Mobile]
┌─────────────────────────────────┐
│  📞 CONTACT US                  │
│                                 │
│  Phone: (XXX) XXX-XXXX          │
│  Email: info@szechuanroyale.com │
│                                 │
│  ┌─────────────────────────────┐│
│  │ Name                        ││
│  │ Email                       ││
│  │ Message / Party size        ││
│  │            [ Send Message ] ││
│  └─────────────────────────────┘│
└─────────────────────────────────┘
```

---

### 3.8 Footer

```
[Mobile]
┌─────────────────────────────────┐
│  🏮 SZECHUAN ROYALE             │
│  Authentic Chinese Restaurant   │
│  [Address]                      │
│                                 │
│  [Instagram] [Facebook] [Yelp]  │
│                                 │
│  © 2025 Szechuan Royale.        │
│  All rights reserved.           │
└─────────────────────────────────┘
```

---

## 4. Online Ordering Strategy

- Link all "Order Now" CTAs to the restaurant's existing online ordering platform
- Store URL in env var: `NEXT_PUBLIC_ORDER_URL`
- Use `target="_blank"` + `rel="noopener noreferrer"`
- Do not rebuild ordering functionality in the Next.js site

---

## 5. Tailwind Design Tokens

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        imperial: '#C0181F',
        gold: '#D4A017',
        'bright-gold': '#F5C842',
        ink: '#1A1008',
        parchment: '#FDF6E3',
        jade: '#2E7D4F',
        stone: '#5C5C5C',
        tan: '#E8D5A0',
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'serif'],
        sans: ['Noto Sans SC', 'sans-serif'],
        fell: ['IM Fell English', 'serif'],
      },
    },
  },
}
```

---

## 6. Decorative / Cultural Design Elements

- **Red lanterns:** SVG lantern motifs in nav and footer; floating animation option
- **Gold filigree borders:** Thin decorative lines (`border-[#D4A017]`) around card and section edges
- **Section dividers:** `✦ ─────── ✦` pattern in gold
- **Dragon/phoenix:** Optional subtle watermark SVG in hero background
- **Texture:** Subtle paper/silk texture overlay on parchment backgrounds

---

## 7. Animation & Interaction

- Hero: dramatic fade-in of text with gold shimmer on "ROYALE"
- Menu cards: fade-up on scroll + red glow on hover
- Nav: gold underline slide-in on hover
- CTA buttons: `scale(1.04)` + gold glow shadow on hover
- Red lanterns: optional gentle sway animation (CSS keyframes)

---

## 8. SEO & Performance

- `next/image` for all photos (WebP, lazy load, blur placeholder)
- JSON-LD: `Restaurant` schema — explicitly set `servesCuisine: "Chinese"` and `name: "Szechuan Royale Chinese Restaurant"` (correcting prior incorrect "Japanese" branding)
- Open Graph image: branded hero with red/gold styling
- Core Web Vitals target: LCP < 2.5s, CLS < 0.1
- Sitemap via `next-sitemap`
