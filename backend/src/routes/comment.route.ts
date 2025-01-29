import Router from "@koa/router";
import knex from "knex";
import { Context } from "koa";
import { TableNames } from "../db/table-names";

const commenRouter = new Router();

const knexClient = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

commenRouter.get("/comment", async (ctx: Context) => {
  try {
    const comments = await knexClient.select("*").from(TableNames.comment);
    ctx.body = { comments };
  } catch (error) {
    ctx.status = 500;
  }
});

export const commentRoutes = commenRouter.routes();