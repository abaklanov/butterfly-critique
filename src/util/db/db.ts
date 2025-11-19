import fp from "fastify-plugin";
import * as Fastify from "fastify";
import { JSONFilePreset } from "lowdb/node";
import type { dbSchema } from "../../../database/schema";

const dbPlugin: Fastify.FastifyPluginAsync = async function DbDecorator(
  fastify,
  options
) {
  const defaultData: dbSchema = {
    butterflies: [],
    users: [],
  };
  // TODO: use env variable for file path
  const db = await JSONFilePreset("database/butterflies.db.json", defaultData);
  db.read();

  fastify.decorate("db", db);
};

export default fp(dbPlugin);
