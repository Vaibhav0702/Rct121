

import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos, getTodos } from '../../Redux/Todos/action';

const TodosInput = () => {

    const [text, setText] = useState("");

 const dispatch = useDispatch();


 const handleADD=()=>{

     addTodos({
         title:text,
         dispatch
     }).then(()=>{
         getTodos(dispatch);
     }).catch((err)=>{
         console.log("err" , err.message);
     });
 };


    return (
        <>
            <input  value={text} onChange={(e) => setText(e.target.value)} placeholder="ADD NEW TASK" />

             <button  onClick={handleADD}       >ADD</button>


        </>
    )
}

export default TodosInput