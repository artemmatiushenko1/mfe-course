import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassname = createGenerateClassName({
  productionPrefix: 'au'
})

const App = ({history}) => {
  return (
    <div>
      hello
      <StylesProvider generateClassName={generateClassname}>
        <Router history={history}>
          <Switch>
            <Route path={'/auth/signin'} component={SignIn}/>
            <Route path={'/auth/signup'} component={SignUp}/>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
