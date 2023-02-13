import { createRequest } from "../../../store";

const mutations = {
  createRequest: async (_, { reqData: { type, name } }, context) => {
    createRequest(type, name);
    return true;
  },
};

export default mutations;
