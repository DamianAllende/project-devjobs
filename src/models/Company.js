const { Model } =  require('objection')

class Company extends Model{
	static get tableName() {
		return 'companydata'
	}
}

module.exports = Company