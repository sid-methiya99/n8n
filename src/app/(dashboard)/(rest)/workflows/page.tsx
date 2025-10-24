import {
  WorkflowError,
  WorkflowLoading,
  WorkflowsContainer,
  WorkflowsList,
} from "@/features/workflows/components/workflows";
import { workflowsParamsLoader } from "@/features/workflows/servers/params-loader";
import { prefetchWorkflows } from "@/features/workflows/servers/prefetch";
import { requireAuth } from "@/lib/auth-utils";
import { HydrateClient } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

type WorkflowProps = {
  searchParams: Promise<SearchParams>;
};
export default async function Workflow({ searchParams }: WorkflowProps) {
  const params = await workflowsParamsLoader(searchParams);
  await requireAuth();
  prefetchWorkflows(params);
  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<WorkflowError />}>
          <Suspense fallback={<WorkflowLoading />}>
            <WorkflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  );
}
