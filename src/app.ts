import Fastify from "fastify";
import butterfliesApi from "./butterflies/api.ts";
import usersApi from "./users/api.ts";
import db from "./util/db/db.ts";

declare module "fastify" {
  interface FastifyInstance {
    // TODO: re-think default schema type and store it somewhere
    db: import("lowdb").Low<{
      butterflies: Array<{ id: string; name: string }>;
      users: Array<{ id: string; username: string }>;
    }>;
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
