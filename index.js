const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const router = require('./routes/index.routes') 

const port = 3000
const mongodbUri = "mongodb://localhost/my_db"

app.use(express.json())
app.use('/', router);

const start = async () => {
	try {
		await connectDB(mongodbUri);
		app.listen(port, () => {
			console.log(`Server at http://localhost:${port}`)
		})
	} catch(err){
		console.log(start)
	}
}

start();

// app.listen(port, () => {
// 	console.log(`Server at http://localhost:${port}`)
// })