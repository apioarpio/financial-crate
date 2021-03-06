import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import CustomerCreatePage from '../customerCreate/CustomerCreate';
import { Button } from 'antd';

export default function CustomerIndexPage(): JSX.Element {

  let { path } = useRouteMatch();

  return (
    <div>
      <h1>Cliesnte</h1>
      <Button><Link to='/customer/create'>Novo Cliente</Link></Button>
      <Switch>
        <Route path={`${path}/create`} component={CustomerCreatePage}/>
      </Switch>
    </div>
  );
}
