import { CreateUserController } from "../../adapters/CreateUserController";
import { FindUserByIdController } from "../../adapters/FindUserByIdController";
import { FindUsersController } from "../../adapters/FindUsersController";
import { CreateUserUseCase } from "../../core/domain/usuario/use-case/CreateUserUseCase";
import { FindUserByIdUseCase } from "../../core/domain/usuario/use-case/FindUserById";
import { FindUsersUseCase } from "../../core/domain/usuario/use-case/FindUsersUseCase";
import { CollectionUserPrismaPg } from "../prisma/CollectionUserPrismaPg";
import app from "./config";

const collectionUser = new CollectionUserPrismaPg();

const createUserUseCase = new CreateUserUseCase(collectionUser);
new CreateUserController(app, createUserUseCase);

const findUsersUseCase = new FindUsersUseCase(collectionUser);
new FindUsersController(app, findUsersUseCase);

const findUserByIdUseCase = new FindUserByIdUseCase(collectionUser);
new FindUserByIdController(app, findUserByIdUseCase);

export default app;
