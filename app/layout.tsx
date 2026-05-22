import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crmfresh.io"),
  title: "CRMFresh: audit your CRM before you send",
  description:
    "CRMFresh audits your contact list before you hit send. We find who left and flag the dead emails. You get back a clean list with a re-engagement segment.",
  openGraph: {
    title: "CRMFresh: audit your CRM before you send",
    description:
      "Stop sending sequences to people who left 18 months ago. Get a free sample audit on 50 of your contacts.",
    url: "https://crmfresh.io",
    siteName: "CRMFresh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRMFresh: audit your CRM before you send",
    description:
      "Stop sending sequences to people who left 18 months ago. Get a free sample audit on 50 of your contacts.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
