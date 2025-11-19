import fp from "fastify-plugin";
import * as Fastify from "fastify";
import { JSONFilePreset } from "lowdb/node";

const dbPlugin: Fastify.FastifyPluginAsync = async function DbDecorator(
  fastify,
  options
) {
  // TODO: default schema
  const db = await JSONFilePreset("database/butterflies.db.json", {
    butterflies: [],
    users: [],
  });
  db.read();

  fastify.decorate("db", db);
  console.log("Database decorator registered");
};

export default fp(dbPlugin);
