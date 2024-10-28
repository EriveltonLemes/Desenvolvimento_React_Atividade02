import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('exibe o valor inicial do contador como 0', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/Contador: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('incrementa o contador quando o botão "Incrementar" é clicado', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Incrementar');
    fireEvent.click(incrementButton);
    const counterElement = screen.getByText(/Contador: 1/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('decrementa o contador quando o botão "Decrementar" é clicado', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrementar');
    fireEvent.click(decrementButton);
    const counterElement = screen.getByText(/Contador: -1/i);
    expect(counterElement).toBeInTheDocument();
  });
});