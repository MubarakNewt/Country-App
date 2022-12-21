import "./App.css";
import HomePage from "./Home";
import NavBar from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetails from "./CountryDetails";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "./GlobalStyles.style";
import styled from "styled-components";

function App() {
  // const [theme, setTheme] = useState("light");
  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:cca3" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
