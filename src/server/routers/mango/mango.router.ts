import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const prisma = new PrismaClient();

const mangoes = [
  { name: "Hafus", price: 800, stock: 10 },
  { name: "Kesar", price: 0, stock: 0 },
  { name: "Totapuri", price: 600, stock: 8 },
  { name: "Rajapuri", price: 0, stock: 0 },
  { name: "Daseri", price: 400, stock: 15 },
  { name: "Langdo", price: 0, stock: 0 },
];

export const mangoRouter = createTRPCRouter({
  /** List all mangoes */
  listAll: publicProcedure.input(z.undefined()).query(async () => {
    return await prisma.mango.findMany();
  }),

  /** Get price and discount of given mangoes */
  getPricingDetailsByIds: publicProcedure
    .input(z.object({ ids: z.array(z.number()) }))
    .query(async ({ input: { ids } }) => {
      const mangoes = await prisma.mango.findMany({
        where: {
          id: {
            in: ids,
          },
        },
        select: {
          id: true,
          price: true,
          discount: true,
          name: true,
        },
      });

      return { mangoes };
    }),

  /** @deprecated */
  addAll: publicProcedure.input(z.undefined()).mutation(async () => {
    const ret = await prisma.mango.createMany({
      data: mangoes,
    });

    console.log(ret);
  }),
});
