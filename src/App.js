import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"
import HomePage from "./Pages/Home/Home"
import Footer from "./Components/Footer/Footer"



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
