import { render, screen, cleanup } from '@testing-library/react';
import Category from '../Category';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

afterEach(() => {
  cleanup();
});

describe('Meal component tests', () => {
  const category = {
    idCategory: 1,
    strCategory: 'Seafood',
    strCategoryThumb:
      'https://media-cdn.tripadvisor.com/media/photo-s/18/3a/09/6c/bonefish-seafood-platter.jpg',
    strCategoryDescription: 'Seafood is delicious!',
  };

  render(
    <Provider store={store}>
      <Router>
        <Category category={category} />
      </Router>
    </Provider>
  );

  const categoryElement = screen.getByTestId('category');

  test('Component should Render', () => {
    expect(categoryElement).toBeInTheDocument();
  });
  test('Component should contain Seafood title', () => {
    expect(categoryElement).toHaveTextContent('Seafood');
  });
});
