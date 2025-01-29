import { Knex } from "knex";
import { TableNames } from "../table-names";

export async function seed(knex: Knex): Promise<void> {
  return knex(TableNames.comment).del()
    .then(function () {
      return knex(TableNames.comment).insert([
        {id: 1, desc: 'Comment 1', 'thumbs-up': 5, 'thumbs-down': 1, user_id: 1, todo_id: 2},
        {id: 2, desc: 'Comment 2', 'thumbs-up': 3, 'thumbs-down': 0, user_id: 2, todo_id: 1},
      ]);
    });
};
