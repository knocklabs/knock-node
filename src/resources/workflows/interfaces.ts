import { ObjectRef } from "../objects/interfaces";

export interface TriggerWorkflowProperties<T = { [key: string]: any }> {
  actor?: Actor;
  recipients?: Recipient[];
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

export type Recipient = string | ObjectRef;
export type Actor = Recipient;
