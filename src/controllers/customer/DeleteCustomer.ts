import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerServices } from "../../services/customer/DeleteCustomer";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customerService = new DeleteCustomerServices();

    const { id } = request.query as { id: string };

    const customer = await customerService.execute({ id });

    return reply.send(customer);
  }
}

export { DeleteCustomerController };
