import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { expressMiddleware } from "@apollo/server/express4";
import { readFileSync } from "fs";
import express from "express";
import cors from "cors";
import path from "path";
import { gql } from "graphql-tag";
import { resolvers } from "./resolvers";
import { ListingAPI } from "./datasources/listing-api";
import { StoreAPI } from "./datasources/store-api";
import { OffAPI } from "./datasources/off-api";
import { HistorialAPI } from "./datasources/historial-api";
import promClient from "prom-client";

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  })
);

async function startApolloServer() {
  const app  = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  promClient.collectDefaultMetrics();

  app.use("/api",
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async () => {
        const { cache } = server;
        return {
          dataSources: {
            listingAPI: new ListingAPI({ cache }),
            storeAPI: new StoreAPI({ cache }),
            historialAPI: new HistorialAPI({ cache }),
            offAPI: new OffAPI({ cache }),
          },
        };
      }
    })
  );

  app.get("/metrics", async (req, res) => {
    res.set("Content-Type", promClient.register.contentType);
    res.end(await promClient.register.metrics());
  });
  
  await app.listen(4000, () => {
    console.log(`
      🚀  Server is running!
      📭  Query at localhost:4000
    `);
  })
  
}

startApolloServer();