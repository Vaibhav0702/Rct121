
import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../Component/About';
import Contact from '../Component/Contact';
import { Counter } from '../Component/Counter';
import { Github } from '../Component/Github';
import Home from '../Component/Home';
import Login from '../Component/Login';
import NavBar from '../Component/NavBar';
import Users from '../Component/User';
import UserPage from '../Component/UserPage';

import PrivateRoute from './PrivateRoute';











const AllRoutes = () => {
    return (
        <>

            <NavBar />



            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />


                <Route path='/users' element={<Users />

                    // <PrivateRoute to='/login'  >

                    // </PrivateRoute> 

                }


                />



                <Route path='/users/:user_id' element={

                    <PrivateRoute to='login'>
                        <UserPage />
                    </PrivateRoute>} />


                 


                <Route path='/login' element={<Login />} />


                <Route path='/github' element={<Github />} />

                <Route path='/counter' element={<Counter/>} />


            </Routes>


        </>

    )
}

export default AllRoutes