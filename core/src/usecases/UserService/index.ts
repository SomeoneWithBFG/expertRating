import R from "@repository";

import { IUserService } from "../layerInterfaces";

import {
  IUserDTM,
} from "@models/dtm/User";

class UserService implements IUserService {
  getList = async () => {
    const res = await R.db.users.getList();

    if (res.error) return { error: res.error };
    return { value: res.value };
  };

  getByID = async (id: string) => {
    const res = await R.db.users.getByID(id);

    if (res.error) return { error: res.error };
    return { value: res.value };
  }

  create = async (data: IUserDTM) => {
      const res = await R.db.users.create(data);

      if (res.error) return { error: res.error };
      return { value: res.value };
  };

  update = async (data: IUserDTM) => {
    if (!data.id)
      return { error: new Error("no id") }
    const res = await R.db.users.update(data.id, data);

    if (res.error) return { error: res.error };
    return { value: res.value };
  };

  delete = async (id: string) => {
    const res = await R.db.users.delete(id);

    if (res.error) return { error: res.error };
    return { value: res.value };
  };
}

export default new UserService();
