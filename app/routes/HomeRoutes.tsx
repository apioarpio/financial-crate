import { Route, Switch } from 'react-router';
import CustomerIndexPage from '../pages/customer/customerIndex/CustomerIndex';
import React from 'react';

export default function HomeRoutes() {

  return (
    <Switch>
      <Route path="/customer/index" component={CustomerIndexPage}/>
    </Switch>
  );

}
