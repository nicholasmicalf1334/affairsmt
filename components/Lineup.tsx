"use client";

import { useRef, useState } from "react";

type Dj = { name: string; img: string };

// Names run like the poster; hovering one floats its announcement under the cursor.
export default function Lineup({ djs }: { djs: Dj[] }) {
  const [active, setActive] = useState<Dj | null>(null);
  const card = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent) {
    if (card.current) card.current.style.translate = `${e.clientX}px ${e.clientY}px`;
  }

  return (
    <>
      <p className="lineup-names" onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
        {djs.map((dj) => (
          <span key={dj.name} className="lineup-name" onPointerEnter={() => setActive(dj)}>
            {dj.name}
          </span>
        ))}
      </p>

      <div ref={card} className={`lineup-float${active ? " is-on" : ""}`} aria-hidden>
        {djs.map((dj) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={dj.name} src={dj.img} alt="" className={active?.name === dj.name ? "is-shown" : ""} />
        ))}
      </div>

      <div className="lineup-strip">
        {djs.map((dj) => (
          <figure key={dj.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={dj.img} alt={`${dj.name} DJ announcement`} loading="lazy" width={640} height={960} />
          </figure>
        ))}
      </div>
    </>
  );
}
