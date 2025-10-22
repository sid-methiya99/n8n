"use client";
import { EntityContainer, EntityHeader } from "@/components/entity-views";
import { useSuspenseWorkflows } from "../hooks/use-workflows";

export const WorkflowsList = (props: {}) => {
  const workflows = useSuspenseWorkflows();
  return (
    <div className="flex flex-1 items-center justify-center ">
      {JSON.stringify(workflows.data, null, 2)}
    </div>
  );
};

export const WorkFlowsHeader = ({ disabled }: { disabled?: boolean }) => {
  return (
    <>
      <EntityHeader
        title="Workflows"
        description="Create and manage your workflows"
        onNew={() => {}}
        newButtonLabel="New Workflow"
        disabled={disabled}
        isCreating={false}
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
