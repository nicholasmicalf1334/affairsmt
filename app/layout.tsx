import type { Metadata, Viewport } from "next";
import { Anton, Yellowtail, Archivo } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-poster" });
const script = Yellowtail({ weight: "400", subsets: ["latin"], variable: "--font-script" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://affairs.mt"),
  title: "affairs.mt | Parties in Malta",
  description: "affairs.mt is a party brand in Malta. Next affair, lineup and tickets.",
  openGraph: { title: "affairs.mt", description: "Parties in Malta.", url: "https://affairs.mt", siteName: "affairs.mt" },
};

export const viewport: Viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${script.variable} ${archivo.variable}`}>
      <body>
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
