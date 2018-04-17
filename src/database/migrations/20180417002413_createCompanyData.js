
exports.up = function(knex, Promise) {

	return knex
  	.schema
  	.createTable('companydata', function(t) {
  		t.increments(); // 
  		t.string('name');
  		t.text('description');
  		t.string('imageLink');
  		t.string('location');
  		t.timestamp('times')
  	     .notNullable()
  	     .defaultTo(knex.fn.now());
  	});
  
};

exports.down = function(knex, Promise) {
	return knex
  	.schema
  	.dropTableIfExists('companydata');
  
};


