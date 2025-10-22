"use client";
import { EntityContainer, EntityHeader } from "@/components/entity-views";
import {
  useCreateWorkflows,
  useSuspenseWorkflows,
} from "../hooks/use-workflows";
import { useUpgradeModal } from "@/hooks/use-upgrade-modal";
import { useRouter } from "next/navigation";

export const WorkflowsList = (props: {}) => {
  const workflows = useSuspenseWorkflows();
  return (
    <div className="flex flex-1 items-center justify-center ">
      {JSON.stringify(workflows.data, null, 2)}
    </div>
  );
};

export const WorkFlowsHeader = ({ disabled }: { disabled?: boolean }) => {
  const { handleError, modal } = useUpgradeModal();
  const createWorkflow = useCreateWorkflows();
  const router = useRouter();
  const handleCreate = () => {
    createWorkflow.mutate(undefined, {
      onSuccess: (data) => {
        router.push(`/workflows/${data.id}`);
      },
      onError: (error) => {
        handleError(error);
      },
    });
  };
  return (
    <>
      {modal}
      <EntityHeader
        title="Workflows"
        description="Create and manage your workflows"
        onNew={handleCreate}
        newButtonLabel="New Workflow"
        disabled={disabled}
        isCreating={createWorkflow.isPending}
      />
    </>
  );
};
export const WorkflowsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer
      header={<WorkFlowsHeader />}
      search={<></>}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
