

import React from 'react'

const Paginationcomponent = ({

  currentPage,
  lastPage,
  onPageChange


}) => {


  const arr = new Array(lastPage).fill(0);

  return (
    <>
      <div>
        {/* pagination */}

        {/* <button disabled={page === 1} onClick={() => setPage(page - 1)}>Pre</button>
        <button onClick={() => setPage(page + 1)} >Next</button> */}

        {
          arr.map((item, page) => <button onClick={() => onPageChange(page+1)} disabled={(page + 1) === currentPage}>{page + 1}</button>)
        }

      </div>


    </>
  )
}

export default Paginationcomponent