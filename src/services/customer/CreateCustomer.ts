import prismaClient from "../../prisma";

interface ICreateCustomer {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: ICreateCustomer) {
    const customerAlreadyExists = await prismaClient.customer.findFirst({
      where: {
        email,
      },
    });

    if (!name || !email) {
      throw new Error("Required name or email");
    }

    if (customerAlreadyExists) {
      throw new Error("Customer already exists!");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });
    return customer;
  }
}

export { CreateCustomerService };
