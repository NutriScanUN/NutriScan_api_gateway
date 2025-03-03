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
  const register = promClient.register;
  const collectDefaultMetrics = promClient.collectDefaultMetrics;
  collectDefaultMetrics({ register });

  const httpRequestDurationMicroseconds = new promClient.Histogram({
    name: "http_request_duration_seconds",
    help: "Duración de las solicitudes HTTP en segundos",
    labelNames: ["method", "route", "status_code"],
    buckets: [0.01, 0.05, 0.1, 0.5, 1, 2, 5] // Intervalos de tiempo en segundos
  });
  register.registerMetric(httpRequestDurationMicroseconds );

  const cacheRequests = new promClient.Counter({
    name: "user_api_cache_total",
    help: "Total de requests al cache",
    labelNames: ["instance", "type"]
  });

  register.registerMetric(cacheRequests);

  const httpRequestTotal = new promClient.Counter({
    name: 'http_requests_total',
    help: 'Total de peticiones HTTP recibidas',
    labelNames: ['method', 'route', 'status_code'],
  });

  // Simulación: Incrementar contador cuando se consulta caché
  app.get("/cache", (req, res) => {
    cacheRequests.inc({ instance: "user-api", type: "Request" });
    res.json({ message: "Cache request counted" });
  });
  
  app.use((req, res, next) => {
    const end = httpRequestDurationMicroseconds.startTimer();
    res.on("finish", () => {
      httpRequestTotal.inc({
        method: req.method,
        route: req.route ? req.route.path : req.path,
        status_code: res.statusCode,
      });
      end({ method: req.method, route: req.route?.path || req.path, status_code: res.statusCode });
    });
    next();
  });

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