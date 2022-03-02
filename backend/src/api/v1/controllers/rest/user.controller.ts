import { deleteUser, getUser, saveUser, updateUser } from "../../services";

export const getUserController = async (request: any, reply: any) => {
  reply.send(await getUser(request.params["user"]));
};

export const createUserController = (request: any, reply: any) => {
  saveUser(request.body);
  reply.send({ message: "Created" });
};

export const updateUserController = (request: any, reply: any) => {
  updateUser(request.params["id"], reply.body);
};

export const deleteUserController = (request: any, reply: any) => {
  deleteUser(request.params["id"]);
};
