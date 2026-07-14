import type { Metadata } from "next";
import "./globals.css";
import IntroWrapper from "@/components/animations/IntroWrapper";

export const metadata: Metadata = {
  title: "Joshua Ozibo — Front-End Developer",
  description: "Front-End Developer & UI Engineer based in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Monument Extended — closest free equivalent via Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600&display=swap"
          rel="stylesheet"
        />
        {/* DM Sans for body / subtitle (clean sans like Doner) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-black text-white relative">
        <IntroWrapper>{children}</IntroWrapper>
      </body>
    </html>
  );
}
