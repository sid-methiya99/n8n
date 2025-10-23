"use client";
import {
  EntityContainer,
  EntityHeader,
  EntitySearch,
} from "@/components/entity-views";
import {
  useCreateWorkflows,
  useSuspenseWorkflows,
} from "../hooks/use-workflows";
import { useUpgradeModal } from "@/hooks/use-upgrade-modal";
import { useRouter } from "next/navigation";
import { useWorkflowsParams } from "../hooks/use-workflows-params";
import { useEntitySearch } from "@/hooks/use-entity-search";

export const WorkflowsList = (props: {}) => {
  const workflows = useSuspenseWorkflows();
  return (
    <div className="flex flex-1 items-center justify-center ">
      {JSON.stringify(workflows.data, null, 2)}
    </div>
  );
};

export const WorkflowsSearch = () => {
  const [params, setParams] = useWorkflowsParams();
  const { searchValue, onSearchChange } = useEntitySearch({
    params,
    setParams,
  });
  return (
    <EntitySearch
      value={searchValue}
      onChange={onSearchChange}
      placeholder="Search Workflows"
    />
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
      search={<WorkflowsSearch />}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
