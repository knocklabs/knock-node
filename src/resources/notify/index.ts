import { Knock } from "../../knock";
import { NotifyProperties } from "./interfaces";

export function notify(knock: Knock) {
  return async (
    name: string,
    { actor, recipients, data: notifyData }: NotifyProperties,
  ) => {
    if (!name && !actor && !recipients) {
      throw new Error(
        `Incomplete arguments. At a minimum you need to specify 'name', 'actor', and 'recipients'.`,
      );
    }

    const { data } = await knock.post("/v1/notify", {
      name,
      actor,
      recipients,
      data: notifyData,
    });

    return data;
  };
}
