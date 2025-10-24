import { createTRPCRouter, protectedProcedure } from "../init";
import { workFlowsRouters } from "@/features/workflows/servers/routers";

export const appRouter = createTRPCRouter({
  workflows: workFlowsRouters,
});
export type AppRouter = typeof appRouter;
