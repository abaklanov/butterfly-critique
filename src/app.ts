import Fastify from "fastify";
import butterfliesApi from "./butterflies/api.ts";
import usersApi from "./users/api.ts";
import db from "./util/db/db.ts";
import type { dbSchema } from "../database/schema";

declare module "fastify" {
  interface FastifyInstance {
    db: import("lowdb").Low<dbSchema>;
  }
}

// Create Fastify instance
const fastify = Fastify({
  logger: true,
});

// Register utils
await fastify.register(db);

// Declare a route
fastify.register(butterfliesApi);
fastify.register(usersApi);

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
