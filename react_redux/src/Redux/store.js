import { applyMiddleware, combineReducers, legacy_createStore as creatStore } from "redux"; //redux-toolkit

import thunk from "redux-thunk";

import { authReducer } from "./Auth/reducer";
import { counterReducer } from "./Counter/reducer";

import { todosReducer } from "./Todos/reducer";


const rootReducer = combineReducers({
    counter : counterReducer,
    todos : todosReducer,
    auth:authReducer,
})







function logger1({ getState }) {
    return next => action => {
      console.log('will dispatch 1', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch 1', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }
  


  function logger2 ({ getState }) {
    return next => action => {
      console.log('will dispatch 2 ', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch 2', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }
  



const myCustomThunk = ({dispatch , getState} ) => (next) => (action) =>

typeof action === "function" ? action(dispatch , getState) : next(action);    // custom thunk 






















// export const store = creatStore(rootReducer);


export const store = creatStore(rootReducer ,
     
    applyMiddleware(myCustomThunk , logger1 , logger2)

    //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    
    ); // with redx dev-tool


console.log(`store` , store.getState());