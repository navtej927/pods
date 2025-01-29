import { Knex } from "knex";
import { Context } from "koa";

export interface IContext extends Context {
  knex: Knex;
}
