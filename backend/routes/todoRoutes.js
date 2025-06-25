const express = require("express");
const {
  getAllTodos,
  createTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.patch("/toggle/:id", toggleTodo);
router.put("/:id", editTodo); 

module.exports = router;
