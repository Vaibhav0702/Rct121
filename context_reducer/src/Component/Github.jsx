

import React, { useEffect, useReducer } from 'react'

import axios from 'axios';

const initState = {
    loading: true,
    error: false,
    data: null
}

const githubActions = {
    success: 'success',
    failure: 'failure',
    fetch: 'fetch'
}
const githubUser = (state, action) => {

    switch (action.type) {

        case githubActions.fetch: {
            return {
                ...state,
                loading: true,
                error: false,
                data: null,
            }
        }

        case githubActions.success: {
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload,
            }
        }
        case githubActions.failure: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        default:
            return state
    }
}

export const Github = () => {


    const [{ loading, error, data }, dispatch] = useReducer(githubUser, initState);







    useEffect(() => {
        fetchData();
    }, []);




    const fetchData = () => {
        dispatch({
            type: githubActions.fetch
        });
        axios({
            url: "https://api.github.com/search/users",
            method: 'GET',
            params: {
                q: 'masai',
                per_page:10,
            },
        })
            .then((res) => {
                dispatch({
                    type: githubActions.success,
                    payload: res.data,
                })
            })
            .catch((err) => {
                dispatch({
                    type: githubActions.failure
                })
            })
    }


    return (


        <div style={{textAlign:"center"}}>
            <h1>GitHub</h1>

            {error && <h1>Something Went Wrong</h1>}

            {loading && <h1>...Loading</h1>}

            {data?.items.map((item) => (
                <div key={item.id}>User : {item.login}</div>
            ))}



        </div>


    )
}