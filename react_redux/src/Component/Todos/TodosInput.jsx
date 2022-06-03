

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
     })
     .then(()=>{
         getTodos(dispatch);
     })
 };


    return (
        <div style={{margin:"20px"}}>
            <input style={{marginRight:"20px"}} value={text} onChange={(e) => setText(e.target.value)} placeholder="ADD NEW TASK" />

             <button  onClick={ handleADD }  >ADD</button>


        </div>
    )
}

export default TodosInput