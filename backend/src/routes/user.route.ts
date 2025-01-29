import Router from "@koa/router";
import { TableNames } from "../db/table-names";
import { IContext } from "../types";

const userRouter = new Router();

userRouter.get("/user", async (ctx: IContext) => {
  try {
    const { knex } = ctx;
    const users = await knex("*").from(TableNames.user);
    ctx.body = { users };
  } catch (error) {
    ctx.status = 500;
  }
});

userRouter.get("/user/:id", async (ctx: IContext) => {
  const { knex } = ctx;
  const userId = ctx.params.id;
  const user = await knex
    .select("*")
    .from(TableNames.user)
    .where({ id: userId })
    .first();
  ctx.body = { user };
});

export const userRoutes = userRouter.routes();
