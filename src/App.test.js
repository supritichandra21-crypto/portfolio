import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio owner name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /supriti chandra/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /schrodinger equation/i })).toBeInTheDocument();
});
