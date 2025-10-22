import { requireAuth } from "@/lib/auth-utils";

interface ExecutionId {
  params: Promise<{
    executionId: string;
  }>;
}
export default async function ExecutionId({ params }: ExecutionId) {
  await requireAuth();
  const { executionId } = await params;
  return <div>CredentialsId: {executionId}</div>;
}
