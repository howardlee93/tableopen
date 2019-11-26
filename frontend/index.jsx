//entry.jsx


import React from 'react';
import ReactDOM from 'react-dom';



document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser){
  	preloadedState = {
  		session: {
  			currentUser: window.currentUser
  		}
  	};
  }
  const store = configureStore(preloadedState);
  window.getState = store.getState;

  ReactDOM.render(<Root store={store}/>, rootEl);
});


