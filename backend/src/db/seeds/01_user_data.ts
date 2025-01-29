import { Knex } from "knex";
import { TableNames } from "../table-names";

export async function seed(knex: Knex): Promise<void> {
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
