export interface IdentifyProperties {
  name?: string;
  email?: string;
  [key: string]: any;
}

export interface User {
  id: string;
  name: string;
  email: string;
  // Knock system properties
  phone_number?: string;
  avatar?: string;
  created_at?: string;
  updated_at?: string;
  // Can have anything else
  [key: string]: any;
}

export interface BulkIdentifyUser extends IdentifyProperties {
  id: string;
}

export interface UserFeedOptions {
  page_size?: number;
  after?: string;
  before?: string;
  source?: string;
  tenant?: string;
  status?: "unread" | "unseen" | "all";
}
