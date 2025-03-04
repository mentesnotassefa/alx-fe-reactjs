import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });

  test('adds new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(3);
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoText = screen.getByTestId('todo-text-1');
    
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId('delete-button-1');
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(1);
  });
});