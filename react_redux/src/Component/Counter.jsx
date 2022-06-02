


import React from "react";
import { addCounter, reduceCounter } from "../Redux/action";

import { AppContext } from "../Redux/AppContextProvider";




export const Counter = () => {

    const [state, setState] = React.useState(0)

    const { dispatch, getState } = React.useContext(AppContext)

    const { counter } = getState();





    const handleAdd = () => {

        dispatch(addCounter(1));



    }


    const handleReduce = () => {

        dispatch(reduceCounter(1));
    
    }

    return <>

        <div>Counter : {counter} </div>

        <button onClick={handleAdd}>ADD</button>

        <button onClick={handleReduce}>REDUCE</button>


    </>



}