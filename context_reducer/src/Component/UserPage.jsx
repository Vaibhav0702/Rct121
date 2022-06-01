

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const UserPage = () => {


    const [data, setData] = useState([]);
    const [loding, setLoding] = useState(true);

    const params = useParams();
    console.log(params);

    useEffect(() => {
        setLoding(true);

        const { user_id } = params;

        axios({
            url: `https://reqres.in/api/users/${user_id}`,
            method: "GET",
        }).then(res => {
            setData(res.data.data);

            setLoding(false)
        }).catch(err => {

            setLoding(false);
            console.log({ err: err.message });

        })


    }, [params.user_id]);

    console.log("data", data)





    return (


        <>

            <div>

                {loding && <div>Loding....</div>}



                <div >

                    <div> <img src={data?.avatar} alt="avatar" style={{ borderRadius: "20px" }} /></div>

                    <div> Name : {data?.first_name} {data?.last_name}</div>
                    <div> Email : {data?.email} </div>



                </div>


            </div>


        </>



    )
}

export default UserPage