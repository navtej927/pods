/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('user', (table) => {
      table.increments('id').primary();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('name').notNullable();
      table.string('role').notNullable();
      table.timestamps(true, true);
    });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable('user');
};