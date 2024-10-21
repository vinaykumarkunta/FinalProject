const Task = require('../models/Task');

// Get all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Create a task
const createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
};

// Delete a task
const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
};

module.exports = { getTasks, createTask, deleteTask };
