import { ObjectRef, SetObjectProperties } from "../objects/interfaces";
import { IdentifyProperties } from "../users/interfaces";

export interface TriggerWorkflowProperties<T = { [key: string]: any }> {
  actor?: Actor | ActorWithUpsert;
  recipients?: (Recipient | RecipientWithUpsert)[];
  cancellationKey?: string;
  tenant?: string;
  data?: T;
}

export interface TriggerWorkflowOptions {
  idempotencyKey?: string;
}

export interface CancelWorkflowProperties {
  recipients?: Recipient[];
}

export interface WorkflowRun {
  workflow_run_id: string;
}

export type Recipient = string | ObjectRef;
export type Actor = Recipient;

export interface UserWithUpsert extends IdentifyProperties {
  id: string;
}

export type ObjectWithUpsert = ObjectRef & SetObjectProperties;

export type RecipientWithUpsert = UserWithUpsert | ObjectWithUpsert;
export type ActorWithUpsert = RecipientWithUpsert;
