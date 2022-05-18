import { useEffect, useState } from "react";

import { Controlbuttons } from "./Controlbuttons";

import { ShowManual } from "./ShowManual";



export const Manual = () => {

    const [isActive, setIsActive] = useState(false);

    const [isPaused, setIsPaused] = useState(true);

    const [manual, setManual] = useState(0);
    

    console.log(manual)


    useEffect(() => {

        let interval = null;

        if (isActive && isPaused === false) {

            interval = setInterval(() => {

                setManual((time) => time - 10);

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
        
        setManual(0);
   
    };

    return (
        <div>
            <div>
                {/* <input type="number" placeholder="hour" onChange={(e) => setManual((e.target.value) * 3600000)} />

                <input type="number" placeholder="min" onChange={(e) => setManual((e.target.value) * 60000)} /> */}
                
                <input style={{padding:"10px",borderRadius:"20px"}} type="number" placeholder=" Enter time in sec" onChange={(e) => setManual((e.target.value) * 1000)} />

            </div>

            <ShowManual manual={manual} />

            <Controlbuttons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset} />
        
        </div>
    )
}