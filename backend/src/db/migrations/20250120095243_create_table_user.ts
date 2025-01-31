import { TableNames } from "../table-names";
import { Knex } from 'knex';

export async function up(knex: Knex) {
  return Promise.all([
    knex.schema.createTable(TableNames.user, (table) => {
      table.increments("id").primary();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.string("name").notNullable();
      table.string("role").notNullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTable(TableNames.todo, (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("desc");
      table.boolean("isCompleted");
      table.dateTime("deadline");
      table.timestamps(true, true);
      table.integer("user_id").unsigned().notNullable();
      table.foreign("user_id").references("id").inTable(TableNames.user).onDelete("CASCADE");
    }),
    knex.schema.createTable(TableNames.comment, (table) => {
      table.increments("id").primary();
      table.string("desc");
      table.integer("thumbs-up").defaultTo(0);
      table.integer("thumbs-down").defaultTo(0);
      table.timestamps(true, true);
      table.integer("user_id").unsigned().notNullable();
      table.foreign("user_id").references("id").inTable(TableNames.user).onDelete("CASCADE");

      table.integer("todo_id").unsigned().notNullable();
      table.foreign("todo_id").references("id").inTable(TableNames.user).onDelete("CASCADE");
    })
  ])
};

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TableNames.comment);
  await knex.schema.dropTable(TableNames.todo);
  await knex.schema.dropTable(TableNames.user);
}
