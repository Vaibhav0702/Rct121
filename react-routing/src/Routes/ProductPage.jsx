
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const ProductPage = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loding, setLoding] = useState(true);

    const params = useParams();
    console.log(params);

    useEffect(() => {
        setLoding(true);

        const { Product_id } = params;

        axios({
            url: `http://localhost:8080/products/${Product_id}`,
            method: "GET",
        }).then(res => {
            setData(res.data);

            setLoding(false)
        }).catch(err => {

            setLoding(false);
            console.log({ err: err.message });

            if(err.message === "Request failed with status code 404")
            {
                
                     navigate("/error")
                
            }

        })


    }, [params.Product_id]);

    console.log("data", data)





    return (


        <>

            <div>

                {loding && <div>Loding....</div>}



                <div style={{width:"20%" , margin:"auto" , borderRadius:"20px" , padding:"20px" ,boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset", background:"tomato" }}>

                

                    <div> Name : {data?.name} {data?.last_name}</div>

                    <div> Price : {data?.price} </div>

                    <div> Id : {data?.id} </div>



                </div>


            </div>


        </>



    )
}

export default ProductPage