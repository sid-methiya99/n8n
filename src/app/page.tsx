"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LoginButton } from "./login-button";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";

export default function Home() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
      },
    }),
  );
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full h-screen">
      protected content
      <div className="text-black">{JSON.stringify(data, null, 2)}</div>
      <LoginButton />
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create workflow
      </Button>
    </div>
  );
}
