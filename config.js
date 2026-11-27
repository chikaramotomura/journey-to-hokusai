// ============================================================================
// JOURNEY TO HOKUSAI — Site, Stripe, PostHog & Domain Configuration
// (The single file for Stripe checkout, PostHog analytics & domain wiring.
//  For full setup steps, see README.md in the repo root.)
// ============================================================================
//
// 1. STRIPE CONNECTOR ($4.99 RENT FILM):
//    • Option A — Stripe Payment Link (No backend · 2-minute setup):
//      Paste your `https://buy.stripe.com/...` URL into `rent.link` ($4.99).
//      Set the Payment Link's after-payment redirect to:
//        https://journeytohokusaifilm.com/watch.html?vm=1250414373&vmja=1250414371
//      Buttons activate automatically and append `?locale=ja` when visitors
//      browse in Japanese (日本語).
//    • Option B — Stripe Checkout Worker / API Connector (Tokenized 48h Paywall):
//      Set `mode: "worker"` and paste your Worker endpoint into `WORKER_URL`.
//
// 2. POSTHOG ANALYTICS CONNECTOR:
//    • Paste your PostHog Project API Key (`phc_...`) into `POSTHOG_KEY`.
//
// 3. CUSTOM DOMAIN (GITHUB PAGES):
//    • `CNAME` holds journeytohokusaifilm.com; DNS must point to GitHub Pages.
//
// SECURITY NOTE: Never place secret keys (`sk_live_...`, `rk_live_...`) in this
// file. Only public links, `pk_live_...`, or `phc_...` project tokens belong in
// client-side configuration.
// ============================================================================

window.SITE = {
  // Canonical production URL
  SITE_URL: "https://journeytohokusaifilm.com",

  // "links" = Stripe Payment Links | "worker" = Stripe Checkout API / Worker connector
  mode: "links",

  // --- STRIPE CONNECTOR SLOT ---
  WORKER_URL: "",
  STRIPE_PUBLISHABLE_KEY: "",

  // --- POSTHOG ANALYTICS CONNECTOR SLOT (paste your phc_... Project Key) ---
  POSTHOG_KEY: "",
  POSTHOG_HOST: "https://us.i.posthog.com",

  // --- RENT FILM ($4.99 · 48-Hour 4K Streaming Pass) ---
  rent: {
    label: "Rent Film",
    labelJa: "レンタル視聴",
    price: "$4.99",
    priceJa: "$4.99",
    terms: "48-hour streaming pass in up to 4K Ultra HD. Includes both the English-subtitled and Japanese-subtitled editions.",
    termsJa: "48時間の4K Ultra HDストリーミング視聴パス。英語字幕版・日本語字幕版の両方をご覧いただけます。",
    // Stripe Payment Link from the "Journey to Hokusai streaming" account.
    // After-payment redirect: https://journeytohokusaifilm.com/watch.html?vm=1250414373&vmja=1250414371
    link: "https://buy.stripe.com/5kQbJ0ekfgBDchd9rubsc00",
    linkJa: ""    // <-- Optional dedicated Japanese Stripe Payment Link
  },

  // --- MEDIA & LINKS ---
  posterSrc: "assets/poster.jpg",
  trailerSrcEn: "",
  trailerSrcJa: "",
  trailerPoster: "assets/trailer-poster.jpg",
  trailerEmbed: "",
  // Vimeo trailers (embed-only; journeytohokusaifilm.com is an allowed domain)
  trailerVimeoEn: "https://vimeo.com/1250414375", // 4K trailer · English subtitles
  trailerVimeoJa: "https://vimeo.com/1250414372", // 4K trailer · Japanese subtitles

  directorSiteUrl: "https://www.chikaramotomura.net",
  // "data-site-restaurant" links point to the featured artist, Tom Killion
  restaurantSiteUrl: "https://www.tomkillion.com",
  restaurantSiteUrlJa: "https://www.tomkillion.com",
  contactEmail: "chikaramotomura@gmail.com"
};
