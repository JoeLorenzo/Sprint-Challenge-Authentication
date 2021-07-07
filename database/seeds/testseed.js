
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Homer', password: "$2b$10$K91fysUNyIRnUYQZROHdJumR1V.l/ssa4XMAfwc91d6c0/ChfL8yK"}
      ]);
    });
};
