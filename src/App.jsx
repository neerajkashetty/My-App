import { Tabbar } from "./components/TabBar/tabbar";
import { Intro } from "./components/Intro/intro";
import { Project } from "./components/Projects/projects";
import { Testino } from "./components/Testinomials/Testinomials";
import { Contact } from "./components/Contact/contact";
import { Menu } from "./components/Menu/menu";
import "./App.scss";
import { useState } from "react";
import {Nav} from "./components/TabBar/tabbar";
import Neeraj from './components/Route'


function App() {
  const [ menu, setMenu] = useState(false)
  return (
    <div className="app">
      {/* <Neeraj/> */}
      <Tabbar menu={menu} setMenu={setMenu}/>
      <Menu menu={menu} setMenu={setMenu}/> 
      <div className="section">
        <Intro/>
        <Project/>
        <Testino/>
        <Contact/>
      </div>
    </div>

  );
}

export default App;
