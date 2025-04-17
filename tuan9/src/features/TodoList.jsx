"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, toggleTodo, removeTodo } from "../store/slices/todoSlice"

function TodoList() {
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState("")

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo))
      setNewTodo("")
    }
  }

  return (
    <div className="feature-container">
      <h2>📋 To-do List</h2>

      <div className="form-group" style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Thêm công việc mới"
            onKeyPress={(e) => {
              if (e.key === "Enter") handleAddTodo()
            }}
          />
          <button onClick={handleAddTodo} style={{ marginLeft: "0.5rem" }}>
            Thêm
          </button>
        </div>
      </div>

      <div className="todo-list" style={{ marginTop: "1rem" }}>
        {todos.length === 0 ? (
          <p>Không có công việc nào. Hãy thêm công việc mới!</p>
        ) : (
          todos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                  style={{ marginRight: "0.5rem" }}
                />
                <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
              </div>
              <button onClick={() => dispatch(removeTodo(todo.id))} style={{ backgroundColor: "#ef4444" }}>
                Xóa
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList
