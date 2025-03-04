import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

test('adds a new todo', () => {
  // Render the TodoList component
  render(<TodoList />);

  // Find the input field and add button
  const input = screen.getByRole('textbox');
  const addButton = screen.getByText('Add Todo');

  // Simulate user input
  fireEvent.change(input, { target: { value: 'New Todo' } });
  
  // Simulate form submission
  fireEvent.click(addButton);

  // Assert that the new todo is displayed
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});
