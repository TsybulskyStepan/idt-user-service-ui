import React from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import Router from './containers/RootRouter';

import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './store/store.js';

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
