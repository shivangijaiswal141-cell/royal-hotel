# The Royal Hotel — Dhamtari

A production-ready, luxury hotel website built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS** — luxury black + gold design system
- **Framer Motion** — scroll reveals, hero crossfade, menu transitions
- **lucide-react** — icon set

## Project Structure

```
app/
  layout.tsx            Root layout, fonts, SEO metadata, JSON-LD
  page.tsx               Home
  rooms/page.tsx          Rooms listing
  rooms/[slug]/page.tsx   Room detail (Mini Deluxe, Deluxe, Super Deluxe, Suite)
  gallery/page.tsx         Photo gallery with filters + lightbox
  about/page.tsx           About Us
  contact/page.tsx         Contact (map, phone, WhatsApp)
  booking/page.tsx         Booking enquiry form
  sitemap.ts / robots.ts   SEO
components/               All UI components
lib/data.ts                Single source of truth: hotel info, rooms, facilities, reviews, gallery
public/images/              Real hotel photographs, organised by room/category
```

## Photos & Video

All photos and videos are the hotel's own uploads — organised under `public/images/` and `public/videos/`:

```
public/images/
  suite/  deluxe/  super-deluxe/  mini-deluxe/  interiors/  exterior/
public/videos/
  exterior-loop.mp4   — used as the homepage hero background (looping, muted, autoplay)
  hotel-tour.mp4       — full vertical walkthrough, shown in the "Video Tour" section
```

The hero section (`components/Hero.tsx`) plays `exterior-loop.mp4` as a real video
background instead of a static image. To swap it, replace the file at
`public/videos/exterior-loop.mp4` and update `heroVideoPoster` in `lib/data.ts`
with a new poster frame if desired.

To add or swap a photo, drop the file into the matching folder and add its path
to the relevant array in `lib/data.ts` (`rooms[].images` or `galleryImages`).
Nothing else needs to change.

## Booking Form

The **Booking** page is an enquiry-only form (no online payment). On submit,
it opens a pre-filled WhatsApp message to **+91 7024803620** with the guest's
details. The hotel confirms availability and rate directly with the guest.

---

## Running Locally

1. **Install Node.js** (v18.18 or newer) from [nodejs.org](https://nodejs.org) if you don't have it.

2. **Unzip the project** and open a terminal in the project folder.

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the dev server:**
   ```bash
   npm run dev
   ```

5. Open **http://localhost:3000** in your browser.

To build a production bundle locally:
```bash
npm run build
npm run start
```

---

## Deploying for FREE on Vercel

Vercel is built by the makers of Next.js and offers a generous free tier — the easiest way to put this site online.

### Option A — Deploy via GitHub (recommended)

1. Create a free account at [vercel.com](https://vercel.com) (you can sign up with GitHub, GitLab, or email).
2. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — The Royal Hotel website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the Vercel dashboard, click **Add New → Project**.
4. Select your GitHub repository and click **Import**.
5. Vercel auto-detects Next.js — leave all settings as default.
6. Click **Deploy**. In about a minute, your site will be live at a URL like
   `https://the-royal-hotel-dhamtari.vercel.app`.

Every time you push a change to GitHub, Vercel automatically redeploys.

### Option B — Deploy via Vercel CLI (no GitHub needed)

1. Install the CLI:
   ```bash
   npm install -g vercel
   ```
2. From the project folder, run:
   ```bash
   vercel
   ```
3. Follow the prompts (log in / sign up, confirm project settings).
4. When it finishes, you'll get a live URL immediately.
5. To deploy future updates:
   ```bash
   vercel --prod
   ```

### Custom Domain (optional, still free)

Once deployed, go to your project in the Vercel dashboard → **Settings → Domains**,
and add your own domain (e.g. `theroyalhoteldhamtari.com`). Vercel provides free
SSL automatically — just point your domain's DNS records as instructed on that page.

### Updating SEO URLs After Deployment

Once you have a final domain, update the `siteUrl` constant in:
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

to match your live domain, so search engines index the correct URLs.
