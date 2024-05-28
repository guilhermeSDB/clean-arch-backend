import { PrismaClient } from "@prisma/client";
import { User } from "../../core/domain/usuario/entity/User";
import { ICollectionUser } from "../../core/domain/usuario/service/CollectionUser";

export class CollectionUserPrismaPg implements ICollectionUser {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  find(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  getByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
  create(user: User): Promise<User> {
    return this.prisma.user.create({ data: user });
  }
}
