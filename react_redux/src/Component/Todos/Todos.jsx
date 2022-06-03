


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../../Redux/Todos/action'
import Pagination from './Pagination'
import TodosInput from './TodosInput'
import TodosList from './TodosList'

const Todos = () => {


  const todos = useSelector((store) => store.todos.todos)

  const [page, setPage] = useState(1);  // set page

  const dispatch = useDispatch();


  useEffect(() => {

    getTodos(dispatch, page)

  }, [page])






  return (
    <>
      <TodosInput />

      <br />

      <TodosList />


      <div>
        {/* pagination */}

        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Pre</button>

        <Pagination currentPage={page} lastPage={5} onPageChange={setPage} />

        <button disabled={page === 5} onClick={() => setPage(page + 1)} >Next</button>
      </div>


    </>
  )
}

export default Todos