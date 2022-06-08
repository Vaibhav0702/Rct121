

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

import "./Product.css"



const Products = () => {

    const [data, setData] = useState([]);
    const [loding, setLoding] = useState(true);



    let [searchParams, setSearchParams] = useSearchParams();

    const [page, setPage] = useState(Number(searchParams.get("page")) || 1);







    useEffect(() => {

        setLoding(true);




        axios({
            url: "http://localhost:8080/products",
            method: "GET",
            params: {
                page,
                _limit:2
            }
        }).then(res => {
            setData(res.data);

            setLoding(false)
        }).catch(err => {

            setLoding(false);
            console.log({ err: err.message });

        })


    }, [page]);


    useEffect(() => {

        setSearchParams({ page })

    }, [page , setSearchParams])


    console.log("data", data)

    return (
        <>

            <div>

                {loding && <div>Loding....</div>}

                <div>
                    <button disabled={page === 1} onClick={() => setPage(page - 1)} >PRE</button>
                    <button disabled={page === 2} onClick={() => setPage(page + 1)} >NEXT</button>

                </div>

                <div className='tbox'>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>More</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((e) => (

                                    <tr>

                                        <td> {e.name}</td>
                                        <td>
                                            {e.price}
                                        </td>

                                        <Link to={`/products/${e.id}`} ><td >See More</td></Link>


                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>


            </div>


        </>
    )
}

export default Products



