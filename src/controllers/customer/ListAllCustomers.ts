import { FastifyReply, FastifyRequest } from "fastify";
import { ListAllCustomersServices } from "../../services/customer/ListAllCustomers";

class ListAllCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listAllCustomersService = new ListAllCustomersServices();

    const customers = await listAllCustomersService.execute();

    return reply.send(customers);
  }
}

export { ListAllCustomersController };
