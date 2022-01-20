import { ObjectRef } from "../objects/interfaces";

export interface TriggerWorkflowProperties<T = { [key: string]: any }> {
  actor?: string | ObjectRef;
  recipients?: string[] | ObjectRef[];
  cancellationKey?: string;
  tenant?: string;
  data?: T;
}

export interface CancelWorkflowProperties {
  recipients?: string[] | ObjectRef;
}

export interface WorkflowRun {
  workflow_run_id: string;
}
