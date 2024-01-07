import prismaClient from "../../prisma";

class ListAllCustomersServices {
  async execute() {
    const customers = await prismaClient.customer.findMany({});
    return customers;
  }
}

export { ListAllCustomersServices };
