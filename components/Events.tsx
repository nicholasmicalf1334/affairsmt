"use client";

import { useState } from "react";
import type { AffairEvent } from "@/lib/site";

type Props = { upcoming: AffairEvent[]; past: AffairEvent[]; instagram: string; ageNote: string };

export default function Events({ upcoming, past, instagram, ageNote }: Props) {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <section id="events" className="events">
      <div className="events-head">
        <h2 className="events-title">Events</h2>
        <div className="tabs" role="tablist" aria-label="Events">
          {(["upcoming", "past"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              id={`tab-${t}`}
              aria-controls={`panel-${t}`}
              aria-selected={tab === t}
              className="tab"
              onClick={() => setTab(t)}
            >
              {t}
              <sup>{t === "upcoming" ? upcoming.length : past.length}</sup>
            </button>
          ))}
        </div>
      </div>

      {tab === "upcoming" ? (
        <div role="tabpanel" id="panel-upcoming" aria-labelledby="tab-upcoming" className="ev-panel">
          {upcoming.map((e) => (
            <article key={e.id} className="ev-next">
              {e.poster && (
                <a href={e.ticketUrl} target="_blank" rel="noopener" className="ev-next-poster">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.poster} alt={`affairs.mt ${e.date} poster`} width={720} height={900} loading="lazy" />
                </a>
              )}
              <div>
                <span className="ev-tag">Next affair</span>
                <p className="ev-date">{e.date}</p>
                <p className="ev-when">
                  <span>{e.weekday}</span> / <span>{e.venue}</span> / <span>{e.time}</span>
                </p>
                <p className="ev-lineup">
                  {e.lineup.map((name, i) => (
                    <span key={name}>
                      {i > 0 && <b aria-hidden>&bull;</b>}
                      {name}
                    </span>
                  ))}
                </p>
                <div className="ev-buy">
                  <a href={e.ticketUrl} target="_blank" rel="noopener" className="btn">
                    Get tickets
                  </a>
                  <span className="ev-price">
                    <strong>{e.price}</strong>
                    {e.ticketName}
                  </span>
                </div>
                <p className="ev-note">Limited capacity. {ageNote}.</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div role="tabpanel" id="panel-past" aria-labelledby="tab-past" className="ev-panel ev-past">
          {past.map((e) => (
            <article key={e.id} className="past-card">
              <a href={instagram} target="_blank" rel="noopener" className="past-art">
                {e.poster ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={e.poster} alt={`affairs.mt ${e.date} poster`} width={720} height={900} loading="lazy" />
                ) : (
                  <span className="past-type">
                    <em>affairs.mt</em>
                    <span>{e.lineup.join(" ")}</span>
                  </span>
                )}
                <span className="past-stamp">Past</span>
              </a>
              <div className="past-meta">
                <span className="past-date">{e.date}</span>
                <span className="past-venue">{e.venue}</span>
              </div>
              <p className="past-lineup">{e.lineup.join(", ")}</p>
              <a href={instagram} target="_blank" rel="noopener" className="past-link">
                See it on Instagram
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
