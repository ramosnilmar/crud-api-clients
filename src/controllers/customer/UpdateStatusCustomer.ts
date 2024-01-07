import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateStatusCustomerService } from "../../services/customer/UpdateStatusCustomer";

class UpdateStatusCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, status } = request.body as { id: string; status: boolean };

    const updateStatusCustomerService = new UpdateStatusCustomerService();

    const customer = await updateStatusCustomerService.execute({
      id,
      status,
    });

    return reply.send(customer);
  }
}

export { UpdateStatusCustomerController };
