import * as Fastify from "fastify";

const butterfliesApi: Fastify.FastifyPluginCallback = function (
  fastify,
  options,
  done
) {
  fastify.get("/api/butterflies", function (request, reply) {
    const butterflies = fastify.db.data.butterflies || [];
    reply.send({ butterflies });
  });

  fastify.get<{
    Params: {
      id: string;
    };
  }>("/api/butterflies/:id", function (request, reply) {
    const butterflies = fastify.db.data.butterflies || [];
    const butterfly = butterflies.find(
      (butterfly) => butterfly.id === request.params.id
    );
    reply.send({ butterfly });
  });

  done();
};

export default butterfliesApi;
