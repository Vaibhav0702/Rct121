import {
  ADD_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./action";

const init = {
  loading: false,
  todos: [],
  error: false,
};

export const todosReducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_TODOS_REQUEST:
      return {
        ...store,
        loading: true,
        error: false,
      };

    case GET_TODOS_SUCCESS:
      return {
        ...store,
        loading: false,
        todos: payload,
        error: false,
      };

    case GET_TODOS_FAILURE:
      return {
        ...store,
        loading: false,
        error: true,
      };

    case ADD_TODOS_REQUEST:
      return {
        ...store,
        loading: true,
        error: false,
      };

    case ADD_TODOS_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
      };

    case ADD_TODOS_FAILURE:
      return {
        ...store,
        loading: false,
        error: true,
      };

    default:
      return store;
  }
};
