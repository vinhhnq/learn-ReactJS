import { render, screen } from '@testing-library/react';
import App from './App';
import Profile from "./App";

test('renders learn react link', () => {
  render(<App />);
  render(<Profile/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
