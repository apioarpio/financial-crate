import { Route, Switch } from 'react-router';
import React from 'react';
import AdditiveCreatePage from '../pages/additive/additive-create/AdditiveCreate';
import AdditiveIndexPage from '../pages/additive/additive-index/AdditiveIndex';

export default function AdditiveRoutes() {
  return (
    <Switch>
      <Route path="/" component={AdditiveIndexPage}/>
      <Route path="/create" component={AdditiveCreatePage}/>
    </Switch>
  );
}
