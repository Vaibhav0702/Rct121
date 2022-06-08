
import React from 'react'

const ErrorPage = () => {
  return (
    <div>
           
         <img src="data:image/jpeg;base64,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" alt="" />  
        <h1>Product does not exist </h1>


    </div>
  )
}

export default ErrorPage