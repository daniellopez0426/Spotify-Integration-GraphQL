import express from "express";
import graphqlServer from "./graphql";

const port = 3000;
const app = express();

const start = async () => {
  try {
    await graphqlServer.start();
    console.log("GraphQL server running at port", port);
    graphqlServer.applyMiddleware({
        app
    })
    await new Promise((resolve = app.listen({ port }, resolve)));
  } catch (error) {
    console.log(error);
  }
};
