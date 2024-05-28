import { User } from "../../core/domain/usuario/entity/User";
import { ICollectionUser } from "../../core/domain/usuario/service/CollectionUser";

export class CollectionUserMemory implements ICollectionUser {
  constructor(private readonly users: User[] = []) {}

  async findById(id: number): Promise<User | null> {
    return this.users.find((user) => user.id === id) ?? null;
  }

  async find(): Promise<User[]> {
    return this.users;
  }

  async getByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) ?? null;
  }

  async create(user: User): Promise<User> {
    const newUser = { ...user, id: Math.random() };
    this.users.push(newUser);
    return newUser;
  }
}
