export interface NotifyProperties {
  actor: string;
  recipients?: string[];
  data?: {
    [key: string]: any;
  };
}
