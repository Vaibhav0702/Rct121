
import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import PrivateRoute from './PrivateRoute';
import UserPage from './UserPage';
import Users from './Users';










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


            </Routes>


        </>

    )
}

export default AllRoutes