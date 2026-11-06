import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Caveat } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-poster" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-body" });
const hand = Caveat({ weight: ["500", "700"], subsets: ["latin"], variable: "--font-hand" });

export const metadata: Metadata = {
  metadataBase: new URL("https://affairs.mt"),
  title: "affairs.mt | Good people, better nights",
  description: "AFFAIRS.mt is back this winter. 28 November 2026 at Graffiti Club, Paceville. Tickets available now.",
  openGraph: {
    title: "affairs.mt",
    description: "Good people, better nights. 28.11.26 Graffiti Club, Paceville.",
    url: "https://affairs.mt",
    siteName: "affairs.mt",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#d20a17" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable} ${hand.variable}`}>
      <body>
        <div className="frame" aria-hidden />
        {children}
      </body>
    </html>
  );
}
