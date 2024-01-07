import prismaClient from "../../prisma";

interface UpdateStatusCustomer {
  id: string;
  status: boolean;
}

class UpdateStatusCustomerService {
  async execute({ id, status }: UpdateStatusCustomer) {
    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id,
      },
    });

    if (!findCustomer) {
      throw new Error("Customer not found");
    }

    if (findCustomer.status === status) {
      return findCustomer;
    }

    const customer = await prismaClient.customer.update({
      where: {
        id,
      },
      data: {
        status,
        updatedAt: new Date(),
      },
    });

    return customer;
  }
}

export { UpdateStatusCustomerService };
