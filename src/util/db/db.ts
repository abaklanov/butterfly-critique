import fp from "fastify-plugin";
import * as Fastify from "fastify";
import { JSONPreset } from "lowdb/node";
import type { dbSchema } from "../../../database/schema";

interface dbPluginOptions {
  filePath: string;
}

const dbPlugin: Fastify.FastifyPluginAsync<dbPluginOptions> =
  async function DbDecorator(fastify, options) {
    console.log(options);
    const defaultData: dbSchema = {
      butterflies: [],
      users: [],
    };
    // TODO: use env variable for file path
    const db = await JSONPreset(options.filePath, defaultData);
    // TODO: possibly unnecessary
    await db.read();

    fastify.decorate("db", db);
  };

export default fp(dbPlugin);
