"use-strict";

require("dotenv").config();
const { graphql } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");
const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");

const resolvers = require("./lib/resolvers");

const app = express();
const port = process.env.port || 3000;

//Definir el Schema
/**
 * Data types:
 * String
 * Int
 * Float
 * Boolean
 * ID
 */
const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

// //Execute query hello
// graphql({ schema, source: "{ hello }", rootValue }).then((response) => {
//   console.log(response);
// });

//Add GraphQL middleware, it creates the graphql query GUI
app.use("/api", graphqlHTTP({ schema, rootValue: resolvers, graphiql: true }));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/api`);
});
