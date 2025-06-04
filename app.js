const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middlewares/notFound')
require('dotenv').config()

//middlewares
app.use(express.json())
app.use(express.static('./public'))

//routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)

const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening at ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()
