import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const filterElement = screen.getByText(/Filters/i);
  expect(filterElement).toBeInTheDocument();

  const title = screen.getByText(/Head Quaters/i);
  expect(title).toBeInTheDocument();

});


