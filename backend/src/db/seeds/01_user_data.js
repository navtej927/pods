/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('user').del()
  await knex('user').insert([
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
