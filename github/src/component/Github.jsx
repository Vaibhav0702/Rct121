
import axios from 'axios';
import GithubCard from "./GithubCard";
import React, { useEffect, useState } from 'react'
import { Searchbox } from './Searchbox';



const getGihubUsers = (q = "Vaibhav0702", page = 1, order="desc" , sort="updated" , per_page=2) => {

    return axios("https://api.github.com/search/repositories", {
        method: "GET",
        params: {
            q,
            sort,
            order,
            per_page,
            page,


        }
    })

};


const Github = () => {

    const [loading, setLoding] = useState(true);

    const [error, setError] = useState(false);

    const [query, setQuery] = useState("masai");

    const [data, setData] = useState([]);

    const [page, setPage] = useState(1);

    const [order, setOrder] = useState("desc");

    const [sort, setSort] = useState("updated")

    const [per_page, setPer_page] = useState(2)


    console.log(1);


    useEffect(() => {
        setLoding(true);
        getGihubUsers(query, page, order , sort , per_page ).then((res) => {
            setLoding(false);
            setData(res.data);
            setError(false);
        }).catch((err) => {
            setLoding(false);
            setError(true);
            console.log(err);
        });
    }, [query, page, order , sort , per_page]);


    const handleClick = (query) => setQuery(query);

    const handleSubmit = (per_page) => setPer_page(per_page);

    console.log(data);
    console.log(query);



    return (
        <>

            <div>
                <h2>Github Users</h2>
                {loading && <div>...Loding</div>}
                {error && <div>....Error</div>}

                <Searchbox handleClick={handleClick} handleSubmit={handleSubmit} per_page={per_page} />

                {
                    data?.items?.map((item) => (
                        <GithubCard key={item.id} {...item} />
                    ))
                }

                <div>

            

                    <button disabled={page === 1} onClick={() => setPage(page - 1)} >
                        PREV
                    </button>

                    <button onClick={() => setPage(page + 1)} >
                        PREV
                    </button>

                

                    <button onClick={() => order === "desc" ? setOrder("asc") : setOrder("desc")}>
                        Order  -- {order}
                    </button>


                    <select name="Sort" id="sort" onChange={(e) => setSort(e.target.value)} >

                        <option value={{ sort }}  > updated </option>

                        <option value={{ sort }} > stars </option>

                        <option value={{ sort }} > forks </option>

                    </select>


                </div>




            </div>




        </>
    );
}


export default Github