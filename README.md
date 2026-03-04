# Szechuan Royale Chinese Restaurant Website

A production-ready restaurant website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🏮 Features

- **Mobile-first responsive design** with sticky navigation
- **Full sections**: Hero, Menu Highlights, Online Ordering CTA, About, Location & Hours, Contact, Footer
- **Szechuan Chinese aesthetic**: Imperial Red & Dynasty Gold color palette
- **SEO optimized**: Meta tags, Open Graph, JSON-LD Restaurant schema
- **Static export** for easy deployment to any hosting platform
- **Google Fonts**: Noto Serif SC, Noto Sans SC, IM Fell English

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# The static site is generated in the `out/` directory
```

## 📦 Deployment

The site builds as a static export (`output: 'export'`). Deploy the `out/` directory to:

- **Vercel**: Push to GitHub, connect repo
- **Netlify**: Set build command to `npm run build`, publish directory to `out`
- **GitHub Pages**: Use the `out/` directory
- **Any static host**: Upload the `out/` directory

## 🎨 Design

- **Color Palette**: Imperial Red (#C0181F), Dynasty Gold (#D4A017), Ink Black (#1A1008), Parchment (#FDF6E3)
- **Fonts**: Noto Serif SC (headings), Noto Sans SC (body), IM Fell English (accent)

## ⚙️ Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_ORDER_URL` | URL for the online ordering platform |

## 📁 Project Structure

```
app/
├── components/
│   ├── Navigation.tsx    # Sticky nav with mobile hamburger
│   ├── Hero.tsx          # Full-screen hero with CTAs
│   ├── MenuHighlights.tsx # Signature dishes grid
│   ├── OnlineOrderingBanner.tsx # Order CTA banner
│   ├── About.tsx         # Restaurant story
│   ├── LocationHours.tsx # Map, address, hours
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer with social links
│   └── JsonLd.tsx        # SEO structured data
├── globals.css           # Tailwind + custom styles
├── layout.tsx            # Root layout with metadata
└── page.tsx              # Home page
```

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Static Export
## 🚀 Production Deployment

### Static Build
The site is built as a static export (`output: "export"`). The static files are in the `out/` directory after running `npm run build`.

### Deployment Options

#### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Get a token from https://vercel.com/account/tokens
3. Run: `VERCEL_TOKEN=<token> vercel --prod --yes`
4. Or connect the GitHub repo at https://vercel.com/new

#### Option 2: Netlify
1. Install: `npm i -g netlify-cli`
2. Get a token from https://app.netlify.com/user/applications
3. Run: `netlify deploy --prod --dir=out --auth=<token>`

#### Option 3: GitHub Pages (requires paid plan for private repos)
The `gh-pages` branch is pre-built and ready. Enable GitHub Pages in repo Settings → Pages → Branch: `gh-pages`.

### Custom Domain DNS Setup

To point **szechuanroyalechinese.com** to your deployment:

#### For Vercel:
Add to your DNS registrar:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### For Netlify:
Add to your DNS registrar:
```
Type: CNAME
Name: @  (or use ALIAS/ANAME if available)
Value: <your-site-name>.netlify.app

Type: CNAME
Name: www
Value: <your-site-name>.netlify.app
```

Then add the custom domain in your Vercel/Netlify dashboard under project Settings → Domains.
