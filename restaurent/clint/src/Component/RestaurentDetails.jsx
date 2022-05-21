
import React from 'react'

const RestaurentDetails = ({

    image: url,
    name:title,
    cost,
    rating,
    votes,
    reviews,
   cuisine:tags,
   paymentMethods

}) => {


    return (
        <>

            <div style={{ display: "flex", gap: "2rem"  , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px ", borderRadius:"20px" , margin : "auto", marginTop:"0.5rem" , width:"60%" ,padding:"10px" }}>

                <div>
                    <img width="50px" src={url} alt={title} />
                </div>
                <div>
                    <div>{title}</div>
                    <div>{tags}</div>
                    <div>Cost ${cost} for one</div>
                    <div>Accepts {JSON.stringify(paymentMethods)}</div>
                </div>
                <div>
                    <div style={{color:"red"}}>
                        {rating}
                    </div>
                    <div>{votes} Votes </div>
                    <div>
                        {reviews} Reviews
                    </div>
                </div>

            </div>



        </>
    )
}

export default RestaurentDetails