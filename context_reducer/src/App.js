import { useContext } from "react";

import { ThemeContext } from "./Context/ThemeContext";

import AllRoutes from "./Routes/AllRoutes";

 import "./App.css"

function App() {

  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <div className={ theme === "light" ? "Dark" : "Light"} >
      <h1  

       className={ theme === "light" ? "HDark" : "HLight"}

       >My Application</h1>

         Make Theme : -    <button onClick={toggleTheme}>{theme}</button>

      <AllRoutes />
    </div>
  );
}

export default App;
