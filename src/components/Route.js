import React from "react";
import { Route , BrowserRouter, Router, Routes, Link} from "react-router-dom";
import { Project } from "./Projects/projects";
import { Intro } from "./Intro/intro";
import {Tabbar} from "./TabBar/tabbar";


const Neeraj = () =>{
    return(
        <div>
        <BrowserRouter>
        <Routes>    
        <Route path="/" element={<Tabbar/>}/>
        <Route path="/" element={<Intro/>}/>
        <Route path="/Project" element={<Project/>}/>
       </Routes>
       </BrowserRouter></div>
    
    )
} 

export default Neeraj;