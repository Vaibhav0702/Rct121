

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    const activeStyle = { color: "red", textDecoration: "none" };

    return (
        <>

            <nav style={{ display: "flex", gap: "2rem", justifyContent: "center", margin: "20px" }}>


                <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/" > Home </NavLink>


                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact</Link>
                <Link to="/users" >Users</Link>

                <Link to="/login" >Login</Link>

            </nav>



        </>
    )
}

export default NavBar



// difference between NavLink and Link is you can give  custom styling to navlink on the basis of condition .