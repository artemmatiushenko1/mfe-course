import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history'

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory()
  if(onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App history={history}/>, el);

  return {
    onParentNavigate({pathname: nextPathname}) {
      const { pathname } = history.location
      if(pathname !== nextPathname) {
        history.push(nextPathname)
      }
      console.log('parent navigates', location)
    }
  }
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory()
    });
  }
}

export { mount };
