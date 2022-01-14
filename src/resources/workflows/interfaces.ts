import { ObjectRef } from "../objects/interfaces";

export interface TriggerWorkflowProperties {
  actor?: string | ObjectRef;
  recipients?: string[] | ObjectRef[];
  cancellationKey?: string;
  tenant?: string;
  data?: {
    [key: string]: any;
  };
}

export interface CancelWorkflowProperties {
  recipients?: string[] | ObjectRef;
}

export interface WorkflowRun {
  workflow_run_id: string;
}
