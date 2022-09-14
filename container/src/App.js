import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { lazy } from 'react';
import { Suspense } from 'react';

const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));

const generateClassname = createGenerateClassName({
  productionPrefix: 'cont',
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={'loading...'}>
          <Switch>
            <Route path="/auth">
              <AuthAppLazy
                onSignIn={() => {
                  setIsSignedIn(true);
                }}
              />
            </Route>
            <Route path="/" component={MarketingAppLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
