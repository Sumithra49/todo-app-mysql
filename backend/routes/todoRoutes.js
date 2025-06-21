const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  deleteTodo,
  toggleTodo,
} = require("../controllers/todoController");

router.get("/", getAllTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", toggleTodo);

module.exports = router;
