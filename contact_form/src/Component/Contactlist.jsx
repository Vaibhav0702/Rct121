import { useState } from "react";
import Contactcard from "./Contactcard";


const initData = [


    {
        id: 1,
        name: "vaibhav",
        email: "vaibhav@123.com",
        phone: "8857098923",
    },
    {
        id: 2,
        name: "rinku",
        email: "rinku@123.com",
        phone: "88589225643"
    },
    {
        id: 3,
        name: "tinku",
        email: "tinku@123.com",
        phone: "88484218923"
    },
    {
        id: 4,
        name: "shan",
        email: "shan@123.com",
        phone: "88572589223"
    },
    {
        id: 5,
        name: "aboli",
        email: "aboli@123.com",
        phone: "88329823573"
    }


];


function ContactList() {

    const [data, setData] = useState(initData);


    return (



        <div>
            {
                data.map( e => <Contactcard key={e.id} name={e.name} email={e.email} id={e.id} phone={e.phone} img={e.img} /> )
            }
        </div>
    )




}


export default ContactList;