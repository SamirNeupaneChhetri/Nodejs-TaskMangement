const express = require('express')

// Load environment variables
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('Server is Ready....');
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
})