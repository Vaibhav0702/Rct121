

import React from 'react'
import { useSelector } from 'react-redux'

const TodosList = () => {


  const todos = useSelector((store) => store.todos.todos)

  const loading = useSelector((store) => store.todos.loading)


  return (
    <>

      <h3>Todos</h3>
      {loading && <div>Loading......</div>}
      {
        todos.map((e) => (
          <div key={e.id}><h5>{e.id} . {e.title} -------------- {`${e.status}`}</h5> </div>
        ))
      }


    </>
  )
}

export default TodosList