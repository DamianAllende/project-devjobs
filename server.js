const fs = require('fs')
const express = require('express')
const app = express()



app.get('/', function(req, res){
	fs.readFile(`${__dirname}/src/views/home.html`, 'utf-8', function(error, content){
		res.send(content)
	})
	
})


process.env.PORT = 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log(`App running in PORT: ${PORT}`)
})