import { render, screen } from '@testing-library/react';
import App from './App';
import Maps from './components/map';

test('renders learn react link', () => {
  render( <div>
    <App />
  
    </div>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
