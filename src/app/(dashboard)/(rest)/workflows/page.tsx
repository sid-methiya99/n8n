import { requireAuth } from "@/lib/auth-utils";

export default async function Workflow() {
  await requireAuth();
  return <div>Workflow</div>;
}
