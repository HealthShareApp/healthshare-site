# HealthShare — Marketing Site

Landing page for the [HealthShare iOS app](https://github.com/HealthShareApp), built with Next.js and deployed to GitHub Pages at [healthshareapp.github.io/healthshare-site](https://healthshareapp.github.io/healthshare-site/).

---

## Page content

### Hero
**"Your health data, in your hands"**
Apple Watch, Whoop, Oura, Garmin — whatever you track with, the data already lives in Apple Health. HealthShare exports it as a structured report to your own cloud storage, ready to share with your doctor, trainer, or AI.

---

### Features
Section heading: **"Everything you need, nothing you don't"**
Sub-heading: Built for people who take their health seriously and want full ownership of their data.

Six cards covering the core value prop:

| Card | Summary |
|------|---------|
| Works with every tracker you own | Apple Watch, Whoop, Oura, Garmin — if it syncs to Apple Health, HealthShare can export it. HR, HRV, sleep stages, workouts, steps, blood oxygen, and more |
| Structured, LLM-ready reports | Clean JSON with aggregated metrics, anomaly flags, sleep/activity scores — ready for AI analysis |
| You control the trigger | No background tracking. No automatic uploads. Hold the sync button and export exactly when you decide |
| Configurable time window | 12h / 24h / 3d / 7d export range, changeable in Settings |
| Your storage, your folder | Dedicated HealthShare folder in the cloud storage you choose. Google Drive today, more options on the way. Share the folder or individual files on your terms |
| We never hold your data | Aggregation and processing happen on-device. Report goes straight to storage you own — never to a HealthShare server. No data lake: nothing for us to lose, sell, or be forced to hand over |

---

### How it works
Four steps from setup to sharing:
1. Grant Health access
2. Connect your storage
3. Hold to export
4. Share on your terms

---

### Aggregation, analysis & visualization
HealthShare aggregates your tracker data, runs lightweight on-device analysis, and surfaces it as a structured, readable report. Useful for your own review — and ready for any AI tool or medical professional you choose to share it with.

Pills: On-device health state analysis · Human-readable summaries · Structured for AI tools & FHIR

---

### Vision section ("More than an export")
Section heading: **"More than an export"**
Sub-heading: HealthShare is building the infrastructure for health data you actually control — from your wrist to your storage, directly to your doctor, and soon on hardware we make ourselves.

| Card | Status | Summary |
|------|--------|---------|
| Your data, your storage | Available now | Export a full health snapshot to your own cloud storage on demand. Share with trainer, nutritionist, or AI — or keep it for yourself. You control every step. Bullets: one hold exports complete health profile · works with any tracker that syncs to Apple Health · structured JSON ready for AI · you choose who sees it and when |
| A direct line to your doctor | Coming soon | Grant medical professionals direct, revocable access to your reports from your own storage. Bullets: add a doctor you know or browse verified specialists · encrypted end to end (HealthShare relays access, never reads data) · clean FHIR-ready report, not raw device noise · revoke any provider with one tap · works with clinics and medical centers |
| The HealthShare Band | Coming soon | Built for full data ownership from day one. Bullets: pricing and availability TBA · tracks HRV, HR, sleep stages, blood oxygen 24/7 · syncs directly into Apple Health and HealthShare reports · built by our team, designed for full data ownership |

---

### Privacy section
**"Built so we never hold your data"**
No data lake. No analytics. No selling, no sharing — nothing for us to leak. Your health data flows directly from Apple Health on your device into storage you own: encrypted in transit, stored in your account, under your control. The one thing we keep is nothing.

Badges: We never hold your data · Storage you own · You decide who reads it

---

### Footer
Privacy Policy ([Notion](https://lopsided-ghoul-4da.notion.site/Health-Share-App-Privacy-Policy-386067544a6280109427db89f4728bc9)) · Support (alexander.kaigorodow@gmail.com) · GitHub

---

## Architecture

- **Framework**: Next.js (static export via `next export`)
- **Deploy**: GitHub Actions → GitHub Pages (`/.github/workflows/deploy.yml`)
- **Styling**: Tailwind CSS
- **Components**: one file per section in `/components`

## Development

```bash
npm install
npm run dev       # localhost:3000
npm run build     # static export to /out
```

## Privacy spine

All copy must stay consistent with: **"we never hold your data"** (custody/revocability framing). Do not reintroduce "no servers" or "no backend" absolutes — the roadmap includes a relay backend. Analytics runs on-device; the site may say we build the models but the device runs them.
