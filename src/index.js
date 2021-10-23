import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import AppLayout from './layouts/AppLayout';
import { Provider } from 'react-redux';
import store from './store';
import {  Blank, Home, Profile, Revenue, StakeHolders } from './Features';
import { Auth, PrivateRoute } from './components/common/route';


//firebase Auth
function Root() {
  return (
    <React.StrictMode>
      <BrowserRouter basename={'/'}>
        <Switch>
          <Fragment>
            <Auth />
            <PrivateRoute path="/home" exact>
              <Home />
            </PrivateRoute>
            <PrivateRoute path="/blank" exact>
              <Blank />
            </PrivateRoute>
            <PrivateRoute path="/stakeholders" exact>
              <StakeHolders />
            </PrivateRoute>
            <PrivateRoute path="/profile" exact>
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/revenue" exact>
              <Revenue />
            </PrivateRoute>
          </Fragment>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(
<Provider store={store}>
<Root />
</Provider>
, 
document.getElementById('root'));
