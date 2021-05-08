import { render, screen, cleanup } from '@testing-library/react';
import Meal from '../Meal';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Meal component tests', () => {
  const meal = {
    idMeal: 1,
    strMeal: 'Shrimp Pizza',
    strMealThumb:
      'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg',
  };

  render(
    <Router>
      <Meal meal={meal} />
    </Router>
  );

  const mealElement = screen.getByTestId('meal');

  test('Component should Render', () => {
    expect(mealElement).toBeInTheDocument();
  });
  test('Component should contain Shrimp Pizza title', () => {
    expect(mealElement).toHaveTextContent('Shrimp Pizza');
  });
});
