


import { useDispatch, useSelector } from "react-redux";
import { addCount, reduceCount } from "../../Redux/Counter/action";




export const Counter = () => {


    const dispatch = useDispatch();

    const counter = useSelector((store) => store.counter.counter); // useContext 
  

    return <div>


        <h3>Counter : {counter} </h3>

        <button style={{margin:"10px"}} disabled={counter === 0} onClick={() => {
            dispatch(reduceCount(1))
        }}>REDUCE</button>
         
         <button style={{margin:"10px"}} disabled={counter === 10} onClick={() => {
            dispatch(addCount(1))
        }}>ADD </button>


    </div>


}