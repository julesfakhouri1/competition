// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";
// lib/fonts.ts
import { Darker_Grotesque, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import CookieBotScript from './components/CookieBotScript'


const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const avenir = localFont({
  src: [
    {
      path: "./fonts/Avenir/AvenirRegular/AvenirRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Avenir/AvenirRegular/AvenirRegular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Avenir/AvenirRegular/AvenirRegular.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});

const hellixmedium = localFont({
  src: [
    {
      path: "./fonts/Hellix/Hellix-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Hellix/Hellix-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-hellix-medium",
});

const hellixregular = localFont({
  src: [
    {
      path: "./fonts/Hellix/Hellix-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Hellix/Hellix-Regular.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-hellix-regular",
});

const metadata: Metadata = {
  title: "Poma",
  description: "Poma app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${darkerGrotesque.variable} ${avenir.variable} ${playfairDisplay.variable} ${hellixmedium.variable} ${hellixregular.variable}`}
    >
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-H5YM0DM6G5`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H5YM0DM6G5');
          `}
        </Script>     
      </head>
      <body>
      <CookieBotScript />

        {children}</body>
    </html>
  );
}
