import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Data Training.io : Power BI Expert",
    template: "%s | Power BI Expert",
  },
  description:
    "We transform businesses worldwide with expert Power BI training, consulting, and dashboards.",
  keywords: [
    "power bi",
    "data training",
    "power bi expert",
    "power bi templates",
    "power bi training",
    "power bi dashboard",
  ],

  // 🌐 Open Graph (Facebook, WhatsApp, LinkedIn, Slack, etc.)
  openGraph: {
    title: "Data Training.io : Power BI Expert",
    description:
      "Transform your business with expert Power BI training, consulting, and dashboards.",
    url: "https://datatraining.io",
    siteName: "Data Training.io",
    images: [
      {
        url: "https://datatraining.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Data Training.io Power BI Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 🐦 Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Data Training.io : Power BI Expert",
    description:
      "Transform your business with expert Power BI training, consulting, and dashboards.",
    images: ["https://datatraining.io/og-image.png"],
    creator: "@yourtwitterhandle", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Data Training.io",
              "url": "https://datatraining.io",
              "logo": "https://datatraining.io/logo.png",
              "sameAs": [
                "https://twitter.com/yourtwitterhandle",
                "https://www.linkedin.com/company/datatraining",
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9876543210",
                  "contactType": "customer service",
                  "areaServed": "Worldwide",
                  "availableLanguage": "English",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
