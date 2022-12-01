import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router';
import PrivateRoute from './Components/PrivateRoute';
import Home from './pages/Home/index';
import PublicRoute from './Components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import SignIn from './pages/SignIn';

function App() {
  return (
        <ProfileProvider>
          <Switch>
          <PublicRoute path="/signin">
              <SignIn />
          </PublicRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
        </ProfileProvider>
  );
}

export default App;