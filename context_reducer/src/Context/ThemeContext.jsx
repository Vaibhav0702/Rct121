
import React, { useState } from 'react'

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
    //  console.log(children);
    const [state, setState] = useState("light");


    const toggleTheme = () => {
        state === "light" ? setState("dark") : setState("light")
    };

    return (
        <ThemeContext.Provider value={[state, toggleTheme]}>
            <div>
                {/* <h1>Context</h1> */}
                {children}
            </div>
        </ThemeContext.Provider>
    )
}