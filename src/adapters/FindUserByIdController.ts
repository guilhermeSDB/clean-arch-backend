import Elysia from "elysia";
import { FindUserByIdUseCase } from "../core/domain/usuario/use-case/FindUserById";

export class FindUserByIdController {
  constructor(
    private readonly server: Elysia,
    private readonly useCase: FindUserByIdUseCase
  ) {
    this.server.get("/users/:id", async ({ params }) => {
      const { id } = params as any;
      return this.useCase.execute(+id);
    });
  }
}
