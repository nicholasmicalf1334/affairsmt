// All editable site content lives here.

export const site = {
  name: "affairs.mt",
  instagram: "https://www.instagram.com/affairs.mt/",
  handle: "@affairs.mt",
  year: "2026",
};

export const nextAffair = {
  weekday: "Saturday",
  day: "28",
  month: "11",
  monthName: "November",
  year: "2026",
  venue: "Graffiti Club",
  area: "Paceville",
  doors: "10PM",
  close: "4AM",
  ticketUrl: "https://biljett.mt/events/affairs-mt-3/",
  ticketName: "Early Bird",
  price: "€8",
  ageNote: "17+ | Physical ID required",
  sound: ["House", "Tech", "Grooves", "All night long"],
  lineup: [
    { name: "Sareon", img: "/img/dj/sareon.webp" },
    { name: "Jukeboxsimmy", img: "/img/dj/jukeboxsimmy.webp" },
    { name: "Faith", img: "/img/dj/faith.webp" },
    { name: "Nik", img: "/img/dj/nik.webp" },
    { name: "Dejii", img: "/img/dj/dejii.webp" },
    { name: "Riolo", img: "/img/dj/riolo.webp" },
    { name: "Mari Mars", img: "/img/dj/mari-mars.webp" },
  ],
  blurb: [
    "AFFAIRS.mt is back this winter, and we're going bigger and better.",
    "New season, bigger plans and nights made for the right crowd. Expect a fresh energy, a solid lineup and the kind of atmosphere that keeps you coming back for more.",
    "We're just getting started.",
  ],
  closer: "This winter belongs to AFFAIRS.",
};

export type AffairEvent = {
  id: string;
  date: string;
  weekday: string;
  venue: string;
  time?: string;
  lineup: string[];
  poster?: string;
  ticketUrl?: string;
  price?: string;
  ticketName?: string;
};

// Newest first. Move an event from upcoming to past once it has happened.
export const events: { upcoming: AffairEvent[]; past: AffairEvent[] } = {
  upcoming: [
    {
      id: "affairs-mt-3",
      date: "28.11.26",
      weekday: "Saturday",
      venue: "Graffiti Club, Paceville",
      time: "10PM - 4AM",
      lineup: nextAffair.lineup.map((d) => d.name),
      poster: "/img/feed/graffiti-club-qr.webp",
      ticketUrl: nextAffair.ticketUrl,
      price: nextAffair.price,
      ticketName: nextAffair.ticketName,
    },
  ],
  past: [
    {
      id: "oct-30",
      date: "30.10.26",
      weekday: "Friday",
      venue: "Barracuda Rooftop Lounge",
      time: "21:30 - 1:30",
      lineup: ["Jukeboxsimmy", "Sareon", "Faith", "Nik"],
    },
    {
      id: "oct-02",
      date: "02.10.26",
      weekday: "Friday",
      venue: "Barracuda Rooftop Lounge",
      lineup: ["Nik", "Keii", "Faith", "Presko"],
      poster: "/img/feed/barracuda-oct.webp",
    },
  ],
};
