
exports.up = function(knex, Promise) {
	 return knex
  	.schema
  	.table('jobsdata', function(t) {
  		t.integer('companyId')
  		 .unsigned()
  		 .references('id')
  		 .inTable('companydata')
  	})
  
};

exports.down = function(knex, Promise) {
	 return knex
  	.schema
  	.table('jobsdata', function(t){
  		t.dropForeing('companyId')
  		t.dropColumn('companyId')
 	})
  
};
