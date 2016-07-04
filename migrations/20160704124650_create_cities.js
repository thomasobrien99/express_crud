
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', (table)=>{
		table.increments();
		table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities');
};
