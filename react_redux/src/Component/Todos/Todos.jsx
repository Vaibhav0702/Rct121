


import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos } from '../../Redux/Todos/action'
import TodosInput from './TodosInput'
import TodosList from './TodosList'

const Todos = () => {

    const dispatch = useDispatch();

    useEffect(()=>{

        getTodos(dispatch)

    },[])



    


  return (
   <>
    <TodosInput/>
   
     <br />

     <TodosList/>
   
   </>
  )
}

export default Todos