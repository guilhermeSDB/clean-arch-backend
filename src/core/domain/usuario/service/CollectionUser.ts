import { User } from "../entity/User";

export interface ICollectionUser {
  getByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<User>;
  find(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
}
