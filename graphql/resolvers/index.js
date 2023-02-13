import { searchMutations, searchQueries } from "./search";

const resolvers = {
  Query: {
    ...searchQueries,
  },
  Mutation: {
    ...searchMutations
  }
};

export default resolvers;
