import { render, screen, cleanup } from '@testing-library/react';
import Meal from '../Meal';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

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

  // This render is for normal testing
  render(
    <Router>
      <Meal meal={meal} />
    </Router>
  );

  // This renderer is for snapshot testing
  const tree = renderer
    .create(
      <Router>
        <Meal meal={meal} />
      </Router>
    )
    .toJSON();

  const mealElement = screen.getByTestId('meal');

  test('Component should Render', () => {
    expect(mealElement).toBeInTheDocument();
  });
  test('Component should contain Shrimp Pizza title', () => {
    expect(mealElement).toHaveTextContent('Shrimp Pizza');
  });
  test('Matches snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});