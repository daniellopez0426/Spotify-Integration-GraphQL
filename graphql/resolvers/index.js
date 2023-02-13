import { artistQueries } from "./search";

const resolvers = {
  Query: {
    ...artistQueries,
  },
};

export default resolvers;
