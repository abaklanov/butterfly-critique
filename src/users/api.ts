import * as Fastify from "fastify";

const usersApi: Fastify.FastifyPluginCallback = function (
  fastify,
  options,
  done
) {
  // Declare a route
  fastify.get("/api/users", function (request, reply) {
    reply.send({ users: ["John", "Jack", "Jill"] });
  });

  done();
};

export default usersApi;
