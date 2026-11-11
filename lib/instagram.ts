export type Post = { id: string; image: string; href: string; caption: string };

// Curated posts shown in the feed, each linking to the Instagram profile.
// Kept fully static so the page is prerendered and never re-rendered at runtime.
const posts: Post[] = [
  { id: "f1", image: "/img/feed/tickets-qr.webp", caption: "28.11.26 Graffiti Club" },
  { id: "f3", image: "/img/feed/giveaway.webp", caption: "Win tickets" },
  { id: "f4", image: "/img/feed/haunted-rooftop.webp", caption: "30.10 Haunted Rooftop" },
  { id: "f5", image: "/img/feed/barracuda-oct.webp", caption: "02.10 Barracuda" },
  { id: "f6", image: "/img/feed/oct-lineup.webp", caption: "Nik, Keii, Faith, Presko" },
].map((p) => ({ ...p, href: "https://www.instagram.com/affairs.mt/" }));

export function getPosts(limit = 6): Post[] {
  return posts.slice(0, limit);
}
