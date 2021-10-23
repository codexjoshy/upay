import React from 'react';
import { Route } from 'react-router';
import { Login } from '../../../Features/auth';


export default function Auth() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
    </>
  );
}
