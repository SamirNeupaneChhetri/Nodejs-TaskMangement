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


const createTask = async (req, res) => {
    try {
        const { name } = req.body;
        if(!name){
            return res.status(400).send({ error: "Name is required" });
        }
        const newTask = new Task({ name })
        await newTask.save()
        res.status(201).send(newTask);
    } catch (error) {
        console.log(error)
        res.status(500).json({'Message': "Server Error."});
    }
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


