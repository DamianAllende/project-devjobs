const { Model } =  require('objection')

class Company extends Model{
	static get tableName() {
		return 'companydata'
	}
	static get relationMappings() {
		const Job = require('./Job')

		return{
			jobsdata: {
				relation: Model.HasManyRelation,
				modelClass: Job,
				join: {
					from: 'companydata.id',
					to: 'jobsdata.companyId'
				}
			}
		}
	}
}

module.exports = Company