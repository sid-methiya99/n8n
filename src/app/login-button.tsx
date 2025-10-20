"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const LoginButton = () => {
  const router = useRouter();
  return (
    <div className="mx-4">
      <Button
        onClick={async () => {
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/login"); // redirect to login page
              },
            },
          });
        }}
      >
        LogOut
      </Button>
    </div>
  );
};
