import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('check Vasanth text', ()=>{
  render(<App/>);
  const text = screen.getByText(/This is Vasanth/i);
  expect(text).toBeInTheDocument();
})
