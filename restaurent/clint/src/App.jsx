
import { useEffect, useState } from 'react';
import './App.css';

import axios from "axios"
import RestaurentDetails from './Component/RestaurentDetails';
import Paginationcomponent from './Component/Paginationcomponent';

function App() {

  const [loading, setLoading] = useState(true);  // set loding

  const [error, setError] = useState(false); // set error 

  const [data, setData] = useState([]);  // set data

  const [page, setPage] = useState(1);  // set page

  const [ratingsort, setRatingSort] = useState("desc"); // set sort order

  const [costsort, setCostSort] = useState("asc");   // set sort order

  const [filterRating, setFilterRating] = useState(2); // set filter


  const [search, setSearch] = useState(""); // set search or q

  const [text, setText] = useState("");  // set input text 

  const [cash, setCash] = useState(null); // set payment ascash

  const [card, setCard] = useState(null); // set payment as card

  const [upi, setUpi] = useState(null); // set payment as upi


  useEffect(() => {

    getData(page, ratingsort, costsort, filterRating, search, cash, card, upi);

  }, [page, ratingsort, costsort, filterRating, search, card, cash, upi])


  console.log(data);


  const getData = async (page, ratingsort, costsort, filterRating, search, card, cash, upi) => {

    setLoading(true);

    const paramsForPayment = {}

    if (cash !== null) paramsForPayment["paymentMethods.cash"] = cash;
    if (card !== null) paramsForPayment["paymentMethods.card"] = card;
    if (upi !== null) paramsForPayment["paymentMethods.upi"] = upi;

    axios({
      method: "get",
      url: "http://localhost:3000/food",

      params: {
        _page: page,
        _limit: 4,
        _sort: "rating,cost",
        _order: `${ratingsort},${costsort}`,
        rating_gte: filterRating,
        q: search,

        ...paramsForPayment


      }

    }).then(res => {
      setData(res.data);
      setLoading(false);
    }).catch(err => {
      setError(true);
      setLoading(false);
    })

  }





  return (
    <div className="App">
      <h1>... Restaurent Details ... </h1>

      <h4 style={{ fontStyle: "italic", color: "tomato" }}>   Page : {`[ ${page} ]`}      </h4>

      <h4 style={{ fontStyle: "italic", color: "tomato" }}>   Rating : {`[ ${ratingsort} ]`}     </h4>

      <h4 style={{ fontStyle: "italic", color: "tomato" }}>    Cost : {`[ ${costsort} ]`}   </h4>


      {loading && <div>Lodding.............</div>}

      <div>
        {/* Search */}


        <div>
          <h4>Search</h4>

          <input value={text} onChange={(e) => setText(e.target.value)} type="text" />

          <button onClick={() => setSearch(text)} >Search</button>
        </div>


      </div>




      <div >
        {/* Sort  */}
        <div>
          <button disabled={ratingsort === "desc"} onClick={() => setRatingSort("desc")}>Sort By DESC Rating</button>
          <button disabled={ratingsort === "asc"} onClick={() => setRatingSort("asc")}>Sort By ASC Rating</button>
        </div>

        <div>
          <button disabled={costsort === "desc"} onClick={() => setCostSort("desc")}>Sort By DESC Cost</button>
          <button disabled={costsort === "asc"} onClick={() => setCostSort("asc")}>Sort By ASC Cost</button>
        </div>
      </div>

      <div>

        {/* Filter rating */}

        <h4>Filter Rating</h4>

        <button onClick={() => setFilterRating(4)} >Greater than 4</button>
        <button onClick={() => setFilterRating(3)} >Greater than 3</button>
        <button onClick={() => setFilterRating(2)} >Greater than 2</button>
        <button onClick={() => setFilterRating(1)}  >Greater than 1</button>
        <button onClick={() => setFilterRating(0)}  >All</button>

      </div>


      <div>

        {/* Payment  */}


        <h4>Payment Method</h4>

        <button onClick={() => setCash(!cash)}>Cash  ---  {cash ? "TRUE" : "FALSE"} </button>


        <button onClick={() => setCard(!card)}>Card  --- {card ? "TRUE" : "FALSE"}   </button>


        <button onClick={() => setUpi(!upi)}>UPI --- {upi ? "TRUE" : "FALSE"}   </button>

        <button onClick={()=>{

             setCard(null);
             setCash(null);
             setUpi(null);

        }}>
          RESET
        </button>



      </div>



      <div>
        {/* pagination */}

        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Pre</button>

        <Paginationcomponent currentPage={page} lastPage={5} onPageChange={setPage} />

        <button disabled={page === 5} onClick={() => setPage(page + 1)} >Next</button>
      </div>


      <div>

        {
          data.map(e =>
            <RestaurentDetails key={e.id} {...e} />
          )
        }
      </div>
    </div>
  );
}

export default App;
