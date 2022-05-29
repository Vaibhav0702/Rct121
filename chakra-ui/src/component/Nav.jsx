



import { Button } from '@chakra-ui/react';

import { Link } from "react-router-dom";

import { Divider } from '@chakra-ui/react'

import "./Nav.css"

export const Nav = () => {
    const nav = [
        { title: "Home", to: "/" },
        { title: "layout-1", to: "/layout1" },
        { title: "layout-2", to: "/layout2" },
        { title: "layout-3", to: "/layout3" }
    ]
    return (
       
        <>

        <div className="nav">

            <div className="box1">
                <img style={{ width: "100%" }} src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75" alt="" />
            </div>

            <div className='box2'>
                {nav.map((e, i) => (
                    <Link style={{ fontSize: "20px" }} key={i} to={e.to}>{e.title}</Link>
                ))}
            </div>

            <div className='box3'>
                <Button colorScheme="blue" variant='ghost'>
                    Sign in
                </Button>

                <Button colorScheme="blue" variant="outline">
                    Log in
                </Button>
                <Button colorScheme='blue'>Post a job<span>🚀</span></Button>
            </div>

          
        </div>
          
        <Divider />


        </>
    );
};