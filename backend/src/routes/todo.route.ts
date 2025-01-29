import Router from "@koa/router";
import { TableNames } from "../db/table-names";
import { IContext } from "../types";

const todoRouter = new Router();

todoRouter.get("/todo", async (ctx: IContext) => {
  try {
    const { knex } = ctx;
    const todos = await knex.select("*").from(TableNames.todo);
    ctx.body = { todos };
  } catch (error) {
    ctx.status = 500;
  }
});

todoRouter.get("/todo/:id", async (ctx: IContext) => {
    const { knex } = ctx;
    const todoID = ctx.params.id;
    const user = await knex.select("*").from(TableNames.todo).where({ id: todoID }).first();
    ctx.body = { user };
});

export const todoRoutes = todoRouter.routes();