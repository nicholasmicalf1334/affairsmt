import { cacheLife } from "next/cache";

export type Post = { id: string; image: string; href: string; caption: string };

// Shown until INSTAGRAM_TOKEN is set (or if the API call fails).
const fallback: Post[] = [
  { id: "f1", image: "/img/feed/tickets-qr.webp", caption: "28.11.26 Graffiti Club" },
  { id: "f2", image: "/img/dj/mari-mars.webp", caption: "Mari Mars" },
  { id: "f3", image: "/img/feed/giveaway.webp", caption: "Win tickets" },
  { id: "f4", image: "/img/feed/haunted-rooftop.webp", caption: "30.10 Haunted Rooftop" },
  { id: "f5", image: "/img/feed/barracuda-oct.webp", caption: "02.10 Barracuda" },
  { id: "f6", image: "/img/feed/oct-lineup.webp", caption: "Nik, Keii, Faith, Presko" },
].map((p) => ({ ...p, href: "https://www.instagram.com/affairs.mt/" }));

type IgMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
};

function shortCaption(text = "") {
  const line = text.split("\n")[0].replace(/[#@]\S+/g, "").trim();
  return line.length > 34 ? line.slice(0, 32).trimEnd() + "..." : line;
}

export async function getPosts(limit = 6): Promise<Post[]> {
  "use cache";
  cacheLife("hours");

  const token = process.env.INSTAGRAM_TOKEN;
  if (!token) return fallback.slice(0, limit);

  try {
    const fields = "id,caption,media_type,media_url,thumbnail_url,permalink";
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${token}`,
    );
    if (!res.ok) return fallback.slice(0, limit);
    const json = (await res.json()) as { data: IgMedia[] };
    return json.data.map((m) => ({
      id: m.id,
      image: m.media_type === "VIDEO" ? (m.thumbnail_url ?? m.media_url) : m.media_url,
      href: m.permalink,
      caption: shortCaption(m.caption),
    }));
  } catch {
    return fallback.slice(0, limit);
  }
}
