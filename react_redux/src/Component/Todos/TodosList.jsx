

import React from 'react'
import { useSelector } from 'react-redux'

const TodosList = () => {

const todos  = useSelector((store) => store.todos.todos)





  return (
   <>  
    
    <h3>Todos</h3>
     {
         todos.map((e) => (
             <div><h5>{e.id} . {e.title}</h5></div>
         ))
     }
   
   
   </>
  )
}

export default TodosList