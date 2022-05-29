

import { Box, Heading, Grid, Text } from "@chakra-ui/react";

import { Button, Flex, Input } from "@chakra-ui/react";

import { useState } from "react";



import "./data.css"

export const AppendData = () => {
    const [data, setData] = useState([
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F08360c55-4fb4-48e0-8392-eeda80628196&w=750&q=75",
            company: "Planned parethood of Southern New England , Inc.",
            title: "Development Database Assistant",
            post: "Junior",
            icon: ["https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Full-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F5588c68a-7beb-4004-96ac-11b2ba547e5c&w=750&q=75",
            company: "Automio",
            title: "Full Stack Java Script Developer",
            post: "Mid, Senior",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F5588c68a-7beb-4004-96ac-11b2ba547e5c&w=750&q=75",
            company: "Automio",
            title: "Full Stack Java Script Developer",
            post: "Mid, Senior",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F5588c68a-7beb-4004-96ac-11b2ba547e5c&w=750&q=75",
            company: "Automio",
            title: "Head Of Marketing",
            post: "Manager, Director",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F5588c68a-7beb-4004-96ac-11b2ba547e5c&w=750&q=75",
            company: "Automio",
            title: "Head Of Marketing",
            post: "Manager, Director",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=750&q=75",
            company: "Administrate",
            title: "Content Specialist",
            post: "Mid",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=750&q=75",
            company: "Administrate",
            title: "Customer Acquisition Manager",
            post: "Mid",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=750&q=75",
            company: "Administrate",
            title: "Email and Lifecycle Marketing Manager",
            post: "Manager",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=750&q=75",
            company: "Administrate",
            title: "Director, Product Management",
            post: "Director",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=750&q=75",
            company: "Administrate",
            title: "VP Of Professional Services",
            post: "Director",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=750&q=75",
            company: "Administrate",
            title: "Engineering Manager",
            post: "Manager",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=750&q=75",
            company: "Talewind",
            title: "Lead Producer",
            post: "50k-60k",
            icon: ["https://www.svgrepo.com/show/16269/bookmark.svg", "https://cdn-icons-png.flaticon.com/128/889/889647.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Full-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=750&q=75",
            company: "Talewind",
            title: "Lead Game Developer",
            post: "40k-50k",
            icon: ["https://www.svgrepo.com/show/16269/bookmark.svg", "https://cdn-icons-png.flaticon.com/128/889/889647.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Full-Time"
        },
        {
            logo: "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd74e52d1-6529-4ab1-98b2-a27b1b9947ed&w=750&q=75",
            company: "The Wanderlust Group",
            title: "Director of Marketing",
            post: "$150k",
            icon: ["https://img.icons8.com/color/2x/globe.png", "https://www.svgrepo.com/show/16269/bookmark.svg"],
            category: "Fufll-Time"
        },

    ])
    return (
        <>
            <div className="box">
                <div className="datab">

                    <Text fontSize={"50px"} fontWeight={"bold"}>
                        Find The Right
                    </Text>
                    <Text fontWeight={"bold"} fontSize={"50px"}>
                        <span style={{ color: "rgb(87,111,209)" }}>Four-Day</span>
                        <span> Week Job</span>
                    </Text>

                </div>


                <div className="datab2">
                    <Input className="input" placeholder='type and search' />
                    <Button style={{ background: "grey", color: "white" }}>search</Button>
                </div>
                <Flex className="datab3"  >
                    <Button style={{ background: "rgb(125,88,209)", padding: "5px", borderRadius: "10px", width: "30%", color: "white" }}><img style={{ width: "20px", marginRight: "10px" }} src="https://img.icons8.com/color/2x/globe.png" />Remote</Button>
                    <Button style={{ background: "rgb(125,88,209)", padding: "5px", borderRadius: "10px", width: "30%", color: "white" }}>Tech</Button>
                    <Button style={{ background: "rgb(125,88,209)", padding: "5px", borderRadius: "10px", width: "30%", color: "white" }}><img style={{ width: "20px", marginRight: "10px" }} src="https://img.icons8.com/color/2x/bullish.png" />Marketing</Button>
                </Flex>
            </div>



            <Grid templateColumns='repeat(1, 1fr)' gap={25} style={{ marginTop: "5%" }} >
                {data.map((e) => (
                    <Box id="card" p={5} shadow='md' borderWidth='1px' style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", width: "70%", margin: "auto", borderRadius: "10px" }} >
                        <Flex style={{ justifyContent: "space-between" }}>
                            <Flex>
                                <img style={{ width: "30px" }} src={e.logo} />
                                <Text mt={4}>{e.company}</Text>
                            </Flex>
                            <Flex >
                                {e.icon.map((e) => (

                                    <img style={{ width: "30px" }} src={e} />
                                ))}
                            </Flex>
                        </Flex>

                        <Heading style={{ marginLeft: "5%", fontSize: "22px", fontWeight: "bold" }} fontSize='9xl'>{e.title}</Heading>

                        <Flex style={{ marginLeft: "5%", justifyContent: "space-between" }}>
                            <Text style={{ color: "grey" }}>{e.post}</Text>
                            <Text mt={4} style={{ color: "grey" }}>{e.category}</Text>
                        </Flex>
                    </Box>
                ))}
            </Grid>
        </>
    );
};