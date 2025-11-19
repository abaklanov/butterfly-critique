import * as Fastify from "fastify";

const butterfliesApi: Fastify.FastifyPluginCallback = function (
  fastify,
  options,
  done
) {
  // Declare a route
  fastify.get("/api/butterflies", function (request, reply) {
    const butterflies = fastify.db.data?.butterflies || [];
    console.log("Fetched butterflies from DB:", butterflies);
    reply.send({ butterflies });
  });

  done();
};

export default butterfliesApi;
