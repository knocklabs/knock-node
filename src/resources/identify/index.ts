import { Knock } from "../../knock";
import { IdentifyProperties } from "./interfaces";

export function identify(knock: Knock) {
  return async (userId: string, properties: IdentifyProperties = {}) => {
    if (!userId) {
      throw new Error(
        `Incomplete arguments. At a minimum you need to specify 'userId'.`,
      );
    }

    const { data } = await knock.put(`/v1/users/${userId}`, properties);
    return data;
  };
}
