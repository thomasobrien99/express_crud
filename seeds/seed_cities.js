
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cities').insert({name: 'Seattle'}),
        knex('cities').insert({name: 'Portland'}),
        knex('cities').insert({name: 'San Francisco'})
      ]);
    });
};
