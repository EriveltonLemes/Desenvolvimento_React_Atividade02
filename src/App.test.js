import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o título do aplicativo', () => {
  render(<App />);
  const titleElement = screen.getByText(/Aplicativo de Teste de Contador/i);
  expect(titleElement).toBeInTheDocument();
});
