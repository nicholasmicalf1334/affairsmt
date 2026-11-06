import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found | affairs.mt" };

export default function NotFound() {
  return (
    <main className="nf">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/logo.png" alt="affairs.mt" width={1600} height={694} className="nf-logo" />
      <p className="nf-code">404</p>
      <p className="nf-hand">Wrong table, darling.</p>
      <Link href="/" className="btn">Back to the party</Link>
    </main>
  );
}
