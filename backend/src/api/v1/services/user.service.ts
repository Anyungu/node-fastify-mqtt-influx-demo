import { getManager, getRepository } from "typeorm";
import { UserDto } from "../../../models/dtos";
import { User } from "../../../models/entities";

export const saveUser = async (userData: UserDto) => {
  return await getRepository(User).save(userData);
};

export const getUser = async (userName: string) => {
  return await getRepository(User).findOne({ where: { userName: userName } });
};

export const updateUser = async (userId: string, userData: UserDto) => {
  return await getManager()
    .createQueryBuilder()
    .update(User)
    .set(userData)
    .where("id = :id", { id: userId })
    .execute();
};

export const deleteUser = async (userId: string) => {
  getManager().createQueryBuilder().delete().where("id = :id", { id: userId })
    .execute;
};
