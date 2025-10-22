import { requireAuth } from "@/lib/auth-utils";

interface WorkFlowsId {
  params: Promise<{
    workflowsId: string;
  }>;
}
export default async function WorkFlowsId({ params }: WorkFlowsId) {
  await requireAuth();
  const { workflowsId } = await params;
  return <div>CredentialsId: {workflowsId}</div>;
}
