import { getUserCompanyInfluxData } from "../../services";

export const getUserCompanyInfluxDataController = async (
  request: any,
  reply: any
) => {
  reply.send(await getUserCompanyInfluxData());
};
