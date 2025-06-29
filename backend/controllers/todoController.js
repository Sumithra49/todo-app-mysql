const { TodoModel } = require("../models/todoModel");

// Get all todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.findAll();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new todo
const createTodo = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) return res.status(400).json({ message: "Task is required" });

    const newTodo = await TodoModel.create({ task });
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete todo by ID
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TodoModel.destroy({ where: { id } });

    if (!deleted) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Toggle completed status
const toggleTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoModel.findByPk(id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    todo.completed = !todo.completed;
    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Edit todo (update task or completed status)
const editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, completed } = req.body;

    const todo = await TodoModel.findByPk(id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    if (task !== undefined) todo.task = task;
    if (completed !== undefined) todo.completed = completed;

    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo,
  toggleTodo,
  editTodo, // 👈 added to exports
};
