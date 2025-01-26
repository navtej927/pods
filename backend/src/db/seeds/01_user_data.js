/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const { TableNames } = require("../table-names");

exports.seed = async function(knex) {
  await knex(TableNames.user).del()
  await knex(TableNames.user).insert([
    {
      email: 'john@gmail.com',
      password: 'password',
      name: 'John Doe',
      role: 'admin'
    },
    {
      email: 'john@gmail.com',
      password: 'password',
      name: 'Jane Doe',
      role: 'user'
    },
  ]);
};
