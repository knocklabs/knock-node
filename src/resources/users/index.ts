import { Knock } from "../../knock";
import { IdentifyProperties } from "./interfaces";

export class Users {
  constructor(readonly knock: Knock) {}

  async identify(userId: string, properties: IdentifyProperties = {}) {
    if (!userId) {
      throw new Error(
        `Incomplete arguments. At a minimum you need to specify 'userId'.`,
      );
    }

    const { data } = await this.knock.put(`/v1/users/${userId}`, properties);
    return data;
  }

  async get(userId: string) {
    if (!userId) {
      throw new Error(`Incomplete arguments. You must provide a 'userId'`);
    }

    const { data } = await this.knock.get(`/v1/users/${userId}`);
    return data;
  }

  async delete(userId: string) {
    if (!userId) {
      throw new Error(`Incomplete arguments. You must provide a 'userId'`);
    }

    const { data } = await this.knock.delete(`/v1/users/${userId}`);
    return data;
  }
}
