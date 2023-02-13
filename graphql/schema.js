import path, { join } from "path";
import { readFileSync, readdirSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";

const getTypeDefinitions  = () => {
  let typeDefinitions  = "";
  const typeDefinitionsDir = path.resolve(path.join("graphql", "typedefinitions"));
  const graphqlFiles = readdirSync(typeDefinitionsDir);
  graphqlFiles.forEach((file) => {
    typeDefinitions  += readFileSync(join(typeDefinitionsDir, file), {
      encoding: "utf-8",
    });
  });
  return typeDefinitions ;
};

const schema = makeExecutableSchema({
  typeDefs : getTypeDefinitions ,
  resolvers
});

export default schema;
