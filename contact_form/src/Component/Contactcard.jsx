
import React, { useState } from 'react'

import styles from "./Contactcar.module.css";

import Avatar from '@mui/material/Avatar';

const Contactcard = (props) => {

    // ES6 destructuring 

    const { name, email, id, phone , img } = props;



    const [isActive, setIsActive] = useState(true);


    // Conditional rendering

    // if (isActive) {
    //     return <div onClick={() => setIsActive(false)} >Activated</div>
    // }


    return (
        <>
            <div className={styles.container}>

                <div className={styles.left}>
                    <Avatar src={img} className={styles.Avtar}   sx={{ width: 56, height: 56 }} />
                </div>

                <div className={styles.right}>
                    <p style={{fontWeight:"bold"}} >{name}</p>
                    <p style={{color:"gray"}}>{email}</p>

                    {/* if false , show click to show more */}


                    {isActive ? <div onClick={() => setIsActive(!isActive)} > See More</div> : <div style={{color:"red"}}  onClick={() => setIsActive(!isActive)} >{phone}</div>}

                    {/* else true, show number */}

                </div>
            </div>




        </>
    )
}

export default Contactcard;