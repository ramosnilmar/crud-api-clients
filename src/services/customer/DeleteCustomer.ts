import prismaClient from "../../prisma";

class DeleteCustomerServices {
  async execute({ id }: { id: string }) {
    if (!id) {
      throw new Error("Customer id not provided");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id,
      },
    });

    if (!findCustomer) {
      throw new Error("Customer not found");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Customer deleted successfully" };
  }
}

export { DeleteCustomerServices };
