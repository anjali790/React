import { Greet } from './Greet';
import { render, screen } from '@testing-library/react';

test('Greet renders properly', () => {
    render(<Greet />);
    const text = screen.getByText('Hello');
    expect(text).toBeInTheDocument();
});

test('Greet renders properly with name', () => {
    render(<Greet name='AirCampus' />);
    const text = screen.getByText('Hello AirCampus');
    expect(text).toBeInTheDocument();
});