import { requireAuth } from "@/lib/auth-utils";

export default async function Credentials() {
  await requireAuth();
  return <div>Credentials</div>;
}
