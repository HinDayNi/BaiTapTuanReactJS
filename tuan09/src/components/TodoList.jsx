import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../features/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-bold mb-4">📋 2. To-do List</h2>
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Thêm công việc mới..."
          className="input flex-grow"
        />
        <button type="submit" className="btn btn-primary">
          Thêm
        </button>
      </form>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between border-b py-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="mr-2 h-5 w-5"
              />
              <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-red-700"
            >
              Xóa
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <li className="text-center text-gray-500">Chưa có công việc nào!</li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;