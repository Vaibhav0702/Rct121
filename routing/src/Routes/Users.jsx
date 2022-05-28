

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';




const Users = () => {

    const [data , setData] = useState([]);
    const [loding,setLoding] = useState(true);

     const [state] = useContext(AuthContext);

     let [searchParams, setSearchParams] = useSearchParams();

     const [page , setPage] = useState( Number( searchParams.get("page") ) ||  1);

     
   




    useEffect(()=>{

        setLoding(true);

        

    
         axios({
             url:"https://reqres.in/api/users",
             method:"GET",
             params:{
                 page
             }
         }).then(res=>{
             setData(res.data);
            
             setLoding(false)
         }).catch(err=> {
             
            setLoding(false);
            console.log({err : err.message});

         })


    },[page]);


    useEffect(()=>{
      
         setSearchParams({page})

    },[page , setSearchParams])


    console.log("data" , data)

  return (
      <>
      
         <div>
            {state.token && <><h3>Token : {state.token}</h3></>}
            {loding && <div>Loding....</div>}

            <div>
                <button disabled={page===1} onClick={()=>setPage(page-1)} >PRE</button>
                <button  disabled={page===data?.total_pages} onClick={()=> setPage(page+1)} >NEXT</button>
                
            </div>

            {
                data?.data?.map((e) => (

                   <div key={e.id}   >

                       
                         <div> Name : {e.first_name} {e.last_name}</div>
                        

                         <Link to={`/users/${e.id}`} >See More</Link>
  

                   </div>
                ))
            }

         </div>
      
      
      </>
  )
}

export default Users



// Link -> a tag 
 // Route -> where the UI gets shown 
 // Navigate is redirecting a user 