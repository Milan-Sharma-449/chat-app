import React, { lazy, Suspense } from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router';
import PrivateRoute from './Components/PrivateRoute';
import Home from './pages/Home';
import PublicRoute from './Components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import { ErrorBoundary } from './Components/ErrorBoundary';

const SignIn = lazy(() => import('./pages/SignIn'));

function App() {
  return (
    <ErrorBoundary>
      <ProfileProvider>
        <Switch>
          <PublicRoute path="/signin">
            <Suspense fallback={<div>Loading...</div>}>
              <SignIn />
            </Suspense>
          </PublicRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </ProfileProvider>
    </ErrorBoundary>
  );
}

export default App;