import { Knock } from "../../knock";
import {
  MethodOptions,
  PaginatedEntriesResponse,
} from "../../common/interfaces";
import {
  CancelWorkflowProperties,
  TriggerWorkflowProperties,
  CreateSchedulesProps,
  UpdateSchedulesProps,
  ListSchedulesProps,
  DeleteSchedulesProps,
  Schedule,
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
    { idempotencyKey }: MethodOptions = {}
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

  async createSchedules(
    workflowKey: string,
    params: CreateSchedulesProps,
  ): Promise<Schedule[]> {
    const { data } = await this.knock.post("/v1/schedules", {
      ...params,
      workflow: workflowKey,
    });

    return data;
  }

  async updateSchedules(params: UpdateSchedulesProps): Promise<Schedule[]> {
    const { data } = await this.knock.put("/v1/schedules", params);

    return data;
  }

  async listSchedules(
    workflowKey: string,
    params: ListSchedulesProps = {},
  ): Promise<PaginatedEntriesResponse<Schedule>> {
    const { data } = await this.knock.get("/v1/schedules", {
      ...params,
      workflow: workflowKey,
    });

    return data;
  }

  async deleteSchedules(params: DeleteSchedulesProps): Promise<Schedule[]> {
    const { data } = await this.knock.delete("/v1/schedules", params);

    return data;
  }
}
