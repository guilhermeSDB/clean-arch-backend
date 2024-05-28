import { IUseCase } from "../../../shared/UseCase";
import { User } from "../entity/User";
import { ICollectionUser } from "../service/CollectionUser";

export class FindUserByIdUseCase implements IUseCase<number, User | null> {
  constructor(private readonly collection: ICollectionUser) {}

  execute(input: number): Promise<User | null> {
    return this.collection.findById(input);
  }
}
