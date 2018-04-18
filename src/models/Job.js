const { Model } =  require('objection')

class Job extends Model{
	static get tableName() {
		return 'jobsdata'
	}
}

module.exports = Job