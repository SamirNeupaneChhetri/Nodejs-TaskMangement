const s = require('../models/userModel')

const getAllTask = (req, res) => {
    res.send('getAllTask');
}

const createTask = (req, res) => {
    res.send('create task')
}

const getTask = (req, res) => {
    res.send('GetTask')
}

const updateTask = (req, res) => {
    res.send('Update Task')
}

const deleteTask = (req, res) => {
    res.send('Delete task')
}

module.exports = {
    getAllTask, 
    createTask,
    getTask, 
    updateTask,
    deleteTask
}


