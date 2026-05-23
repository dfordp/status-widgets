# Status Widgets

> Build applications that adapt gracefully during outages.

---

## The problem

Modern applications rarely fail completely. They fail partially.

OpenAI latency spikes in APAC. Stripe goes down in EU. S3 uploads intermittently fail. Twilio starts timing out. These aren't full outages — they're fragmented, regional, provider-specific degradations that are increasingly the norm in API-first software.

Yet most applications still respond the same way they did ten years ago:

```
Something went wrong. Please try again later.
```

Users don't know what's broken. They don't know if it's them or you. They lose trust and leave.

---

## What we're building

**Status Widgets is a runtime reliability layer for frontend applications.**

Not a status page. Not an uptime monitor. Not an observability tool.

It's a set of components, hooks, and a runtime that sits inside your application and makes it respond intelligently when a provider degrades — without you writing a single custom error handler.

When OpenAI slows down, your AI generate button shows a latency warning and offers cached results instead of failing silently. When Stripe goes down in a region, your checkout flow disables gracefully and queues the payment. When S3 has issues, your upload UI shows a specific, honest message rather than a generic error.

The UI adapts. Users stay informed. Trust is preserved.

---

## Core concepts

**Feature Gates** — wrap any component so it automatically disables or falls back when its dependent service is unavailable.

```tsx
<FeatureGate service="openai">
  <GenerateButton />
</FeatureGate>
```

**Status Banners** — contextual banners that appear only when a specific service is affected, with provider-aware messaging.

```tsx
<StatusBanner service="payments" variant="inline" />
```

**Service Hooks** — full programmatic access to live provider state, region-aware, for custom logic.

```tsx
const { state, region } = useServiceStatus("stripe")
// state → 'operational' | 'degraded' | 'outage'
// region → 'us-east' | 'eu-west' | 'apac' | null
```

Status data is propagated from the edge in under 50ms globally. No polling. No cold starts.

---

## How it's different

Most reliability tooling is built for ops teams — it communicates incidents after they happen, to people outside your product. Status pages, PagerDuty alerts, incident emails.

Status Widgets is built for the users already inside your application when something goes wrong. It's a frontend-native layer that changes what users see and what they can do in real time.

| Traditional tools | Status Widgets |
|---|---|
| External status page | Embedded inside your UI |
| Manual incident posts | Adapts automatically |
| Generic error banners | Provider-aware messaging |
| Ops-team focused | User experience focused |
| Users leave the app | Users stay informed |

---

## Who it's for

- Teams building AI-native products that depend on third-party model providers
- SaaS companies with payment, storage, or communication APIs as critical paths
- Frontend engineers who are tired of writing bespoke degradation logic for every provider
- Anyone who wants their app to behave gracefully, not catastrophically, when things go wrong

---

## Status

Early access / waitlist. The SDK is in development. This repo contains the marketing site used to collect waitlist signups and explain the product.

---

## Running the site locally

```bash
npm install
cp example.env.local .env.local   # add your Neon DATABASE_URL
npx drizzle-kit push               # create the waitlist table
npm run dev
```

---

Made by [Dilpreet Grover](https://www.dilpreetgrover.me/)
