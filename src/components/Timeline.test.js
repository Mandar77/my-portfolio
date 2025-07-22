import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';

test('renders timeline', () => {
  render(<Timeline />);
  const timelineElement = screen.getByText(/Timeline/i);
  expect(timelineElement).toBeInTheDocument();
});
