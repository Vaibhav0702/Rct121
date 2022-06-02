// {type : "" , payload : ""}

// Action Types

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";

export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// Action creator

export const addCount = (data) => {
  return {
    type: INCREMENT_COUNTER,
    payload: data,
  };
};


export const reduceCount = (data) => {
  return {
    type: DECREMENT_COUNTER,
    payload: data,
  };
};

// dispatch({type : "1" , payload : 1 })

// dispatch({type : "1" , payload : 2 })
