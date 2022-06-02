import React from "react";
import "./App.css";
import { Counter } from "./component/Counter";
import { AppContext } from "./Redux/AppContextProvider";

function App() {
  const { getState } = React.useContext(AppContext);

  const { counter } = getState();

  return (
    <div className="App">
      <Counter />
      <div>{counter}</div>
    </div>
  );
}

export default App;


// are context and redux  same ? ---> no 

// is context a state management tool ---> no , it is a tool to pass props to nested children, prop drilling
// context does not all to : 
// 1. store an initial value
// 2. read the current value
// 3. update the value

// useState and redux is a statemanagement tool 