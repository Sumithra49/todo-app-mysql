import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Change API URL to localhost
const API_URL = "http://localhost:8080/todo";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await axios.get(API_URL);
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async () => {
    if (!task.trim()) return;
    try {
      await axios.post(API_URL, { task });
      setTask("");
      fetchTodos();
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`${API_URL}/${id}`, { completed: !completed });
      fetchTodos();
    } catch (err) {
      console.error("Error toggling todo:", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditedTask(todo.task);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedTask("");
  };

  const handleEditSave = async (id) => {
    if (!editedTask.trim()) return;
    try {
      await axios.put(`${API_URL}/${id}`, { task: editedTask });
      setEditingId(null);
      setEditedTask("");
      fetchTodos();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  return (
    <div className="container">
      <h2>My To-Do List</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-btn" onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id, todo.completed)}
              />
              {editingId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    className="edit-input"
                  />
                  <button className="save-btn" onClick={() => handleEditSave(todo.id)}>Save</button>
                  <button className="cancel-btn" onClick={cancelEditing}>Cancel</button>
                </>
              ) : (
                <>
                  <span>{todo.task}</span>
                  <button className="edit-btn" onClick={() => startEditing(todo)}>Edit</button>
                </>
              )}
            </div>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
