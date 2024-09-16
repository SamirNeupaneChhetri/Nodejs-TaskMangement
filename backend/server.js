const express = require('express')
const dotenv = require('dotenv').config() // Load environment variables
const connectDB = require('./config/db') 

// Connect Data Base
connectDB()

const app = express()

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Server is Ready....');
})
 

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
})