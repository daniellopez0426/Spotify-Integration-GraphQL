import { search } from "../../../api/search";

const queries = {
  artists: async (_, { q }, context) => {
    return await search(q, "ARTIST");
  },
};

export default queries;
