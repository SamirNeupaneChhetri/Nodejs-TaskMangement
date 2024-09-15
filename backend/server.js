const express = require('express')
const dotenv = require('dotenv').config() // Load environment variables
const connectDB = require('./config/db')

// Connect Data Base
connectDB()

const app = express()



app.get('/', (req, res) => {
    res.send('Server is Ready....');
})

const PORT = process.env.PORT;
// connect 

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
})