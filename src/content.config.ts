import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// cross-reference fields hold slugs of entries in other collections;
// relations are declared ONCE and computed in reverse at build time,
// so every connection is automatically bidirectional.
const refs = {
  symbols: z.array(z.string()).default([]),
  locations: z.array(z.string()).default([]),
  projects: z.array(z.string()).default([]),
  music: z.array(z.string()).default([]),
};

// photo fields: safe to leave empty; pages render them only when present.
// paths are relative to public/, e.g. 'photos/primera-posita-01.jpg' (3:2 landscape)
const media = {
  cover: z.string().optional(),
  gallery: z.array(z.string()).default([]),
};

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/music' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    kind: z.string(), // 'EP' | 'Sencillo' | 'Álbum'
    era: z.string().optional(), // project slug this release belongs to
    status: z.enum(['released', 'upcoming']).default('released'),
    order: z.number().default(99),
    spotify: z.string().optional(),
    apple: z.string().optional(),
    tracks: z.array(z.string()).default([]),
    symbols: refs.symbols,
    locations: refs.locations,
    ...media,
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    year: z.string(),
    status: z.enum(['Draft', 'Testing', 'Canon', 'Deprecated', 'Future Seed']).default('Canon'),
    kind: z.string().default('Proyecto'),
    manifesto: z.string().optional(),
    tracks: z.array(z.string()).default([]),
    story: z.string().optional(),
    notes: z.string().optional(),
    credits: z.array(z.string()).default([]),
    symbols: refs.symbols,
    locations: refs.locations,
    ...media,
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/journal' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().optional(),
    ...refs,
    ...media,
  }),
});

const symbols = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/symbols' }),
  schema: z.object({
    name: z.string(),
    readings: z.array(z.string()).default([]),
    appearances: z.array(z.string()).default([]),
    firstAppearance: z.string().optional(),
    order: z.number().default(99),
    locations: refs.locations,
    projects: refs.projects,
    ...media,
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/locations' }),
  schema: z.object({
    name: z.string(),
    region: z.string().optional(),
    connected: z.array(z.string()).default([]),
    order: z.number().default(99),
    symbols: refs.symbols,
    projects: refs.projects,
    ...media,
  }),
});

const creation = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/creation' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.coerce.date().optional(),
    order: z.number().default(99),
    ...refs,
    ...media,
  }),
});

export const collections = { music, projects, journal, symbols, locations, creation };
