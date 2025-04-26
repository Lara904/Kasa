import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders home page and header links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const accueilLink = screen.getByText(/accueil/i);
  const aboutLink = screen.getByText(/à propos/i);

  expect(accueilLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});
