export interface NotifyProperties {
  actor: string;
  recipients?: string[];
  cancelationKey?: string;
  data?: {
    [key: string]: any;
  };
}

export interface CancelNotifyProperties {
  recipients?: string[];
}
