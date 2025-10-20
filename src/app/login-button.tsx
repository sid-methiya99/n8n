"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export const LoginButton = () => {
  return (
    <div className="mx-4">
      <Button
        onClick={() => {
          console.log("Clicked");
          authClient.signOut;
        }}
      >
        LogOut
      </Button>
    </div>
  );
};
