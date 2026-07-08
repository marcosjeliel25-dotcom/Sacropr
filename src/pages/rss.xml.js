import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = (await getCollection('journal')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'SACRO — Diario',
    description: 'Sacro — música y mundo.',
    site: context.site,
    items: entries.map((e) => ({
      title: e.data.title ?? e.body?.trim().slice(0, 80) ?? 'Entrada',
      description: e.body?.trim() ?? '',
      pubDate: e.data.date,
      link: `/Sacropr/diario`,
    })),
  });
}
