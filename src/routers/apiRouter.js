const Router = require('express').Router
const apiRouter = Router()
const Job = require('../models/Job')
const Company = require('../models/Company')


// apiRouter.get('/jobs', (req, res) => {
// 	res.json(_jobsData_)
// })

// apiRouter.get('/company', (req, res) => {
// 	res.json(companiesData)
// })


// apiRouter.get('/jobsdata', function(req, res){
// 	const db = req.app.locals.db

// 	db
// 		.select()
// 		.table('jobsdata')
// 		.then(function(data) {
// 			res.json(data)
// 		})
// });


apiRouter.get('/jobs', function(req, res) {
  Job
    .query()
    .then(function(data) {
      res.json(data)
    })
})

// apiRouter.get('/companydata', function(req, res){
// 	const db = req.app.locals.db

// 	db
// 		.select()
// 		.table('companydata')
// 		.then(function(data) {
// 			res.json(data)
// 		})
// });

// apiRouter.get('/companydata', function(req, res) {
//   Company
//     .query()
//     .then(function(data) {
//       res.json(data)
//     })
// })

apiRouter.get('/company', function(req, res) {
  Company
    .query()
    .eager('jobsdata')
    .then(function(data) {
      res.json(data)
    })
})


apiRouter.get('/jobs/:jobsId', function(req, res){
  const jobsId  = parseInt(req.params.jobsId)
  //console.log(typeof tweetId)
  Job
    .query()
    .where('id','=', jobsId)
    .then(function(data){
      res.json(data)
    })
})

module.exports = apiRouter