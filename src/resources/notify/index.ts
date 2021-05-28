import { Knock } from "../../knock";
import { NotifyProperties, CancelNotifyProperties } from "./interfaces";

export function notify(knock: Knock) {
  return async (
    name: string,
    { actor, recipients, cancelationKey, data: notifyData }: NotifyProperties,
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
      cancelation_key: cancelationKey,
      data: notifyData,
    });

    return data;
  };
}

export function cancelNotify(knock: Knock) {
  return async (
    name: string,
    cancelationKey: string,
    { recipients }: CancelNotifyProperties = {},
  ) => {
    if (!name && !cancelationKey) {
      throw new Error(
        `Incomplete arguments. At a minimum you need to specify 'name' and 'cancelationKey'.`,
      );
    }

    const { data } = await knock.post("/v1/notify/cancel", {
      name,
      cancelation_key: cancelationKey,
      recipients,
    });

    return data;
  };
}
