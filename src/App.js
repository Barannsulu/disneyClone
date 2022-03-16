import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/details/:id" element={<Details />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
