import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  highlights: defineTable({
    brandIcon: v.string(),
    ctaUrl: v.string(),
    description: v.string(),
    imageUrl: v.id("_storage"),
    title: v.string(),
    year: v.float64(),
  }),
});
