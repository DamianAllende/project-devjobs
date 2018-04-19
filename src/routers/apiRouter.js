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


function allJobs(req, res) {
  Job
    .query()
    .then(function(data) {
      res.json(data)
    })
}

function getSingleJobs(req, res) {
   const id  = parseInt(req.params.jobsId)
 
   Job
     .query()
     .findById(id)
     .then(function(job){
       res.json(job).status(200)
     })

}

function createNewJobs(req, res) {
  Job
    .query()
    .insert(req.body) //INSERT INTO
    .then(function(newJob){
      res.json(newJob).status(200)
      console.log('Tweet save...')
    })
}

function updateJob(req, res) {
  const id = parseInt(req.params.jobsId)
  const newData = req.body
  Job
    .query()
    .updateAndFetchById(id, newData)
    .then(function(jobUpdated) {
      res.json(jobUpdated).status(200)
    })

}

function deleteJobs(req, res) {
   const id = parseInt(req.params.jobsId)

  Job
    .query()
    .deleteById(id)
    .then(function(rowsDeleted) {
      res.json({
        jobsDeleted: rowsDeleted
      }).status(200)
    //   res.json(rowsDeleted).status(200)
    })
}

function allCompany(req, res) {
  Company
    .query()
    .eager('jobsdata')
    .then(function(data) {
      res.json(data)
    })
}

function getSingleCompany(req, res) {
  const id  = parseInt(req.params.companyId)
 
   Company
     .query()
     .findById(id)
     .then(function(company){
       res.json(company).status(200)
     })
}

function createNewCompany(req, res) {
  Company
    .query()
    .insert(req.body) //INSERT INTO
    .then(function(Company){
      res.json(newCompany).status(200)
      console.log('Company save...')
    })
}

function updateCompany(req, res) {
  const id = parseInt(req.params.companyId)
  const newData = req.body
  Company
    .query()
    .updateAndFetchById(id, newData)
    .then(function(CompanyUpdated) {
      res.json(CompanyUpdated).status(200)
    })
}


 apiRouter
   .get('/jobs', allJobs)
   .get('/jobs/:jobsId', getSingleJobs)
   .post('/jobs', createNewJobs)
   .put('/jobs/:jobsId', updateJob)
   .delete('/jobs/:jobsId', deleteJobs)
   .get('/company', allCompany)
   .get('/company/:companyId', getSingleCompany)
   .post('/company', createNewCompany)
   .put('/company/:companyId', updateCompany)

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

// apiRouter.get('/company', function(req, res) {
//   Company
//     .query()
//     .eager('jobsdata')
//     .then(function(data) {
//       res.json(data)
//     })
// })


// apiRouter.get('/jobs/:jobsId', function(req, res){
//   const jobsId  = parseInt(req.params.jobsId)
//   //console.log(typeof tweetId)
//   Job
//     .query()
//     .where('id','=', jobsId)
//     .then(function(data){
//       res.json(data)
//     })
// })

module.exports = apiRouter