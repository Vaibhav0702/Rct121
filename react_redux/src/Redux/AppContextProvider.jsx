

import React from "react";

export const AppContext = React.createContext();


export const AppContextProvider = ({children , store}) => {
 
    const {dispatch ,getState} = store;

    const value = { dispatch , getState};

    const [state , setState] = React.useState(0);


    // Donot use this in production application is just for how it work internally

    const forceUpdate = () => setState(prev => prev+1)

    store.subscribe(forceUpdate)
   
    return (
          <AppContext.Provider value={value}>
              {children}
          </AppContext.Provider>
    )

}

// 1. state 
// 2. getState
// 3. dispatch
// 4. suscribe

// store.suscribe