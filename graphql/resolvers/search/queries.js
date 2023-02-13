import { search } from "../../../api/search";

const artistQueries = {
  artists: async (_, { q }, context) => {
    return await search(q, "ARTIST");
  },
};

export default artistQueries;
