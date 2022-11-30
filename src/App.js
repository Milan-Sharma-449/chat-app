import React, { lazy } from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router';
import PrivateRoute from './Components/PrivateRoute';
import Home from './pages/Home';
import PublicRoute from './Components/PublicRoute';

const SignIn = lazy(() => import('./pages/SignIn'));

function App() {
  return (
        <Switch>
          <PublicRoute path="/signin">
              <SignIn />
          </PublicRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
  );
}

export default App;