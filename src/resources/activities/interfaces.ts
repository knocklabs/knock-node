import { User } from "../users/interfaces";
import { Object } from "../objects/interfaces";

export interface Activity {
  id: string;
  data: any;
  actor: User | Object;
  recipient: User | Object;
  inserted_at: string;
  updated_at: string;

  // only when paginating
  __cursor?: string;
}
