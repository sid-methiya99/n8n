import { requireAuth } from "@/lib/auth-utils";

export default async function Home() {
  await requireAuth();
  return <div className="bg-red-500">protected content</div>;
}
