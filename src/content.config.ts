import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// cross-reference fields hold slugs of entries in other collections;
// pages render a "Related" block only for references that resolve.
const refs = {
  symbols: z.array(z.string()).default([]),
  locations: z.array(z.string()).default([]),
  projects: z.array(z.string()).default([]),
};

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
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/journal' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().optional(),
    ...refs,
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
  }),
});

export const collections = { projects, journal, symbols, locations, creation };
