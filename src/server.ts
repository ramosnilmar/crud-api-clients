import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  if (error instanceof Error) {
    reply.status(400).send({
      message: error.message,
    });
  }

  reply.status(500).send({
    status: "error",
    message: "Internal server error",
  });
});

const start = async () => {
  await app.register(cors, {
    origin: "*",
  });

  await app.register(import("./routes"));

  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
