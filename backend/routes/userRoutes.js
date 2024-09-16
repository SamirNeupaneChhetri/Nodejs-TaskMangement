const express = require('express');
const router = express.Router();
const {getAllTask, createTask, getTask, updateTask, deleteTask} = require('../controllers/userController')

//  Define routes
// router.route('/').get(getAllTask).post(createTask)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

// Route to get all tasks or create a new task
router.get('/', getAllTask);
router.post('/', createTask);

// Route to get, update, or delete a specific task by ID
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
