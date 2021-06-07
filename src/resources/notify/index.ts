import { Knock } from "../../knock";

export function notify(knock: Knock) {
  // This is just an alias to triggering the workflow
  return knock.workflows.trigger;
}
