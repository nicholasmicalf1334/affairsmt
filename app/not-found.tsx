import type { Metadata } from "next";
import Link from "next/link";
import Spray from "@/components/Spray";

export const metadata: Metadata = { title: "Page not found | affairs.mt" };

export default function NotFound() {
  return (
    <main className="nf">
      <Spray className="nf-spray" />
      <p className="nf-code">404</p>
      <p className="nf-msg">Wrong party. This page doesn&apos;t exist.</p>
      <Link href="/" className="btn btn-lg">Back to affairs.mt</Link>
    </main>
  );
}
