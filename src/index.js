import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import AppWrapper from './components/App';
import {Provider} from 'react-redux';


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


//using context to send store accross all componets
// export const StoreContext = createContext();
//it have two method Provider and Ponsumer
//Provider to send store or user or anything
//Consumer to get the store or user or anything
//we can directly send the context as well and we can wrap that in new class and then send as well
//these store can be accessed throughout all the child inside provider using consumer method
//direclty using
// ReactDOM.render(
//   <React.StrictMode>
//     <StoreContext.Provider value={store} >   
//       <App store={store} />
//     </StoreContext.Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//this all are done by library react-redux

//using a wrapper class
// class Provider extends React.Component
// {
//   render()
//   {
//     const {store} = this.props;
//     return (<StoreContext.Provider value={store} >
//       {this.props.children}
//     </StoreContext.Provider>);
//   }
// }

// export function connect(callback)
// {
//   return function(Component)
//   {
//       class ConnectedComponent extends React.Component
//       {
//         constructor(props)
//         {
//           super(props);
//           this.unsubscribe = this.props.store.subscribe(() => {
//             this.forceUpdate();
//           });
//         }

//         render()
//         {
//           const {store} = this.props;
//           const state = store.getState();
//           const dataToBePassedAsProps = callback(state);
//           return(
//             <Component {...dataToBePassedAsProps} dispatch={store.dispatch}/>
//           );
//         }
//       }

//       class ConnectedComponentWrapper extends React.Component
//       {
//         render()
//         {
//           return (
//             <StoreContext.Consumer>
//               {
//                 (store) => {
//                   return <ConnectedComponent store = {store}/>
//                 }
//               }
//             </StoreContext.Consumer>
//           );
//         }
//       }
//       return ConnectedComponentWrapper;
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store} >
      <AppWrapper store={store} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
