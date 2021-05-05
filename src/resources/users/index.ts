import { Knock } from "../../knock";
import { IdentifyProperties } from "./interfaces";

export class Users {
  constructor(readonly knock: Knock) {}

  async identify(id: string, properties: IdentifyProperties = {}) {
    if (!id) {
      throw new Error(
        `Incomplete arguments. At a minimum you need to specify 'id'.`,
      );
    }

    const { data } = await this.knock.put(`/v1/users/${id}`, properties);
    return data;
  }

  async getUser(id: string) {
    if (!id) {
      throw new Error(`Incomplete arguments. You must provide a 'id'`);
    }

    const { data } = await this.knock.get(`/v1/users/${id}`);
    return data;
  }
}
