const init = {
  isAuth: true,
  token: "ABCD",
};

export const authReducer = (store = init, { type, payload }) => {
  switch (type) {
      
    case "LOGIN_SUCCESS": {
      return {
        ...store,
        isAuth: true,
        token: payload,
      };
    }

    case "LOGOUT_SUCCESS": {
      return {
        ...store,
        isAuth: false,
        token: null,
      };
    }

    default:
      return store;
  }
};
