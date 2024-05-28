import routes from "./external/api/routes";

routes.listen(3000);

console.log(
  `🦊 Elysia is running at ${routes.server?.hostname}:${routes.server?.port}`
);
