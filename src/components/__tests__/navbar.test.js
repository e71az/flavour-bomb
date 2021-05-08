import { render, screen, cleanup } from '@testing-library/react';
import NavBar from '../NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('NavBar component tests', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const navbarElement = screen.getByTestId('navbar');

  test('Component should Render', () => {
    expect(navbarElement).toBeInTheDocument();
  });
  test('Component should contain flavourbomb string', () => {
    expect(navbarElement).toHaveTextContent('flavourbomb');
  });
});
