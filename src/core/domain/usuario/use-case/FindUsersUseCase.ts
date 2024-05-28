import { IUseCase } from "../../../shared/UseCase";
import { User } from "../entity/User";
import { ICollectionUser } from "../service/CollectionUser";

export class FindUsersUseCase implements IUseCase<void, User[]> {
  constructor(private readonly collection: ICollectionUser) {}
	
	async execute(): Promise<User[]> {
    return this.collection.find();
	}
}
