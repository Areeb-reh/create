import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";


const  App =()=> {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Services/>}/>
      </Routes>
    </>
  );
}

export default App;
