//store , action

import { INCREMENT_COUNT, DECREMENT_COUNT , ADD_TODO } from "./action";

// store : {counter : 0}

export const counterReducer = (store, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNT:
      return { ...store, counter: store.counter + payload };

    case DECREMENT_COUNT:
      return { ...store, counter: store.counter - payload };

    case ADD_TODO:
      return { ...store, todos: [...store.todos, payload] };

    default:
      return store;
  }
};
