import HeroLogo from "@/components/HeroLogo";
import Events from "@/components/Events";
import Lineup from "@/components/Lineup";
import { getPosts } from "@/lib/instagram";
import { site, nextAffair as n, events } from "@/lib/site";

const tilts = [-3, 2.2, -1.4, 3, -2.4, 1.6];

export default async function Home() {
  const posts = await getPosts(6);

  return (
    <>
      <header className="bar">
        <a href="#top" className="bar-logo" aria-label="affairs.mt home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/wordmark.png" alt="" width={900} height={412} />
        </a>
        <nav className="bar-nav">
          <a href="#events">Events</a>
          <a href="#lineup">Lineup</a>
          <a href="#feed">Instagram</a>
          <a href={n.ticketUrl} className="bar-ticket" target="_blank" rel="noopener">
            Tickets <span>{n.price}</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero-date">
            {n.weekday} {n.day} {n.monthName} {n.year}
          </p>
          <h1 className="sr-only">affairs.mt</h1>
          <HeroLogo />
          <p className="hero-where">
            {n.venue}, {n.area} <i aria-hidden /> {n.doors} - {n.close}
          </p>
          <p className="hero-sound">{n.sound.join(" - ")}</p>

          <div className="table">
            <a href={n.ticketUrl} target="_blank" rel="noopener" className="stub">
              <span className="stub-main">
                <span className="stub-top">Admit one</span>
                <span className="stub-title">Affairs - {n.ticketName}</span>
                <span className="stub-meta">
                  {n.day}.{n.month}.{n.year.slice(2)} / {n.venue}
                </span>
                <span className="stub-note">{n.ageNote}</span>
              </span>
              <span className="stub-tear">
                <span className="stub-price">{n.price}</span>
                <span className="stub-cta">Buy now</span>
              </span>
            </a>

            <div className="napkin" aria-label="Good people, better nights">
              <span>Good</span>
              <span>people</span>
              <span>better</span>
              <span>nights</span>
              <svg viewBox="0 0 24 22" aria-hidden>
                <path d="M12 20s-8.5-5.2-8.5-11.3C3.5 5.3 6 3.5 8.5 3.5c1.6 0 2.8.8 3.5 2 .7-1.2 1.9-2 3.5-2 2.5 0 5 1.8 5 5.2C20.5 14.8 12 20 12 20z" />
              </svg>
            </div>
          </div>
        </section>

        <section id="lineup" className="lineup">
          <p className="lineup-label">DJ Lineup</p>
          <Lineup djs={n.lineup} />
        </section>

        <section className="story">
          <p className="story-lead">{n.blurb[0]}</p>
          <div className="story-side">
            <p>{n.blurb[1]}</p>
            <p className="story-hand">{n.blurb[2]}</p>
            <a href={n.ticketUrl} target="_blank" rel="noopener" className="btn">
              Tickets available now
            </a>
            <p className="story-small">Limited capacity. {n.ageNote}.</p>
          </div>
        </section>

        <Events upcoming={events.upcoming} past={events.past} instagram={site.instagram} ageNote={n.ageNote} />

        <section id="feed" className="feed">
          <div className="feed-head">
            <a href={site.instagram} target="_blank" rel="noopener" className="feed-handle">
              {site.handle}
            </a>
            <a href={site.instagram} target="_blank" rel="noopener" className="feed-follow">
              Follow on Instagram
            </a>
          </div>
          <ul className="feed-grid">
            {posts.map((p, i) => (
              <li key={p.id} style={{ "--tilt": `${tilts[i % tilts.length]}deg` } as React.CSSProperties}>
                <a href={p.href} target="_blank" rel="noopener" className="polaroid">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.caption || "affairs.mt on Instagram"} loading="lazy" width={720} height={900} />
                  <span>{p.caption}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="foot">
        <div className="foot-top">
          <p className="foot-closer">{n.closer}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/wordmark.png" alt="affairs.mt" width={900} height={412} className="foot-mark" loading="lazy" />
        </div>
        <div className="foot-row">
          <a href={site.instagram} target="_blank" rel="noopener">Instagram</a>
          <a href={n.ticketUrl} target="_blank" rel="noopener">Tickets</a>
          <span>{n.ageNote}</span>
          <span>&copy; {site.year} affairs.mt</span>
        </div>
      </footer>
    </>
  );
}
