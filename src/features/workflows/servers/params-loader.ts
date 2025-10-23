import { createLoader } from "nuqs/server";
import { workflowsParam } from "../params";

export const workflowsParamsLoader = createLoader(workflowsParam);
