const Task = require('../models/userModel')

const getAllTask = async (req, res) => {
    try {
        const getTask = await Task.find();
        res.status(200).json(getTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({'Message': "Server Error."});
    }
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


