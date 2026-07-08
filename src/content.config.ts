import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/journal' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().optional(),
  }),
});

const symbols = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/symbols' }),
  schema: z.object({
    name: z.string(),
    readings: z.array(z.string()).default([]),
    appearances: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/locations' }),
  schema: z.object({
    name: z.string(),
    region: z.string().optional(),
    connected: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { projects, journal, symbols, locations };
