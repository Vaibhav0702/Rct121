
import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import Home from './Home';

import NavBar from './NavBar';

import ProductPage from './ProductPage';

import Products from './Products';











const AllRoutes = () => {
    return (
        <>

            <NavBar />



            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />


                <Route path='/products' element={<Products /> }  />



                <Route path='/products/:Product_id' element={  <ProductPage />}/>             
                  
               
                <Route path='/error' element={<ErrorPage /> }  />




               


            </Routes>


        </>

    )
}

export default AllRoutes