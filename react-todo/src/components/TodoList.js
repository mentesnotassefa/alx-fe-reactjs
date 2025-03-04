import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Write Tests', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          data-testid="todo-input"
        />
        <button type="submit" data-testid="add-button">Add</button>
      </form>
      <ul className="todo-list" data-testid="todo-list">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            data-testid={`todo-item-${todo.id}`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              data-testid={`todo-text-${todo.id}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              data-testid={`delete-button-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;