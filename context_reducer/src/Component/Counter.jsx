
import React, { useReducer } from 'react'

const initState = {
    counter: 0,
    noOfClicks: 0
}

const counterActions = {
    increment: 'increment',
    decrement: 'decrement',
    reset: 'reset'
}
const reducer = (state, action) => {
    switch (action.type) {
        case counterActions.increment: {
            return {
                ...state,
                counter: state.counter + 1,
                noOfClicks: state.noOfClicks + 1
            };
        }
        case counterActions.decrement: {
            return {
                ...state,
                counter: state.counter - 1,
                noOfClicks: state.noOfClicks - 1
            };
        }
        case counterActions.reset: {
            return {
                ...initState
            };
        }
        default:
            return state;
    }
}

export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h2>Count: {state.counter}</h2>

            <h2> No Of Clicks: {state.noOfClicks}</h2>

            <div>


                <button style={{margin:"10px"}} onClick={() => dispatch({

                    type: counterActions.increment

                })}>ADD</button>


                <button style={{margin:"10px"}} onClick={() => dispatch({

                    type: counterActions.decrement

                })}>REDUCE</button>



                <button style={{margin:"10px"}} onClick={() => dispatch({

                    type: counterActions.reset

                })}>Reset</button>

            </div>
        </div>
    )
}