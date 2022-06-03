//store , action

import { INCREMENT_COUNT, DECREMENT_COUNT } from "./action";

const init = { counter: Number(localStorage.getItem("Counter")) || 0 };

export const counterReducer = (store = init, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNT: {
      const value = store.counter + payload;
      localStorage.setItem("Counter", value);
      return { ...store, counter: value };
    }
    case DECREMENT_COUNT: {
      const value = store.counter - payload;
      localStorage.setItem("Counter", value);
      return { ...store, counter: value };
    }
    default:
      return store;
  }
};
