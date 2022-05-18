import { useEffect, useState } from "react";



import { Showtimer } from "./Showtimer"

import { Controlbuttons } from "./Controlbuttons"

import { Manual } from "./Manual";

export const Timer = () => {

    const [isActive, setIsActive] = useState(false);

    const [isPaused, setIsPaused] = useState(true);

    const [stat,setStat]=useState(false)

    const [time, setTime] = useState(0);


    useEffect(() => {

        let interval = null;

        if (isActive && isPaused === false) {

            interval = setInterval(() => {

                setTime((time) => time + 10);

            }, 10);

        } else {

            clearInterval(interval);

        }
        return () => {

            clearInterval(interval);

        };
    }, [isActive, isPaused]);


    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div>
            <h1 style={{ color: "tomato", fontSize: "40px", fontStyle: "italic", }}>Google Timer</h1>

            {stat ? <Manual /> : <div><Showtimer time={time} />
                <Controlbuttons
                    active={isActive}
                    isPaused={isPaused}
                    handleStart={handleStart}
                    handlePauseResume={handlePauseResume}
                    handleReset={handleReset}
                /></div>
            }

            <button  onClick={(() => setStat(!stat))}>{stat ? "Automatic stop Watch" : "Enter Manually"}</button>

        </div>
    )
}