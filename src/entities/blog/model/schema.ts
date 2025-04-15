import { z } from "zod";

export enum BlogCategory {
  INTERESTING = "INTERESTING_FACTS",
  TOP_OF_THE_DAY = "TOP_OF_THE_DAY",
  FEATURED = "FEATURED",
}

export const blogSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  readDurationMinutes: z.number(),
  createdAt: z.string(),
  categories: z.array(z.nativeEnum(BlogCategory)),
});

export type Blog = z.infer<typeof blogSchema>;
