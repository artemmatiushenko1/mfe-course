import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateClassname = createGenerateClassName({
  productionPrefix: 'cont'
})

const App = () => {
  return (
    <BrowserRouter>
    <StylesProvider generateClassName={generateClassname}>
      <div>
        <Header/>
        <MarketingApp />
      </div>
    </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
