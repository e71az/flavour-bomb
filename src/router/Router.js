import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../views/App';
import Meals from '../views/Meals';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/meals" component={Meals} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
