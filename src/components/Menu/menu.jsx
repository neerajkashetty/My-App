import React from "react";
import './menu.scss';

export const Menu = ({menu , setMenu}) =>{

    return(
        <div className= {"Menu " + (menu && "active")}>
            <ul>
                <li onClick={()=> setMenu(false)}>
                    <a  href="#intro">Home</a>
                </li>

                <li onClick={()=> setMenu(false)}>
                    <a href="#project">Projects</a>
                </li>
                <li onClick={()=> setMenu(false)}>
                    <a href="#Test">Testinomials</a>
                </li>

                <li onClick={()=> setMenu(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    )
}