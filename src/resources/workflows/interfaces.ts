import { ObjectRef, SetObjectProperties } from "../objects/interfaces";
import { IdentifyProperties } from "../users/interfaces";
import { PaginationOptions } from "../../common/interfaces";

export interface TriggerWorkflowProperties<T = { [key: string]: any }> {
  actor?: Actor | ActorWithUpsert;
  recipients?: (Recipient | RecipientWithUpsert)[];
  cancellationKey?: string;
  tenant?: string;
  data?: T;
}

export interface CancelWorkflowProperties {
  recipients?: Recipient[];
}

export interface WorkflowRun {
  workflow_run_id: string;
}

export enum DaysOfWeek {
  Mon = "mon",
  Tue = "tue",
  Wed = "wed",
  Thu = "thu",
  Fri = "fri",
  Sat = "sat",
  Sun = "sun",
}

export enum RepeatFrequency {
  Monthly = "monthly",
  Weekly = "weekly",
  Daily = "daily",
  Hourly = "hourly",
}

export type ScheduleRepeatProperties = {
  frequency: RepeatFrequency;
  interval?: number;
  day_of_month?: number;
  days?: DaysOfWeek[] | "weekdays" | "weekends";
  hours?: number;
  minutes?: number;
};

export interface CreateSchedulesProps {
  recipients: (Recipient | RecipientWithUpsert)[];
  actor?: Recipient | RecipientWithUpsert | null;
  scheduled_at?: string;
  repeats?: ScheduleRepeatProperties[];
  tenant?: string;
  data?: { [key: string]: any };
}

export interface UpdateSchedulesProps
  extends Omit<CreateSchedulesProps, "recipients"> {
  schedule_ids: string[];
}

export interface ListSchedulesProps extends PaginationOptions {
  recipients?: Recipient[];
  tenant?: string;
}

export interface DeleteSchedulesProps {
  schedule_ids: string[];
}

export interface Schedule {
  id: string;
  recipient: Recipient;
  actor: Recipient | null;
  tenant: string | null;
  workflow: string;
  data: { [key: string]: any };
  last_occurrence_at: string | null;
  next_occurrence_at: string | null;
  inserted_at: string;
  updated_at: string;
  repeats: ScheduleRepeatProperties[];

  // only when paginating
  __cursor?: string;
}

export type Recipient = string | ObjectRef;
export type Actor = Recipient;

export interface UserWithUpsert extends IdentifyProperties {
  id: string;
}

export type ObjectWithUpsert = ObjectRef & SetObjectProperties;

export type RecipientWithUpsert = UserWithUpsert | ObjectWithUpsert;
export type ActorWithUpsert = RecipientWithUpsert;
