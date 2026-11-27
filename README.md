# JOURNEY TO HOKUSAI

Official bilingual (`EN` / `日本語`) film website and post-purchase 4K Screening Room for **JOURNEY TO HOKUSAI** (2019, 80 min, 4K Ultra HD), a feature documentary produced, directed, photographed, and edited by **Chikara Motomura**.

- **Live site:** https://journeytohokusaifilm.com (GitHub Pages, `CNAME`)
- **Rent Film (48-Hour 4K Streaming Pass):** `$4.99`
- **Languages:** English (`EN`) & Japanese (`日本語`, direct link `?lang=ja`)
- Built on the same zero-build static template as [kinobumovie.com](https://kinobumovie.com).

## Video (Vimeo, embed-only)

| Video | Vimeo ID | Used for |
| :--- | :--- | :--- |
| 4K trailer · English subtitles | `1250414375` | `config.js → trailerVimeoEn` |
| 4K trailer · Japanese subtitles | `1250414372` | `config.js → trailerVimeoJa` |
| 4K feature · English subtitles | `1250414373` | `watch.html?vm=…` |
| 4K feature · Japanese subtitles | `1250414371` | `watch.html?vmja=…` |

`journeytohokusaifilm.com` must stay on each video's Vimeo embed allow-list.

## Stripe checkout (`config.js`)

Live Payment Link (Journey to Hokusai Streaming account): `https://buy.stripe.com/5kQbJ0ekfgBDchd9rubsc00` — already set in `rent.link`. To recreate it:

1. In the **Journey to Hokusai streaming** Stripe account, create a `$4.99` Payment Link
   (product: "JOURNEY TO HOKUSAI — 48-Hour Film Rental (4K Stream)").
2. Set **After payment → Redirect customers to your website** to:
   `https://journeytohokusaifilm.com/watch.html?vm=1250414373&vmja=1250414371`
3. Paste the `https://buy.stripe.com/...` URL into `rent.link` in [`config.js`](./config.js).
   The Rent buttons activate automatically (and Stripe Checkout is localized to Japanese when `日本語` is selected).

> Never commit Stripe secret keys (`sk_live_...`, `rk_live_...`). Only the public Payment Link belongs in `config.js`.

## Analytics (optional)

Paste a PostHog project key (`phc_...`) into `POSTHOG_KEY` in `config.js`. Events: `trailer_played`, `trailer_subtitle_switched`, `language_switched`, `still_opened`, `checkout_clicked`, `screening_room_unlocked`.

## Custom domain

`CNAME` contains `journeytohokusaifilm.com`. At the domain registrar, point DNS to GitHub Pages:

- `A` records on the apex: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `AAAA` records on the apex: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- `CNAME` record `www` → `chikaramotomura.github.io`

Then in **Settings → Pages**, deploy from `main` / root and enable **Enforce HTTPS**.

## Local preview

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

## Project structure

| File | Purpose |
| :--- | :--- |
| `config.js` | Stripe Payment Link, PostHog key, Vimeo IDs, links |
| `index.html` | One-page film website |
| `watch.html` | Post-purchase 4K Screening Room (`noindex, nofollow`) |
| `styles.css` | Design system (frosted nav, dark cinema hero, bento cards, lightbox) |
| `site.js` | EN / 日本語 text, trailer switcher, stills lightbox, Stripe & Screening Room wiring |
| `assets/` | Poster, trailer poster, social card, favicon, 5 film stills (`assets/stills/`) |
