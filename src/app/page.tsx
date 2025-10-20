import { requireAuth } from "@/lib/auth-utils";
import { LoginButton } from "./login-button";

export default async function Home() {
  await requireAuth();
  return (
    <div className="bg-red-500">
      protected content
      <LoginButton />
    </div>
  );
}
