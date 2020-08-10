import { Route, Switch } from 'react-router';
import CustomerIndexPage from '../pages/customer/customerIndex/CustomerIndex';
import React from 'react';
import CustomerCreatePage from '../pages/customer/customerCreate/CustomerCreate';

export default function CustomerRoutes() {

  return (
    <Switch>
      <Route path="/" component={CustomerIndexPage}/>
      <Route path="/create" component={CustomerCreatePage}/>
    </Switch>
  );

}
