"use client";

import { useRef } from "react";

// Glossy logo that leans toward the cursor.
export default function HeroLogo() {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    el.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg)`;
  }

  return (
    <div className="hero-logo-stage" onPointerMove={onMove} onPointerLeave={() => ref.current && (ref.current.style.transform = "")}>
      <div ref={ref} className="hero-logo-tilt">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/wordmark-lg.png" alt="affairs.mt" width={1600} height={733} className="hero-logo" fetchPriority="high" />
      </div>
    </div>
  );
}
