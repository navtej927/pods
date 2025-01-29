import Router from "@koa/router";
import { TableNames } from "../db/table-names";
import { IContext } from "../types";

const commenRouter = new Router();

commenRouter.get("/comment", async (ctx: IContext) => {
  try {
    const { knex } = ctx;
    const comments = await knex.select("*").from(TableNames.comment);
    ctx.body = { comments };
  } catch (error) {
    ctx.status = 500;
  }
});

export const commentRoutes = commenRouter.routes();