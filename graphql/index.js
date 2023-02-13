import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import { getSessionFromToken } from "../session";

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    const userToken = req.headers.user_token;
    return { user: getSessionFromToken(userToken) };
  },
});

export default apolloServer;
