import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import movies from './reducers'

//creating store
//for store creatin we have to pass reducer as argument to createStore function

//this will call reducer and get the state
const store = createStore(movies);
console.log('store',store);
console.log('before state',store.getState());

store.dispatch(
  {
    type:'ADD_MOVIES',
    movies:[{name:'Superman'},{name:'Batman'}],
  }
);

console.log('after state', store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
