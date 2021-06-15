export interface TriggerWorkflowProperties {
  actor: string;
  recipients?: string[];
  cancellationKey?: string;
  tenant?: string;
  data?: {
    [key: string]: any;
  };
}

export interface CancelWorkflowProperties {
  recipients?: string[];
}

export interface WorkflowRun {
  workflow_run_id: string;
}
