"use client";

import { useEffect, useState } from "react";

type Dj = { name: string; img: string };

// Polaroid that flips through the lineup announcements.
export default function DjCarousel({ djs, href }: { djs: Dj[]; href: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % djs.length), 2600);
    return () => clearInterval(t);
  }, [paused, djs.length]);

  return (
    <div
      className="polaroid dj-carousel"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <a href={href} target="_blank" rel="noopener" className="dj-stack" aria-label={`${djs[i].name} on Instagram`}>
        {djs.map((dj, n) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={dj.name}
            src={dj.img}
            alt={n === i ? `${dj.name} DJ announcement` : ""}
            className={n === i ? "is-on" : ""}
            loading="lazy"
            width={640}
            height={960}
          />
        ))}
      </a>
      <span className="dj-caption">
        <span key={djs[i].name}>{djs[i].name}</span>
      </span>
      <span className="dj-dots">
        {djs.map((dj, n) => (
          <button
            key={dj.name}
            type="button"
            aria-label={`Show ${dj.name}`}
            aria-current={n === i}
            onClick={() => setI(n)}
          />
        ))}
      </span>
    </div>
  );
}
