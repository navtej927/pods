import knex from "knex";

const knexClient = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

export const knexMiddleware = async (
  ctx: { knex: knex.Knex<any, unknown[]>; },
  next: () => any
) => {
  ctx.knex = knexClient;
  await next();
};
