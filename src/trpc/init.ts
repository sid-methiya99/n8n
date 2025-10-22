import { auth } from "@/lib/auth";
import { polarClient } from "@/lib/polar";
import { initTRPC, TRPCError } from "@trpc/server";
import { headers } from "next/headers";
import { cache } from "react";
export const createTRPCContext = cache(async () => {
  return { userId: "user_123" };
});

const t = initTRPC.create({});
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;

export const protectedProcedure = baseProcedure.use(async ({ ctx, next }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Unauthorized",
    });
  }

  return next({ ctx: { ...ctx, session } });
});

export const premiumProcedure = protectedProcedure.use(
  async ({ ctx, next }) => {
    const customer = await polarClient.customers.getStateExternal({
      externalId: ctx.session.user.id,
    });

    if (
      !customer.activeSubscriptions ||
      customer.activeSubscriptions.length == 0
    ) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Active Subscriptions required",
      });
    }

    return next({ ctx: { ...ctx, customer } });
  },
);
