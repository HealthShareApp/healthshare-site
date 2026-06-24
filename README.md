# HealthShare — Marketing Site

Landing page for the [HealthShare iOS app](https://github.com/HealthShareApp), built with Next.js and deployed to GitHub Pages at [healthshareapp.github.io/healthshare-site](https://healthshareapp.github.io/healthshare-site/).

---

## Page content

### Hero
**"Your health data, in your hands"**
Apple Watch, Whoop, Oura, Garmin — whatever you track with, the data already lives in Apple Health. HealthShare exports it as a structured report to your own cloud storage, ready to share with your doctor, trainer, or AI.

---

### Features
Six cards covering the core value prop:

| Card | Summary |
|------|---------|
| Works with every tracker you own | Anything that syncs to Apple Health: HR, HRV, sleep, workouts, steps, blood oxygen |
| Structured, LLM-ready reports | Clean JSON with aggregated metrics, anomaly flags, sleep/activity scores |
| You control the trigger | No background tracking, no auto-uploads — you hold the button |
| Configurable time window | 12h / 24h / 3d / 7d export range, changeable in Settings |
| Your storage, your folder | Dedicated HealthShare folder in the cloud storage you choose. Google Drive today, more options on the way |
| We never hold your data | Processing on-device, report goes straight to storage you own — no data lake |

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

### Roadmap (Vision section)

| Card | Status | Summary |
|------|--------|---------|
| Your data, your storage | Available now | Export on demand, you control who sees it and when |
| A direct line to your doctor | Coming soon | Revocable access to your reports for medical professionals. Encrypted relay, FHIR-ready, revoke with one tap |
| The HealthShare Band | Coming soon | Own-hardware wristband tracking HRV, HR, sleep stages, SpO2. Syncs to Apple Health. Pricing TBA |

---

### Privacy section
**"Built so we never hold your data"**
No data lake. No analytics. No selling — nothing to leak. Data flows from Apple Health into storage you own: encrypted in transit, under your control. The one thing we keep is nothing.

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
