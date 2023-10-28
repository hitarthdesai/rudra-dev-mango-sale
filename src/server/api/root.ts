import { createTRPCRouter } from "@/server/api/trpc";
import { mangoRouter } from "../routers/mango/mango.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  mango: mangoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
