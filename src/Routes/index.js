/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// import { isAuthenticated } from './auth';

import Home from '../pages/Home';
import DetailsDragon from '../pages/Dragon/Details';
import NewDragon from '../pages/Dragon/New';
import EditDragon from '../pages/Dragon/Edit';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/dragon/details/:id" component={DetailsDragon} isPrivate />
      <Route path="/dragon/new" component={NewDragon} isPrivate />
      <Route path="/dragon/edit/:id" component={EditDragon} isPrivate />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
