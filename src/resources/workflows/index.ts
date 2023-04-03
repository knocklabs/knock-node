import { Knock } from "../../knock";
import { KnockMethodOptions } from "../../common/interfaces";
import {
  CancelWorkflowProperties,
  TriggerWorkflowProperties,
  WorkflowRun,
} from "./interfaces";

export class Workflows {
  constructor(readonly knock: Knock) {}

  async trigger(
    workflowKey: string,
    {
      actor,
      recipients,
      cancellationKey,
      tenant,
      data: notifyData,
    }: TriggerWorkflowProperties,
    { idempotencyKey }: KnockMethodOptions = {}
  ): Promise<WorkflowRun> {
    if (!workflowKey && !recipients) {
      throw new Error(
        `Incomplete arguments. At a minimum you need to specify 'workflowKey' and 'recipients'.`,
      );
    }

    const options = idempotencyKey ? { headers: { 'Idempotency-Key': idempotencyKey } } : {};

    const { data } = await this.knock.post(
      `/v1/workflows/${workflowKey}/trigger`,
      {
        actor,
        recipients,
        cancellation_key: cancellationKey,
        tenant,
        data: notifyData,
      },
      options
    );

    return data;
  }

  async cancel(
    workflowKey: string,
    cancellationKey: string,
    { recipients }: CancelWorkflowProperties = {},
  ) {
    if (!workflowKey && !cancellationKey) {
      throw new Error(
        `Incomplete arguments. At a minimum you need to specify 'workflowKey' and 'cancellationKey'.`,
      );
    }

    const { data } = await this.knock.post(
      `/v1/workflows/${workflowKey}/cancel`,
      {
        cancellation_key: cancellationKey,
        recipients,
      },
    );

    return data;
  }
}
