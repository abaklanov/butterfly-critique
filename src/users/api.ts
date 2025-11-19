import * as Fastify from "fastify";
import { nanoid } from "nanoid";

const usersApi: Fastify.FastifyPluginCallback = function (
  fastify,
  options,
  done
) {
  // Declare a route
  fastify.get("/api/users", function (request, reply) {
    // TODO: validate request
    reply.send({ users: ["John", "Jack", "Jill"] });
  });

  fastify.get<{
    Params: {
      id: string;
    };
  }>("/api/users/:id", function (request, reply) {
    const users = fastify.db.data.users || [];
    const user = users.find((user) => user.id === request.params.id);
    // TODO: handle not found
    reply.send({ user });
  });

  fastify.post<{
    Body: {
      username: string;
    };
  }>("/api/butterflies", function (request, reply) {
    // TODO: validate request body and return proper response
    // TODO: avoid duplicate usernames
    const newUser = {
      id: nanoid(),
      ...request.body,
    };
    fastify.db.data.users.push(newUser);

    fastify.db.write();
    reply.status(201).send({ butterfly: newUser });
  });

  done();
};

export default usersApi;
