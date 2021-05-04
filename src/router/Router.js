import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../views/App';
import FilteredCategories from '../views/FilteredCategories';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          exact
          path="/filtered-categories"
          component={FilteredCategories}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
