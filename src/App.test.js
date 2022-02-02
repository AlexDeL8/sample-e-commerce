import { render, screen } from '@testing-library/react';
import App from './App';

test('renders basic h1 tag', () => {
  render(<App />);
  const linkElement = screen.getByTestId("sample-header");
  expect(linkElement).toBeInTheDocument();
});
