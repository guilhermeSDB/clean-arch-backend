import Elysia from "elysia";
import { CreateUserUseCase } from "../core/domain/usuario/use-case/CreateUserUseCase";

export class CreateUserController {
  constructor(
    private readonly server: Elysia,
    private readonly useCase: CreateUserUseCase
  ) {
    this.server.post("/users", async ({ body }) => {
      const { name, email, password } = body as any;
      await this.useCase.execute({ name, email, password });

      return {
        status: 200,
        body: {
          mensagem: "Usuario criado com sucesso",
        },
      };
    });
  }
}
