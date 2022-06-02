



import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { addtodo } from "../Redux/action";

export const Todo = () => {

    const todos = useSelector((store) => store.todos);

    const [text, setText] = useState("");

    const [data, setData] = useState([])

    const dispatch = useDispatch();


    const addtask = () => {
        dispatch(
            addtodo({
                title: text,
                status: false,
                detail: "",
            })
        );
        handleSubmit()
    };


    const handleSubmit = async (e) => {
        // e.preventDefault();
        try {
            await fetch(`http://localhost:8080/task`, {
                method: "POST",
                body: JSON.stringify({ title: text, status: false, detail: "" }),
                headers: { "Content-Type": "application/json" }
            })
            getdata();
        }
        catch (err) {
            console.log(err)
        }
    }


    const getdata = async () => {
        try {
            let data = await fetch("http://localhost:8080/task");
            data = await data.json();
            //console.log(data)
            setData(data);
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getdata();
    }, []);


    const deletetask = async (e) => {
        try {
            await fetch(`http://localhost:8080/task/${e}`, {
                method: "DELETE",
                body: JSON.stringify({ title: text, status: false }),
                headers: { "Content-Type": "application/json" }
            })
            getdata();
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div> 
           
           <h3>TODO List</h3>

            <input
                type="text"
                placeholder="Eneter Task"
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {
                addtask()
                alert("Task Added")
            }}>ADD TASK</button>
            {data.map((t) => (
                <div style={{display :"flex" , justifyContent:"center",gap:"20px", margin:'20px'}}>
                   <div key={t.title}>{t.id} . {t.title}</div>
                    <button onClick={() => {
                        deletetask(t.id)
                        alert("Task delete")
                    }}>delete</button>
                </div>
            ))}
        </div>
    );
};