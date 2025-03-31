import { query } from './_generated/server';

export const get = query({
  args: {},
  handler: async (ctx) => {
    const highlights = await ctx.db.query('highlights').collect();
    const sortedHighlights = highlights.sort((a, b) => b.year - a.year);
    return Promise.all(
      sortedHighlights.map(async (highlight) => ({
        ...highlight,
        imageUrl: await ctx.storage.getUrl(highlight.imageUrl),
      }))
    );
  },
});
