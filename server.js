//const fs = require('fs')
const express = require('express')
const ejs = require('ejs')


const pageRouter = require('./src/routers/pageRouter')
const apiRouter = require('./src/routers/apiRouter')


const app = express()

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use('/', pageRouter)
app.use('/about', pageRouter)

app.use('/api', apiRouter)


// app.get('/', function(req, res){
// 	fs.readFile(`${__dirname}/src/views/home.html`, 'utf-8', function(error, content){
// 		res.send(content)
// 	})
	
// })


process.env.PORT = 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log(`App running in PORT: ${PORT}`)
})