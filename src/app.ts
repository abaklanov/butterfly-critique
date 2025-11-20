import Fastify from "fastify";
import butterfliesApi from "./butterflies/api.ts";
import usersApi from "./users/api.ts";
import db from "./util/db/db.ts";
import type { dbSchema } from "../database/schema";

// TODO: put in a separete types file
declare module "fastify" {
  interface FastifyInstance {
    db: import("lowdb").LowSync<dbSchema>;
  }
}

const fastify = Fastify({
  logger: true,
});

await fastify.register(db, { filePath: "database/butterflies.db.json" });

fastify.register(butterfliesApi);
fastify.register(usersApi);

// TODO: use env variable for port
// TODO: separate server from app
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
