import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateCustomerController } from "./controllers/customer/CreateCustomer";
import { ListAllCustomersController } from "./controllers/customer/ListAllCustomers";
import { DeleteCustomerController } from "./controllers/customer/DeleteCustomer";
import { UpdateStatusCustomerController } from "./controllers/customer/UpdateStatusCustomer";

const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world!!" };
  });

  fastify.get(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListAllCustomersController().handle(request, reply);
    }
  );

  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.put(
    "/status-customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateStatusCustomerController().handle(request, reply);
    }
  );

  fastify.delete(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
    }
  );
};

export default routes;
