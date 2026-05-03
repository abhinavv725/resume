import { defineCollection, z } from 'astro:content';

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number().min(1).max(5),
    yearRead: z.number(),
    tags: z.array(z.string()).default([]),
    // Cover: provide either a direct URL (e.g. Goodreads image) or an ISBN.
    // If both are provided, cover takes priority.
    // If neither is provided, a placeholder is shown.
    cover: z.string().url().optional(),
    isbn: z.string().optional(),
    goodreadsLink: z.string().url().optional(),
  }),
});

export const collections = { books };
