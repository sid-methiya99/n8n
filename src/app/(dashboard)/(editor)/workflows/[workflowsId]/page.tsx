import { EditorHeader } from "@/features/editor/components/editor-header";
import {
  Editor,
  EditorError,
  EditorLoading,
} from "@/features/editor/components/file-editor";
import { prefetchSingleWorkflow } from "@/features/workflows/servers/prefetch";
import { requireAuth } from "@/lib/auth-utils";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface WorkFlowsId {
  params: Promise<{
    workflowsId: string;
  }>;
}

export default async function WorkFlowsId({ params }: WorkFlowsId) {
  await requireAuth();
  const { workflowsId } = await params;
  prefetchSingleWorkflow(workflowsId);
  return (
    <HydrateClient>
      <ErrorBoundary fallback={<EditorError />}>
        <Suspense fallback={<EditorLoading />}>
          <EditorHeader workflowId={workflowsId} />
          <main className="flex-1">
            <Editor workflowId={workflowsId} />
          </main>
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
