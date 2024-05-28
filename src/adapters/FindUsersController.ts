import Elysia from "elysia";
import { FindUsersUseCase } from "../core/domain/usuario/use-case/FindUsersUseCase";

export class FindUsersController {
  constructor(
    private readonly server: Elysia,
    private readonly useCase: FindUsersUseCase
  ) {
    this.server.get("/users", async () => {
      const data = this.useCase.execute();
      return data;
    });
  }
}
