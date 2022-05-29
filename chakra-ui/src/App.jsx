
import { AppendData } from "./component/data";

import { Nav } from "./component/Nav";

import { Routes, Route } from "react-router-dom";
import LayoutO from "./component/LayoutO";
import LayoutT from "./component/LayoutT";
import LayoutTh from "./component/LayoutTh";


function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<AppendData />}></Route>
        <Route path="/layout1" element={<LayoutO/>}></Route>
        <Route path="/layout2" element={<LayoutT/>}></Route>
        <Route path="/layout3" element={<LayoutTh/>}></Route>
      </Routes>
    </>
  );
}

export default App;
