import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"
import HomePage from "./Pages/Home/Home"



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
