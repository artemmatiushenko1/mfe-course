import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassname = createGenerateClassName({
  productionPrefix: 'ma'
})

const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;
