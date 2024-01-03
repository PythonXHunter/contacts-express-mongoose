require('dotenv').config();
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const router = require('./routes/index.routes') 

const port = process.env.PORT || 3000


app.use(express.json())
app.use('/', router);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
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