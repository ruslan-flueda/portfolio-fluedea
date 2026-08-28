import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(['ready', 'in-process']),
      order: z.number().int().positive(),
      size: z.enum(['wide', 'half']),
      cover: image(),
      ribbon: z.enum(['dovodo', 'payment', 'split']).optional(),
      href: z.string().optional(),
      published: z.boolean().default(true),
    }),
});

export const collections = { projects };
