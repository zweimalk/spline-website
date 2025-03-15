import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const highlights = await ctx.db.query("highlights").collect();
    return Promise.all(
      highlights.map(async (highlight) => ({
        ...highlight,
        imageUrl: await ctx.storage.getUrl(highlight.imageUrl),
      }))
    );
  },
});
