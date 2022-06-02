import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Counter } from "./Component/Counter";
import Home from "./Component/Home";
import { Navbar } from "./Component/Navbar";
import { Todo } from "./Component/Todo";








function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/counter" element={<Counter />}></Route>
      </Routes>
    </div>
  );
}

export default App;