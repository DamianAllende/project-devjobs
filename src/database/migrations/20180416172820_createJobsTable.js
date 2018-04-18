
exports.up = function(knex, Promise) {
	// crear tabla 
  return knex
  	.schema
  	.createTable('jobsdata', function(t) {
  		t.increments(); // 
  		t.string('title');
  		t.string('description');
  		t.string('location');
  		t.integer('salary');
  		t.boolean('fullTime');
  		//t.integer('companyId');
  		t.timestamp('times')
  	     .notNullable()
  	     .defaultTo(knex.fn.now());
  	});
};
  


exports.down = function(knex, Promise) {
	return knex
  	.schema
  	.dropTableIfExists('jobsdata');
  
};




