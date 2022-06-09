


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";



// Action creator

export const logIn  = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
};

export const logOut = (data) => {
    return {
        type: LOGOUT_SUCCESS,

    };
};
