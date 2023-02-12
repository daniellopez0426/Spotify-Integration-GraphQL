import path, { join } from "path";
import { readFileSync, readdirSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";

const getTypeDefs = () => {
  let typeDefs = "";
  const typeDefsDir = path.resolve(path.join("graphql", "typedefs"));
  const gqlFiles = readdirSync(typeDefsDir);
  gqlFiles.forEach((file) => {
    typeDefs += readFileSync(join(typeDefsDir, file), {
      encoding: "utf-8",
    });
  });
  return typeDefs;
};

const schema = makeExecutableSchema({
  typeDefs: getTypeDefs,
  resolvers
});

export default schema;
