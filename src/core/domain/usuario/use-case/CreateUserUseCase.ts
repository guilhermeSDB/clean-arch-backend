import { IUseCase } from "../../../shared/UseCase";
import { ICollectionUser } from "../service/CollectionUser";

type Input = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserUseCase implements IUseCase<Input, void> {
  constructor(private readonly collection: ICollectionUser) {}

  async execute(input: Input): Promise<void> {
    const { name, email, password } = input;

    const isUserExist = await this.collection.getByEmail(email);

    if (isUserExist) {
      throw new Error("User already exists");
    }

    await this.collection.create({ name, email, password });
  }
}
