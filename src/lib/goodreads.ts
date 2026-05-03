import { XMLParser } from 'fast-xml-parser';

export interface GoodreadsBook {
  title: string;
  author: string;
  cover: string;
  goodreadsLink: string;
  rating: number;
  yearRead: number | null;
  tags: string[];
}

// Replace "abhinavv725" with your numeric Goodreads user ID if this returns empty.
// Find it at: goodreads.com/user/show/<your-username> — the number in the redirect URL.
const RSS_READ =
  'https://www.goodreads.com/review/list_rss/146623685?shelf=read&sort=date_read&order=d&per_page=200';

const RSS_READING =
  'https://www.goodreads.com/review/list_rss/146623685?shelf=currently-reading&sort=date_updated&order=d&per_page=10';

export async function fetchCurrentlyReading(): Promise<GoodreadsBook[]> {
  return fetchRSS(RSS_READING);
}

export async function fetchGoodreadsBooks(): Promise<GoodreadsBook[]> {
  return fetchRSS(RSS_READ);
}

async function fetchRSS(url: string): Promise<GoodreadsBook[]> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; resume-site/1.0)' },
    });
    if (!res.ok) {
      console.warn(`[goodreads] RSS fetch failed: ${res.status}`);
      return [];
    }

    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: '__cdata' });
    const parsed = parser.parse(xml);
    const raw = parsed?.rss?.channel?.item ?? [];
    const items: unknown[] = Array.isArray(raw) ? raw : [raw];

    return items.map((item: any) => {
      const readAt: string = item.user_read_at ?? '';
      const d = readAt ? new Date(readAt) : null;
      const year = d && !isNaN(d.getTime()) ? d.getFullYear() : null;

      return {
        title: extractText(item.title),
        author: String(item.author_name ?? ''),
        cover:
          extractText(item.book_large_image_url) ||
          extractText(item.book_medium_image_url) ||
          extractText(item.book_image_url) ||
          '',
        goodreadsLink: extractUrl(item.link),
        rating: parseInt(String(item.user_rating ?? '0'), 10),
        yearRead: year,
        tags: String(item.user_shelves ?? '')
          .split(',')
          .map(t => t.trim())
          .filter(t => t.length > 0),
      };
    });
  } catch (err) {
    console.warn('[goodreads] RSS parse error:', err);
    return [];
  }
}

function extractText(val: unknown): string {
  if (typeof val === 'string') return val;
  if (val && typeof val === 'object') {
    if ('__cdata' in (val as any)) return String((val as any).__cdata);
    if ('#text' in (val as any)) return String((val as any)['#text']);
  }
  return '';
}

function extractUrl(val: unknown): string {
  if (typeof val === 'string') return val;
  if (val && typeof val === 'object') {
    if ('__cdata' in (val as any)) return String((val as any).__cdata);
    if ('#text' in (val as any)) return String((val as any)['#text']);
    if ('href' in (val as any)) return String((val as any).href);
  }
  return '';
}

export function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]/g, '');
}
