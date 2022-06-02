//store , action

import { INCREMENT_COUNT, DECREMENT_COUNT } from "./action";

const init = { counter: 0 };

export const counterReducer = (store = init, { type, payload }) => {
  switch (type) {
    
    case INCREMENT_COUNT:
      return { ...store, counter: store.counter + payload };

    case DECREMENT_COUNT:
      return { ...store, counter: store.counter - payload };

    default:
      return store;
  }
};
