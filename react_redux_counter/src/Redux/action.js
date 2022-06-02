// {type : "" , payload : ""}

// Action Types

export const INCREMENT_COUNT = "INCREMENT_COUNT";

export const DECREMENT_COUNT = "DECREMENT_COUNT";

export const ADD_TODO = "ADD_TODO";

// Action creator

export const addCount = (data) => {
  return {
    type: INCREMENT_COUNT,
    payload: data,
  };
};

export const reduceCount = (data) => {
  return {
    type: DECREMENT_COUNT,
    payload: data,
  };
};

export const addtodo = (data) => {
    return {

        type: ADD_TODO,
        payload: data,
    }
}