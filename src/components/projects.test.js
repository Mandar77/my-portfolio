import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './projects';

test('renders projects', () => {
  render(<Projects />);
  const projectsElement = screen.getByText(/Projects/i);
  expect(projectsElement).toBeInTheDocument();
});
