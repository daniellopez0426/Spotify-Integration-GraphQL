import { createRequest } from "../../../store";

const mutations = {
  createRequest: async (_, { reqData: { type, name } }, { user }) => {
    if (!user) {
      return false;
    }
    createRequest(type, name);
    return true;
  },
};

export default mutations;
