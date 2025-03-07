import '@testing-library/jest-dom'; // Add this line
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders todo list', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/Learn React/i);
  expect(todoElement).toBeInTheDocument();
});

test('adds new todo', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add Todo/i));
  const newTodoElement = screen.getByText(/New Todo/i);
  expect(newTodoElement).toBeInTheDocument();
});

test('toggles todo', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/Learn React/i);
  fireEvent.click(todoElement);
  expect(todoElement).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoElement);
  expect(todoElement).toHaveStyle('text-decoration: none');
});

test('deletes todo', () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText(/Delete/i);
  fireEvent.click(deleteButtons[0]); // Click the first "Delete" button
  const todoElement = screen.queryByText(/Learn React/i);
  expect(todoElement).not.toBeInTheDocument();
});


