import { useQueryStates } from "nuqs";
import { workflowsParam } from "../params";

export const useWorkflowsParams = () => {
  return useQueryStates(workflowsParam);
};
