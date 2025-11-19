import * as Fastify from "fastify";

const butterfliesApi: Fastify.FastifyPluginCallback = function (
  fastify,
  options,
  done
) {
  // Declare a route
  fastify.get("/api/butterflies", function (request, reply) {
    reply.send({ butterflies: ["monarch", "swallowtail", "morpho"] });
  });

  done();
};

export default butterfliesApi;
