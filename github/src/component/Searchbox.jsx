import { useState } from "react";

import "./search.css"

export const Searchbox = ({ handleClick , handleSubmit, per_page }) => {

    const [text, setText] = useState("");
    const [perPageCount , setPerpageCount] = useState("");

    return (
        <div>

            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Search Repo" />

            <button onClick={() => { handleClick(text) }}>Search</button>


            <input type="number" value={perPageCount} onChange={(e) =>  setPerpageCount(e.target.value)}  placeholder="Submit per_page Users Count" />

            <button onClick={() => { handleSubmit(perPageCount) }}>Submit</button>
           
            <div> per_page Users Count :  {per_page}</div>
         

        </div>
    )

};
