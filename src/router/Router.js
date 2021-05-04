import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Meals from '../views/Meals';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meals" component={Meals} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
