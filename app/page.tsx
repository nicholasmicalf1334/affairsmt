import Wordmark from "@/components/Wordmark";
import Spray from "@/components/Spray";
import { site, nextAffair, pastAffairs } from "@/lib/site";

export default function Home() {
  const n = nextAffair;
  return (
    <>
      <header className="topbar">
        <a href="#top" className="topbar-mark">
          <Wordmark />
        </a>
        <nav className="topbar-nav">
          <a href="#lineup">Lineup</a>
          <a href={site.instagram} target="_blank" rel="noopener">Instagram</a>
          <a href={site.ticketUrl} className="btn btn-sm" target="_blank" rel="noopener">Tickets</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <Spray className="hero-spray" />
          <div className="hero-inner">
            <p className="kicker">{site.tagline}</p>
            <h1 className="hero-title">
              <Wordmark className="chrome" />
            </h1>
            <div className="hero-next">
              <span className="kicker">Next affair</span>
              <span className="hero-date">{n.day}.{n.month}</span>
              <span className="hero-venue">{n.venue}</span>
            </div>
          </div>
          <a href="#lineup" className="scroll-cue" aria-label="Scroll to lineup">
            <span />
          </a>
        </section>

        <section id="lineup" className="lineup">
          <div className="lineup-head">
            <span className="kicker">Lineup</span>
            <span className="kicker kicker-dim">{n.day} {n.monthName} {n.year}</span>
          </div>
          <ol className="lineup-list">
            {n.lineup.map((dj, i) => (
              <li key={dj}>
                <span className="lineup-no">{String(i + 1).padStart(2, "0")}</span>
                <span className="lineup-name">{dj}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="ticket">
          <Spray variant="slash" className="ticket-spray" />
          <div className="ticket-grid">
            <div>
              <span className="kicker">Date</span>
              <p className="ticket-val">{n.day}.{n.month}.{n.year.slice(2)}</p>
            </div>
            <div>
              <span className="kicker">Time</span>
              <p className="ticket-val">{n.doors} - {n.close}</p>
            </div>
            <div>
              <span className="kicker">Venue</span>
              <p className="ticket-val">{n.venue}</p>
              <p className="ticket-sub">{n.area}</p>
            </div>
          </div>
          <a href={site.ticketUrl} className="btn btn-lg" target="_blank" rel="noopener">
            Get tickets
          </a>
        </section>

        <section className="past">
          <span className="kicker">Past affairs</span>
          <ul>
            {pastAffairs.map((p) => (
              <li key={p.date}>
                <span className="past-date">{p.date}</span>
                <span className="past-title">{p.title}</span>
                <span className="past-venue">{p.venue}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-big">AFFAIRS.MT</p>
        <div className="footer-row">
          <a href={site.instagram} target="_blank" rel="noopener">@affairs.mt</a>
          <span>18+ only. Drink responsibly.</span>
          <span>&copy; {site.year} affairs.mt</span>
        </div>
      </footer>
    </>
  );
}
