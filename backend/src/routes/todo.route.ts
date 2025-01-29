import Router from "@koa/router";
import knex from "knex";
import { Context } from "koa";
import { TableNames } from "../db/table-names";

const todoRouter = new Router();

const knexClient = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

todoRouter.get("/todo", async (ctx: Context) => {
  try {
    const todos = await knexClient.select("*").from(TableNames.todo);
    ctx.body = { todos };
  } catch (error) {
    ctx.status = 500;
  }
});

todoRouter.get("/todo/:id", async (ctx: Context) => {
    const todoID = ctx.params.id;
    const user = await knexClient.select("*").from(TableNames.todo).where({ id: todoID }).first();
    ctx.body = { user };
});

export const todoRoutes = todoRouter.routes();