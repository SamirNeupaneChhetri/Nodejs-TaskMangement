const express = require('express')
const dotenv = require('dotenv').config() // Load environment variables
const connectDB = require('./config/db') 
const routes = require('./routes/userRoutes')

// Connect Data Base
connectDB()

const app = express()

// Middleware to parse JSON bodies
app.use(express.json());



const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Server is Ready....');
})

// using routes
app.use('/api/v1/tasks', routes);

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
})
