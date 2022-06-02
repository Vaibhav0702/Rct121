import axios from "axios";

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

export const ADD_TODOS_REQUEST = "ADD_TODOS_REQUEST";
export const ADD_TODOS_SUCCESS = "ADD_TODOS_SUCCESS";
export const ADD_TODOS_FAILURE = "ADD_TODOS_FAILURE";

// Action creator

export const getTodosRequest = (data) => {
  return {
    type: GET_TODOS_REQUEST,
    payload: data,
  };
};

export const getTodosSuccess = (data) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: data,
  };
};

export const getTodosFailure = (data) => {
  return {
    type: GET_TODOS_FAILURE,
    payload: data,
  };
};

export const getTodos = (dispatch) => {
  const todoRequestAction = getTodosRequest();

  dispatch(todoRequestAction);

  axios({
    url: "http://localhost:8080/task",
    method: "GET",
  })
    .then((res) => {
      const todoSuccessAction = getTodosSuccess(res.data);
      dispatch(todoSuccessAction);
    })
    .catch((err) => {
      const todoErrorAction = getTodosFailure();
      dispatch(todoErrorAction);
    });
}; // get todos

//  ------------------------------------------------

export const addTodosRequest = (data) => {
  return {
    type: ADD_TODOS_REQUEST,
    payload:data
    
  };
};

export const addTodosSuccess = (data) => {
  return {
    type: ADD_TODOS_SUCCESS,
    payload: data,
  };
};

export const addTodosFailure = (data) => {
  return {
    type: ADD_TODOS_FAILURE,
    payload: data,
  };
};

export const addTodos = ({title , dispatch}) => {
  const todoRequestAction = addTodosRequest();

  dispatch(todoRequestAction);

  axios({
    url: "http://localhost:8080/task",
    method: "POST",
    data:{
        title,
        status:false
    }
  })
    .then((res) => {
      const todoSuccessAction = addTodosSuccess();
      dispatch(todoSuccessAction);
    })
    .catch((err) => {
      const todoErrorAction = addTodosFailure();
      dispatch(todoErrorAction);
    });
}; // add todo
