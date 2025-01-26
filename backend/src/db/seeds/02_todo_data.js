const { TableNames } = require("../table-names");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(TableNames.todo).del()
    .then(function () {
      // Inserts seed entries
      return knex(TableNames.todo).insert([
        {id: 1, title: 'Todo 1', desc: 'Description 1', isCompleted: false, deadline: new Date(), user_id: 1},
        {id: 2, title: 'Todo 2', desc: 'Description 2', isCompleted: false, deadline: new Date(), user_id: 2},
        {id: 3, title: 'Todo 3', desc: 'Description 3', isCompleted: false, deadline: new Date(), user_id: 1}
      ]);
    });
};