import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Add from "./pages/Add/Add"
import Gig from "./pages/Gig/Gig"
import Gigs from "./pages/Gigs/Gigs"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Message from "./pages/Message/Message"
import Messages from "./pages/Messages/Messages"
import MyGigs from "./pages/MyGigs/MyGigs"
import Orders from "./pages/Orders/Orders"
import Register from "./pages/Register/Register"


import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"


function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/gig/:id" element={<Gig/>}/>
        <Route path="/gigs" element={<Gigs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/message/:id" element={<Message/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/mygigs" element={<MyGigs/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
