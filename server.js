//const fs = require('fs')
const express = require('express')

const { Model } = require('objection')

const ejs = require('ejs')

const connectToDatabase = require ('./src/database/dbConnect')
const knexFile = require('./knexfile')

const pageRouter = require('./src/routers/pageRouter')
const apiRouter = require('./src/routers/apiRouter')


const app = express()

const appConnectionWithDatabase = connectToDatabase(knexFile.development)

Model.knex(appConnectionWithDatabase)

app.locals.db = appConnectionWithDatabase

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)
app.use(express.static(`${__dirname}/public`))

app.use('/', pageRouter)
app.use('/about', pageRouter)

app.use('/api', apiRouter)


app.use(function( req, res){
	res.render('404.ejs')
})


// app.get('/', function(req, res){
// 	fs.readFile(`${__dirname}/src/views/home.html`, 'utf-8', function(error, content){
// 		res.send(content)
// 	})
	
// })


process.env.PORT = 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log(`App running in PORTTT: ${PORT}`)
})