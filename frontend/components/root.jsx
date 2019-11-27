import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </Router>
  </BrowserRouter>
);

export default Root;
