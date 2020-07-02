import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';

//creating store
//for store creatin we have to pass reducer as argument to createStore function

//creating a middleware
//its a function like f(obj,next,action) but after currying looks like these
const logger = function(obj)
{
  //this obj has two function dispatch and getState we can use them here to perform some operation related to them
  // like {dispatch,getState}
  return function(next)
  {
    return function(action)
    {
      console.log('Middleware 1 ACTION_TYPE = ',action.type);
      next(action);
    }
  }
}

//we can do dereferencing here in parameter as well
const logger2 = ({dispatch,getState}) => (next) => (action) => { console.log('middleware 2 action type ', action.type); next(action);};


//handle function type action here in these middleware
//we have these thunk inbuilt in redux library redux-thunk we will use it directly that middleware
//now commenting these
// const thunk = ({dispatch,getState}) => (next) => (action) => {
//   if(typeof action === 'function')
//   {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

//this will call reducer and get the state
const store = createStore(rootReducer,applyMiddleware(logger,logger2,thunk));

//we will set these state in component not here
// console.log('store',store);
// console.log('before state',store.getState());
// store.dispatch(
//   {
//     type:'ADD_MOVIES',
//     movies:data,
//   }
// );
// console.log('after state', store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
