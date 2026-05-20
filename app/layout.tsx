import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "StatusWidgets | Realtime Reliability UX for Modern Applications",
  description:
    "Embed realtime service health and outage information directly into your product experience. Adaptive status components and intelligent frontend degradation handling.",
  keywords: [
    "status widgets",
    "status page",
    "reliability UX",
    "frontend reliability",
    "service status",
    "outage handling",
    "adaptive UI",
    "feature gating",
    "realtime status",
    "incident communication",
    "edge-native infrastructure",
    "Cloudflare Workers",
    "status components",
    "React status components",
    "developer tools",
    "AI infrastructure",
    "graceful degradation",
    "service health monitoring",
    "status SDK",
    "frontend infrastructure",
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@dfordp11",
    title: "StatusWidgets | Realtime Reliability UX",
    description:
      "Embed realtime service health and outage information directly into your product experience. Adaptive status components and intelligent frontend degradation handling.",
    images: [
      {
        url: "http://status-widgets.com/og-image.png",
        alt: "StatusWidgets — Realtime Reliability UX",
      },
    ],
  },
  openGraph: {
    title: "StatusWidgets | Realtime Reliability UX for Modern Applications",
    description:
      "Embed realtime service health and outage information directly into your product experience. Adaptive status components and intelligent frontend degradation handling.",
    url: "http://www.status-widgets.com",
    siteName: "StatusWidgets",
    images: [
      {
        url: "http://status-widgets.com/og-image.png",
        alt: "StatusWidgets — Realtime Reliability UX",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontSans.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
