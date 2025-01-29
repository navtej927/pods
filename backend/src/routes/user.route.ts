import Router from "@koa/router";
import knex from "knex";
import { Context } from "koa";
import { TableNames } from "../db/table-names";

const userRouter = new Router();

const knexClient = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

userRouter.get("/user", async (ctx: Context) => {
  try {
    const users = await knexClient.select("*").from(TableNames.user);
    ctx.body = { users };
  } catch (error) {
    ctx.status = 500;
  }
});

userRouter.get("/user/:id", async (ctx: Context) => {
    const userId = ctx.params.id;
    const user = await knexClient.select("*").from(TableNames.user).where({ id: userId }).first();
    ctx.body = { user };
});

export const userRoutes = userRouter.routes();