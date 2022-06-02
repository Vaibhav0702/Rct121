
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./action";

// store : {counter : 0}

const init = { counter: 0 };

//store , action


export const reducer = (store = init, { type, payload }) => {
  switch (type) {

    case INCREMENT_COUNTER:
      return { 
          ...store,
          counter :  store.counter + payload
      };

    case DECREMENT_COUNTER:
      return {
          ...store,
          counter : store.counter - payload
      };

    default:
      return store;
  }
};