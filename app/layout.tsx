import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { BRAND, PROJECT } from "@/lib/data";

// Google Tag Manager containers (override with a comma-separated NEXT_PUBLIC_GTM_ID if needed)
const gtmIds = (process.env.NEXT_PUBLIC_GTM_ID || "GTM-P49C4928,GTM-W39LVRPX").split(",").map((s) => s.trim()).filter(Boolean);
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${PROJECT} by DAMAC | Villas & Townhouses in Dubai | ${BRAND}`,
  description: `${PROJECT} by DAMAC Properties: island-inspired luxury villas, twin villas and townhouses in Dubai with 45+ world-class amenities. Register your interest with ${BRAND}.`,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    siteName: BRAND,
    type: "website",
    title: `${PROJECT} by DAMAC | ${BRAND}`,
    description: "Island-inspired luxury villas, twin villas and townhouses in Dubai. Register your interest.",
    images: [{ url: "/img/hero.webp", width: 2400, height: 1060 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter+Tight:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="theme-dn bg-background text-foreground font-sans">
        {gtmIds.length ? (
          <>
            <Script id="gtm" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());${JSON.stringify(gtmIds)}.forEach(function(id){window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=document.getElementsByTagName('script')[0],j=document.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+id;f.parentNode.insertBefore(j,f);});`}</Script>
            <noscript>
              {gtmIds.map((id) => (
                <iframe key={id} src={`https://www.googletagmanager.com/ns.html?id=${id}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
              ))}
            </noscript>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
